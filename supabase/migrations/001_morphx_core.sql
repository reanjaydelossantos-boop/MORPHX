create extension if not exists "pgcrypto";

create type public.user_role as enum ('creator','admin','super_admin');
create type public.plan_tier as enum ('free','creator','pro');
create type public.item_status as enum ('draft','published','archived','moderation');
create type public.order_status as enum ('pending','paid','refunded','failed');

create table public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  role public.user_role not null default 'creator',
  full_name text,
  avatar_url text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table public.creator_stores (
  id uuid primary key default gen_random_uuid(),
  owner_id uuid not null references public.profiles(id) on delete cascade,
  slug text not null unique,
  display_name text not null,
  headline text,
  biography text,
  theme jsonb not null default '{}',
  published boolean not null default false,
  created_at timestamptz not null default now()
);

create table public.subscriptions (
  id uuid primary key default gen_random_uuid(),
  creator_id uuid not null references public.profiles(id) on delete cascade,
  tier public.plan_tier not null default 'free',
  status text not null default 'active',
  ai_credits_used integer not null default 0,
  storage_bytes bigint not null default 0,
  current_period_end timestamptz,
  created_at timestamptz not null default now()
);

create table public.products (
  id uuid primary key default gen_random_uuid(),
  creator_id uuid not null references public.profiles(id) on delete cascade,
  store_id uuid not null references public.creator_stores(id) on delete cascade,
  title text not null,
  slug text not null,
  product_type text not null,
  description text,
  price_minor integer not null default 0 check (price_minor >= 0),
  currency text not null default 'PHP',
  status public.item_status not null default 'draft',
  file_path text,
  cover_url text,
  created_at timestamptz not null default now(),
  unique(store_id, slug)
);

create table public.courses (
  id uuid primary key default gen_random_uuid(),
  creator_id uuid not null references public.profiles(id) on delete cascade,
  product_id uuid unique references public.products(id) on delete cascade,
  title text not null,
  description text,
  status public.item_status not null default 'draft',
  curriculum jsonb not null default '[]',
  created_at timestamptz not null default now()
);

create table public.customers (
  id uuid primary key default gen_random_uuid(),
  creator_id uuid not null references public.profiles(id) on delete cascade,
  email text not null,
  full_name text,
  country text,
  lifetime_value_minor bigint not null default 0,
  created_at timestamptz not null default now(),
  unique(creator_id,email)
);

create table public.orders (
  id uuid primary key default gen_random_uuid(),
  creator_id uuid not null references public.profiles(id),
  customer_id uuid not null references public.customers(id),
  status public.order_status not null default 'pending',
  currency text not null default 'PHP',
  subtotal_minor integer not null,
  platform_fee_minor integer not null default 0,
  processor_fee_minor integer not null default 0,
  total_minor integer not null,
  payment_provider text,
  external_payment_id text unique,
  created_at timestamptz not null default now()
);

create table public.order_items (
  id uuid primary key default gen_random_uuid(),
  order_id uuid not null references public.orders(id) on delete cascade,
  product_id uuid not null references public.products(id),
  quantity integer not null default 1,
  unit_price_minor integer not null
);

create table public.payouts (
  id uuid primary key default gen_random_uuid(),
  creator_id uuid not null references public.profiles(id),
  amount_minor integer not null,
  currency text not null default 'PHP',
  status text not null default 'pending',
  provider_reference text,
  scheduled_for timestamptz,
  created_at timestamptz not null default now()
);

create table public.social_accounts (
  id uuid primary key default gen_random_uuid(),
  creator_id uuid not null references public.profiles(id) on delete cascade,
  provider text not null,
  provider_account_id text not null,
  account_name text,
  encrypted_token_ref text,
  status text not null default 'connected',
  metadata jsonb not null default '{}',
  created_at timestamptz not null default now(),
  unique(creator_id,provider,provider_account_id)
);

create table public.social_posts (
  id uuid primary key default gen_random_uuid(),
  creator_id uuid not null references public.profiles(id) on delete cascade,
  body text not null,
  media jsonb not null default '[]',
  channels jsonb not null default '[]',
  status text not null default 'draft',
  scheduled_for timestamptz,
  published_at timestamptz,
  metrics jsonb not null default '{}',
  created_at timestamptz not null default now()
);

create table public.reports (
  id uuid primary key default gen_random_uuid(),
  reporter_id uuid references public.profiles(id),
  subject_type text not null,
  subject_id uuid not null,
  reason text not null,
  status text not null default 'open',
  assigned_admin_id uuid references public.profiles(id),
  created_at timestamptz not null default now()
);

create table public.admin_audit_log (
  id bigint generated always as identity primary key,
  admin_id uuid not null references public.profiles(id),
  action text not null,
  target_type text not null,
  target_id text,
  details jsonb not null default '{}',
  created_at timestamptz not null default now()
);

create index products_creator_idx on public.products(creator_id,status);
create index orders_creator_date_idx on public.orders(creator_id,created_at desc);
create index orders_customer_idx on public.orders(customer_id);
create index social_posts_schedule_idx on public.social_posts(creator_id,scheduled_for);
create index reports_status_idx on public.reports(status,created_at);

alter table public.profiles enable row level security;
alter table public.creator_stores enable row level security;
alter table public.subscriptions enable row level security;
alter table public.products enable row level security;
alter table public.courses enable row level security;
alter table public.customers enable row level security;
alter table public.orders enable row level security;
alter table public.order_items enable row level security;
alter table public.payouts enable row level security;
alter table public.social_accounts enable row level security;
alter table public.social_posts enable row level security;
alter table public.reports enable row level security;
alter table public.admin_audit_log enable row level security;

create function public.is_admin() returns boolean language sql stable security definer set search_path=public as $$
  select exists(select 1 from public.profiles where id=auth.uid() and role in ('admin','super_admin'));
$$;

create policy "profiles_self_or_admin" on public.profiles for select using (id=auth.uid() or public.is_admin());
create policy "profiles_self_update" on public.profiles for update using (id=auth.uid());
create policy "stores_owner_or_public" on public.creator_stores for select using (published or owner_id=auth.uid() or public.is_admin());
create policy "stores_owner_write" on public.creator_stores for all using (owner_id=auth.uid() or public.is_admin()) with check (owner_id=auth.uid() or public.is_admin());
create policy "products_owner_or_public" on public.products for select using (status='published' or creator_id=auth.uid() or public.is_admin());
create policy "products_owner_write" on public.products for all using (creator_id=auth.uid() or public.is_admin()) with check (creator_id=auth.uid() or public.is_admin());
create policy "creator_private_rows" on public.customers for all using (creator_id=auth.uid() or public.is_admin()) with check (creator_id=auth.uid() or public.is_admin());
create policy "creator_orders" on public.orders for select using (creator_id=auth.uid() or public.is_admin());
create policy "creator_payouts" on public.payouts for select using (creator_id=auth.uid() or public.is_admin());
create policy "creator_social_accounts" on public.social_accounts for all using (creator_id=auth.uid() or public.is_admin()) with check (creator_id=auth.uid() or public.is_admin());
create policy "creator_social_posts" on public.social_posts for all using (creator_id=auth.uid() or public.is_admin()) with check (creator_id=auth.uid() or public.is_admin());
create policy "admin_reports" on public.reports for all using (public.is_admin()) with check (public.is_admin());
create policy "admin_audit" on public.admin_audit_log for select using (public.is_admin());

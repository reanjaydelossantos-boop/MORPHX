"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import {
  ArrowRight,
  BarChart3,
  BookOpen,
  Bot,
  Boxes,
  Check,
  ChevronDown,
  CircleDollarSign,
  CreditCard,
  FileText,
  Globe2,
  GraduationCap,
  Home,
  LayoutDashboard,
  LayoutTemplate,
  Mail,
  Menu,
  Package,
  Palette,
  Play,
  Search,
  Settings,
  ShoppingBag,
  Sparkles,
  Store,
  TrendingUp,
  Upload,
  Users,
  WandSparkles,
  X,
  Zap,
} from "lucide-react";
import {
  ConnectionGlobe,
  DitherCursor,
  IdeaMagicTransform,
  InfiniteMarketplaceGallery,
  LenticularPricingCarousel,
  MagicConnections,
  ParallaxFeatureCarousel,
  UserCircles,
} from "./motion-experiences";

const publicNav = [
  ["Features", "/features"],
  ["Marketplace", "/marketplace"],
  ["Pricing", "/pricing"],
  ["About", "/about"],
];
const creatorNav = [
  ["Dashboard", "/app", LayoutDashboard],
  ["Products", "/app/products", Package],
  ["Create Product", "/app/products/new", Zap],
  ["Courses", "/app/courses", GraduationCap],
  ["AI Studio", "/app/ai-studio", Sparkles],
  ["Store Builder", "/app/store-builder", Palette],
  ["Orders", "/app/orders", ShoppingBag],
  ["Customers", "/app/customers", Users],
  ["Analytics", "/app/analytics", BarChart3],
  ["Marketing", "/app/marketing", TrendingUp],
  ["Social Hub", "/app/social", Globe2],
  ["Payments", "/app/payments", CreditCard],
  ["Payouts", "/app/payouts", CircleDollarSign],
  ["Settings", "/app/settings", Settings],
] as const;
const aiTools = [
  [
    "AI Ebook Creator",
    "Turn your knowledge into a polished, sellable ebook.",
    BookOpen,
    "violet",
  ],
  [
    "AI Course Builder",
    "Build outcomes, modules, lessons and student resources.",
    GraduationCap,
    "blue",
  ],
  [
    "Product Description",
    "Write clear, persuasive product copy in your voice.",
    FileText,
    "rose",
  ],
  [
    "Sales Page Generator",
    "Create a complete conversion-focused sales page.",
    LayoutTemplate,
    "amber",
  ],
  [
    "Social Media Generator",
    "Turn one offer into a month of social content.",
    Sparkles,
    "teal",
  ],
  [
    "Email Marketing",
    "Write welcome, launch and nurture sequences.",
    Mail,
    "sky",
  ],
  [
    "Business Assistant",
    "Ask questions using your real store performance.",
    Bot,
    "purple",
  ],
] as const;

function Logo() {
  return (
    <Link href="/" className="logo">
      <span className="brand-mark"><img src="/morphx-logo.webp" alt="" /></span>
      <b>MorphX</b>
    </Link>
  );
}
function Button({
  children,
  href = "/register",
  ghost = false,
}: {
  children: React.ReactNode;
  href?: string;
  ghost?: boolean;
}) {
  return (
    <Link className={ghost ? "btn ghost" : "btn"} href={href}>
      {children}
    </Link>
  );
}
function PublicHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="public-header">
      <Logo />
      <nav>
        {publicNav.map(([n, h]) => (
          <Link key={h} href={h}>
            {n}
          </Link>
        ))}
      </nav>
      <div className="nav-actions">
        <Button ghost href="/login">
          Log in
        </Button>
        <Button>
          Start free <ArrowRight />
        </Button>
      </div>
      <button className="mobile-menu" onClick={() => setOpen(!open)}>
        {open ? <X /> : <Menu />}
      </button>
      {open && (
        <div className="mobile-nav">
          {publicNav.map(([n, h]) => (
            <Link key={h} href={h} onClick={() => setOpen(false)}>
              {n}
            </Link>
          ))}
          <Link href="/login">Log in</Link>
          <Link href="/register">Start free</Link>
        </div>
      )}
    </header>
  );
}
function Footer() {
  return (
    <footer>
      <div>
        <Logo />
        <p>
          The creator-commerce operating system.
          <br />
          Built for the Philippines. Ready for the world.
        </p>
      </div>
      <div>
        <b>Product</b>
        <Link href="/features">Features</Link>
        <Link href="/marketplace">Marketplace</Link>
        <Link href="/pricing">Pricing</Link>
      </div>
      <div>
        <b>Company</b>
        <Link href="/about">About</Link>
        <Link href="/help">Help Center</Link>
        <Link href="/privacy">Privacy</Link>
        <Link href="/terms">Terms</Link>
      </div>
      <small>© 2026 MorphX. All rights reserved.</small>
    </footer>
  );
}

function HomePage() {
  return (
    <>
      <PublicHeader />
      <main className="home-page">
        <section className="hero">
          <div className="aurora" />
          <div className="eyebrow">
            <Sparkles /> CREATOR COMMERCE, REIMAGINED
          </div>
          <h1>
            Turn what you know
            <br />
            <em>into a business.</em>
          </h1>
          <p>
            Create digital products, launch your storefront, accept local and
            global payments, and let AI market it all—from one powerful
            workspace.
          </p>
          <div className="hero-actions">
            <Button href="/register">
              Build your store <ArrowRight />
            </Button>
            <Button ghost href="/features">
              See how it works <Play />
            </Button>
          </div>
          <div className="trust">
            <span>RJ</span>
            <span>KM</span>
            <span>AL</span>
            <p>
              <b>Built for the next wave of creators.</b>
              <br />
              Start in PHP. Sell worldwide.
            </p>
          </div>
        </section>
        <DashboardPreview />
        <section className="marquee">
          CREATE <i>✦</i> SELL <i>✦</i> TEACH <i>✦</i> AUTOMATE <i>✦</i> GROW
        </section>
        <section className="section">
          <p className="kicker">ONE WORKSPACE. ENDLESS POSSIBILITIES.</p>
          <div className="split-title">
            <h2>
              Everything between
              <br />
              <span>idea and income.</span>
            </h2>
            <p>
              MorphX replaces the messy stack of tools with one creator
              operating system—designed for local creators and ready for
              international customers.
            </p>
          </div>
          <div className="feature-bento">
            <article className="big">
              <Sparkles />
              <label>AI NATIVE</label>
              <h3>Create products with AI.</h3>
              <p>
                Turn a topic into an ebook, course, lead magnet, offer page or
                content campaign in minutes.
              </p>
              <div className="mini-prompt">
                <small>WHAT DO YOU KNOW?</small>
                <p>I&apos;ve worked as a virtual assistant for five years...</p>
                <button>
                  Generate my business <ArrowRight />
                </button>
              </div>
            </article>
            <article>
              <Store />
              <h3>Your storefront. Your brand.</h3>
              <p>Launch a beautiful mobile-first home for every offer.</p>
              <div className="store-card">
                <div className="store-gradient" />
                <b>Rean Creates</b>
                <small>AI • Business • Digital Income</small>
              </div>
            </article>
            <article>
              <Globe2 />
              <h3>Local money. Global reach.</h3>
              <p>
                Prepared for GCash, Maya, QRPh, cards and international
                checkout.
              </p>
              <div className="payment-grid">
                <span>GCash</span>
                <span>Maya</span>
                <span>QRPh</span>
                <span>VISA</span>
              </div>
            </article>
          </div>
        </section>
        <section className="cta">
          <Sparkles />
          <h2>
            Your knowledge already
            <br />
            has value. <em>Package it.</em>
          </h2>
          <p>
            Open your storefront for free and create your first offer with AI.
          </p>
          <Button href="/register">
            Create my MorphX <ArrowRight />
          </Button>
        </section>
      </main>
      <Footer />
    </>
  );
}

function DashboardPreview() {
  return (
    <section className="preview-wrap">
      <div className="preview-chrome">
        <i />
        <i />
        <i />
        <span>app.morphx.co/dashboard</span>
      </div>
      <div className="preview-body">
        <aside>
          <Logo />
          <small>WORKSPACE</small>
          <b>◈ Overview</b>
          <span>◫ Storefront</span>
          <span>◆ Products</span>
          <span>✦ MorphX AI</span>
        </aside>
        <div className="preview-main">
          <div className="preview-head">
            <div>
              <small>THURSDAY, SEP 3</small>
              <h3>Good evening, Rean.</h3>
            </div>
            <button>+ Create</button>
          </div>
          <div className="metric-row">
            <Metric t="Revenue" v="₱47,820" />
            <Metric t="Orders" v="184" />
            <Metric t="Store visits" v="6,421" />
          </div>
          <div className="preview-grid">
            <div className="chart">
              <b>Revenue overview</b>
              <svg viewBox="0 0 600 180" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="g" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0" stopColor="#9b7bff" stopOpacity=".4" />
                    <stop offset="1" stopColor="#9b7bff" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <path
                  d="M0 160 C60 140 70 150 115 120 S210 145 260 95 S350 120 400 70 S500 90 600 20 L600 180 L0 180Z"
                  fill="url(#g)"
                />
                <path
                  d="M0 160 C60 140 70 150 115 120 S210 145 260 95 S350 120 400 70 S500 90 600 20"
                  fill="none"
                  stroke="#a88aff"
                  strokeWidth="3"
                />
              </svg>
            </div>
            <div className="ai-insight">
              <Sparkles />
              <small>MORPHX AI</small>
              <b>Your course traffic is up, but conversion can improve.</b>
              <p>I can rewrite your offer and create five campaign posts.</p>
              <button>Improve conversion</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
function Metric({ t, v }: { t: string; v: string }) {
  return (
    <article>
      <small>{t}</small>
      <b>{v}</b>
      <em>↑ 18.4%</em>
    </article>
  );
}

const products = [
  [
    "AI Freelancing: Zero to First Client",
    "Rean Creates",
    "COURSE",
    "₱1,499",
    "art-purple",
  ],
  [
    "120 Social Media Templates",
    "Studio North",
    "TEMPLATE PACK",
    "₱399",
    "art-blue",
  ],
  ["30 Days of Quiet Faith", "Grace Notes", "EBOOK", "₱199", "art-gold"],
  [
    "The VA Interview Answer Book",
    "Remote Ready",
    "PDF GUIDE",
    "₱249",
    "art-navy",
  ],
  [
    "Solo Business Command Center",
    "System House",
    "NOTION TEMPLATE",
    "₱599",
    "art-green",
  ],
  [
    "Facebook Ads for Small Business",
    "Growth Lab",
    "MINI COURSE",
    "₱899",
    "art-coral",
  ],
] as const;
function Marketplace() {
  const [q, setQ] = useState("");
  const shown = products.filter((p) =>
    p.join(" ").toLowerCase().includes(q.toLowerCase()),
  );
  return (
    <PublicShell>
      <section className="inner-hero">
        <p className="kicker">DISCOVER ON MORPHX</p>
        <h1>Learn. Build. Grow.</h1>
        <p>
          Useful digital products and practical courses from independent
          creators.
        </p>
        <div className="search">
          <Search />
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search ebooks, courses, templates..."
          />
        </div>
      </section>
      <div className="categories">
        <button className="active">Featured</button>
        {[
          "AI",
          "Business",
          "Career",
          "Design",
          "Christian Living",
          "Self Growth",
        ].map((x) => (
          <button key={x}>{x}</button>
        ))}
      </div>
      <section className="product-grid">
        {shown.map((p, i) => (
          <Link
            href="/product/ai-freelancing"
            className="product-card"
            key={p[0]}
          >
            <div className={`product-art ${p[4]}`}>
              <span>
                {i === 0
                  ? "AI"
                  : i === 1
                    ? "120"
                    : i === 2
                      ? "30"
                      : i === 3
                        ? "VA"
                        : i === 4
                          ? "OS"
                          : "ADS"}
              </span>
            </div>
            <small>{p[2]}</small>
            <h3>{p[0]}</h3>
            <p>
              {p[1]} <Check />
            </p>
            <div>
              <b>{p[3]}</b>
              <span>4.9 ★</span>
            </div>
          </Link>
        ))}
      </section>
    </PublicShell>
  );
}
function PublicShell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <PublicHeader />
      <main className="public-main">{children}</main>
      <Footer />
    </>
  );
}

function Features() {
  return (
    <PublicShell>
      <section className="inner-hero left">
        <p className="kicker">THE MORPHX OPERATING SYSTEM</p>
        <h1>
          From idea to income,
          <br />
          <em>all in one place.</em>
        </h1>
        <p>
          Build products, sell beautifully, deliver automatically and grow with
          data—not guesswork.
        </p>
      </section>
      <section className="feature-list">
        {[
          [
            "01 / CREATE",
            "AI Studio",
            "Turn rough ideas into ebooks, courses, sales pages and complete launch campaigns.",
            Sparkles,
          ],
          [
            "02 / SELL",
            "Storefront + checkout",
            "Create a fast, mobile storefront for every product, course, bundle and lead magnet.",
            Store,
          ],
          [
            "03 / DELIVER",
            "Automatic access",
            "After payment, MorphX unlocks files and courses while your CRM records the customer.",
            Zap,
          ],
          [
            "04 / GROW",
            "Actionable analytics",
            "Understand where customers come from, what converts and exactly what to improve.",
            BarChart3,
          ],
        ].map(([n, t, d, I]) => {
          const Icon = I as typeof Sparkles;
          return (
            <article key={t as string}>
              <small>{n as string}</small>
              <div>
                <Icon />
                <h2>{t as string}</h2>
                <p>{d as string}</p>
              </div>
              <div className="feature-visual">
                <span>
                  <Check /> Connected
                </span>
                <b>{t as string}</b>
                <div className="visual-lines">
                  <i />
                  <i />
                  <i />
                </div>
              </div>
            </article>
          );
        })}
      </section>
    </PublicShell>
  );
}
function Pricing() {
  const plans = [
    [
      "FREE",
      "₱0",
      "For testing your first idea.",
      [
        "1 storefront",
        "3 digital products",
        "1 basic course",
        "20 AI credits",
        "Basic analytics",
        "8% platform fee",
      ],
    ],
    [
      "CREATOR",
      "₱299",
      "For consistent creator income.",
      [
        "Unlimited products",
        "Up to 10 courses",
        "500 AI credits",
        "Email audience tools",
        "Advanced analytics",
        "5% platform fee",
      ],
    ],
    [
      "PRO",
      "₱799",
      "For serious creator businesses.",
      [
        "Everything in Creator",
        "Custom domain",
        "2,500 AI credits",
        "Bundles + upsells",
        "Priority support",
        "2% platform fee",
      ],
    ],
  ];
  return (
    <PublicShell>
      <section className="inner-hero">
        <p className="kicker">SIMPLE PRICING</p>
        <h1>Start free. Grow smart.</h1>
        <p>Upgrade only when your creator business needs more power.</p>
      </section>
      <section className="pricing-grid">
        {plans.map((p, i) => (
          <article className={i === 1 ? "popular" : ""} key={p[0] as string}>
            {i === 1 && <label>MOST POPULAR</label>}
            <small>{p[0] as string}</small>
            <h2>
              {p[1] as string}
              <span>/month</span>
            </h2>
            <p>{p[2] as string}</p>
            <Button href="/register">Choose {p[0] as string}</Button>
            <ul>
              {(p[3] as string[]).map((x) => (
                <li key={x}>
                  <Check />
                  {x}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </section>
    </PublicShell>
  );
}

function Storefront() {
  return (
    <PublicShell>
      <section className="storefront">
        <div className="cover" />
        <div className="creator-profile">
          <div className="avatar">RJ</div>
          <div>
            <h1>
              Rean Creates <span>✓</span>
            </h1>
            <p>Helping ambitious Filipinos build digital income with AI.</p>
            <small>12 products · 4.9 ★ · 4,821 students</small>
          </div>
          <button>Follow</button>
        </div>
        <nav>
          <b>Featured</b>
          <span>Products</span>
          <span>Courses</span>
          <span>About</span>
        </nav>
        <div className="featured-grid">
          {products.slice(0, 3).map((p, i) => (
            <Link href="/product/ai-freelancing" key={p[0]}>
              <div className={`product-art ${p[4]}`}>
                <span>{i === 0 ? "AI" : i === 1 ? "120" : "30"}</span>
              </div>
              <small>{p[2]}</small>
              <h3>{p[0]}</h3>
              <p>{p[3]}</p>
            </Link>
          ))}
        </div>
      </section>
    </PublicShell>
  );
}
function ProductDetail({ course = false }: { course?: boolean }) {
  return (
    <PublicShell>
      <section className="detail">
        <div className="detail-art art-purple">
          <span>{course ? "COURSE" : "EBOOK"}</span>
          <b>
            AI
            <br />
            Freelancing
          </b>
        </div>
        <div>
          <p className="kicker">
            {course ? "8-MODULE COURSE" : "DIGITAL GUIDE + PROMPT PACK"}
          </p>
          <h1>
            {course
              ? "AI Freelancing: Zero to First Client"
              : "AI Side Hustle Blueprint"}
          </h1>
          <p className="lead">
            A practical, beginner-friendly system for turning AI skills into a
            real digital income stream—without hype or guesswork.
          </p>
          <div className="byline">
            <span>RJ</span>
            <p>
              Created by <b>Rean Creates</b>
              <br />
              4.9 ★ · 1,248 learners
            </p>
          </div>
          <div className="purchase">
            <h2>{course ? "₱1,499" : "₱299"}</h2>
            <button>
              Get instant access <ArrowRight />
            </button>
            <small>GCash · Maya · QRPh · Visa/Mastercard</small>
          </div>
        </div>
      </section>
      <section className="detail-copy">
        <div>
          <h2>What you&apos;ll get</h2>
          <p>
            A focused system, practical examples and ready-to-use resources
            designed for action. Access is delivered instantly after successful
            checkout.
          </p>
        </div>
        <ul>
          <li>
            <Check />
            Lifetime access
          </li>
          <li>
            <Check />
            {course ? "8 practical modules" : "86-page digital guide"}
          </li>
          <li>
            <Check />
            Bonus prompt library
          </li>
          <li>
            <Check />
            Future updates included
          </li>
        </ul>
      </section>
    </PublicShell>
  );
}
function About({ kind = "about" }: { kind?: string }) {
  const content: Record<string, [string, string, string]> = {
    about: [
      "We believe knowledge should create opportunity.",
      "MorphX gives independent creators the technology to turn experience into products, income and impact.",
      "Our mission is to make creator commerce accessible in the Philippines and competitive everywhere.",
    ],
    help: [
      "How can we help?",
      "Find clear answers about your storefront, products, payments and account.",
      "Search the help center or explore the common topics below.",
    ],
    terms: [
      "Terms of Service",
      "The rules that keep MorphX safe and fair for creators and customers.",
      "These MVP terms are a structured placeholder and require legal review before commercial launch.",
    ],
    privacy: [
      "Privacy Policy",
      "How MorphX handles creator and customer information.",
      "This MVP policy is a structured placeholder and requires legal review before commercial launch.",
    ],
  };
  const c = content[kind];
  return (
    <PublicShell>
      <section className="text-page">
        <p className="kicker">{kind.toUpperCase()}</p>
        <h1>{c[0]}</h1>
        <p className="lead">{c[1]}</p>
        <article>
          <h2>{kind === "help" ? "Popular topics" : "Built for trust"}</h2>
          <p>{c[2]}</p>
          {kind === "help" ? (
            <div className="help-grid">
              {[
                "Getting started",
                "Products & courses",
                "Payments & payouts",
                "Storefront design",
                "Account & billing",
                "Contact support",
              ].map((x) => (
                <button key={x}>
                  {x}
                  <ArrowRight />
                </button>
              ))}
            </div>
          ) : (
            <>
              <h3>Clear ownership</h3>
              <p>
                Creators remain responsible for the content they publish and
                retain rights to their original work.
              </p>
              <h3>Secure operations</h3>
              <p>
                Access, payments and customer information will be handled
                through purpose-built providers and documented controls.
              </p>
            </>
          )}
        </article>
      </section>
    </PublicShell>
  );
}
function Auth({ register = false }: { register?: boolean }) {
  return (
    <main className="auth-page">
      <Link href="/" className="auth-back">
        ← Back to MorphX
      </Link>
      <section>
        <Logo />
        <p className="kicker">{register ? "START BUILDING" : "WELCOME BACK"}</p>
        <h1>
          {register
            ? "Create your creator business."
            : "Continue your momentum."}
        </h1>
        <p>
          {register
            ? "Your storefront, products and AI workspace are waiting."
            : "Sign in to manage your storefront and sales."}
        </p>
        <button className="social-login">G&nbsp; Continue with Google</button>
        <div className="or">
          <span>or continue with email</span>
        </div>
        {register && (
          <label>
            Full name
            <input placeholder="Rean Jay" />
          </label>
        )}
        <label>
          Email address
          <input type="email" placeholder="you@example.com" />
        </label>
        <label>
          Password
          <input type="password" placeholder="••••••••" />
        </label>
        <Button href="/app">
          {register ? "Create free account" : "Log in"} <ArrowRight />
        </Button>
        <small>
          {register ? "Already have an account?" : "New to MorphX?"}{" "}
          <Link href={register ? "/login" : "/register"}>
            {register ? "Log in" : "Create an account"}
          </Link>
        </small>
      </section>
      <aside>
        <Sparkles />
        <blockquote>
          “The fastest way from a useful idea to a business people can buy
          from.”
        </blockquote>
        <div className="auth-orbit">
          <i />
          <i />
          <i />
        </div>
      </aside>
    </main>
  );
}

function AppShell({
  children,
  title,
  desc,
  actions,
}: {
  children: React.ReactNode;
  title: string;
  desc?: string;
  actions?: React.ReactNode;
}) {
  const path = usePathname();
  const [open, setOpen] = useState(false);
  return (
    <main className="app-shell">
      <aside className={open ? "app-sidebar open" : "app-sidebar"}>
        <Logo />
        <button className="close-side" onClick={() => setOpen(false)}>
          <X />
        </button>
        <div className="user-card">
          <span>RJ</span>
          <div>
            <b>Rean Creates</b>
            <small>Creator plan</small>
          </div>
          <ChevronDown />
        </div>
        <nav>
          {creatorNav.map(([n, h, I]) => (
            <Link
              className={path === h ? "active" : ""}
              key={h}
              href={h}
              onClick={() => setOpen(false)}
            >
              <I />
              {n}
            </Link>
          ))}
        </nav>
        <div className="plan-progress">
          <div>
            <b>Creator plan</b>
            <small>312 / 500 AI credits</small>
          </div>
          <i>
            <span />
          </i>
          <Link href="/pricing">Manage plan</Link>
        </div>
      </aside>
      <section className="app-area">
        <header>
          <button className="hamburger" onClick={() => setOpen(true)}>
            <Menu />
          </button>
          <div>
            <small>REAN CREATES / MORPHX</small>
            <h1>{title}</h1>
            {desc && <p>{desc}</p>}
          </div>
          <div>
            {actions || (
              <button className="icon-btn">
                <Search />
              </button>
            )}
            <button className="round-avatar">RJ</button>
          </div>
        </header>
        {children}
      </section>
    </main>
  );
}
function CreatorDashboard() {
  return (
    <AppShell
      title="Good evening, Rean."
      desc="Here’s what’s happening with your business today."
      actions={<Button href="/app/products/new">+ Create</Button>}
    >
      <div className="dashboard-metrics">
        <Stat label="TOTAL REVENUE" value="₱214,680" delta="+18.4%" />
        <Stat label="THIS MONTH" value="₱47,820" delta="+12.1%" />
        <Stat label="ORDERS" value="184" delta="+21" />
        <Stat label="STORE VISITORS" value="6,421" delta="+24.7%" />
        <Stat label="CONVERSION" value="2.86%" delta="+0.4%" />
      </div>
      <div className="dashboard-grid">
        <article className="revenue-card">
          <div className="card-head">
            <div>
              <small>REVENUE</small>
              <h3>Revenue overview</h3>
            </div>
            <button>
              Last 30 days <ChevronDown />
            </button>
          </div>
          <div className="big-number">
            ₱47,820 <span>+18.4%</span>
          </div>
          <svg viewBox="0 0 900 250" preserveAspectRatio="none">
            <defs>
              <linearGradient id="area" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0" stopColor="#9b7bff" stopOpacity=".35" />
                <stop offset="1" stopColor="#9b7bff" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path
              d="M0 220 C80 200 100 205 160 180 S280 210 340 145 S470 170 530 115 S650 145 720 75 S820 90 900 25 L900 250L0 250Z"
              fill="url(#area)"
            />
            <path
              d="M0 220 C80 200 100 205 160 180 S280 210 340 145 S470 170 530 115 S650 145 720 75 S820 90 900 25"
              fill="none"
              stroke="#9f82ff"
              strokeWidth="4"
            />
          </svg>
        </article>
        <article className="recommend-card">
          <Sparkles />
          <small>MORPHX AI RECOMMENDS</small>
          <h3>
            Your strongest product is attracting high-intent Facebook traffic.
          </h3>
          <p>Create a focused retargeting campaign and test a ₱399 bundle.</p>
          <button>
            Build this campaign <ArrowRight />
          </button>
          <footer>3 more recommendations</footer>
        </article>
        <DataCard
          title="Recent sales"
          rows={[
            ["Maria A.", "AI Side Hustle Blueprint", "₱299"],
            ["John D.", "AI Freelancer Masterclass", "₱1,499"],
            ["Sofia M.", "Creator Prompt Pack", "₱499"],
          ]}
        />
        <DataCard
          title="Best-selling products"
          rows={[
            ["#1", "AI Side Hustle Blueprint", "₱19,734"],
            ["#2", "Freelancer Masterclass", "₱14,990"],
            ["#3", "Creator Prompt Pack", "₱8,483"],
          ]}
        />
        <article className="growth-card">
          <div className="card-head">
            <h3>Customer growth</h3>
            <span>+86 this month</span>
          </div>
          <div className="bars">
            {[34, 45, 38, 62, 54, 76, 69, 88, 80, 96].map((x, i) => (
              <i key={i} style={{ height: x + "%" }} />
            ))}
          </div>
        </article>
        <article className="traffic-card">
          <h3>Traffic sources</h3>
          {[
            ["Facebook", 46],
            ["Direct", 24],
            ["TikTok", 18],
            ["Instagram", 12],
          ].map(([x, v]) => (
            <div key={x as string}>
              <span>{x}</span>
              <i>
                <b style={{ width: v + "%" }} />
              </i>
              <strong>{v}%</strong>
            </div>
          ))}
        </article>
      </div>
    </AppShell>
  );
}
function Stat({
  label,
  value,
  delta,
}: {
  label: string;
  value: string;
  delta: string;
}) {
  return (
    <article>
      <small>{label}</small>
      <h2>{value}</h2>
      <span>{delta}</span>
    </article>
  );
}
function DataCard({ title, rows }: { title: string; rows: string[][] }) {
  return (
    <article className="data-card">
      <div className="card-head">
        <h3>{title}</h3>
        <button>View all</button>
      </div>
      {rows.map((r, i) => (
        <div className="data-row" key={i}>
          <span>{r[0]}</span>
          <p>
            <b>{r[1]}</b>
            <small>{i === 0 ? "2 minutes ago" : "Today"}</small>
          </p>
          <strong>{r[2]}</strong>
        </div>
      ))}
    </article>
  );
}

function AIStudio() {
  return (
    <AppShell
      title="AI Studio"
      desc="Create products and campaigns with AI that understands your business."
      actions={
        <div className="credit-pill">
          <Sparkles /> 312 credits left
        </div>
      }
    >
      <section className="ai-hero">
        <div>
          <p className="kicker">CREATOR BUSINESS ASSISTANT</p>
          <h2>What are we building today?</h2>
          <p>
            Ask anything about your products, audience, launch or store
            performance.
          </p>
          <div className="ai-input">
            <textarea placeholder="I want to create an ebook for Filipino freelancers who want international clients..." />
            <button>
              <ArrowRight />
            </button>
          </div>
          <small>
            Try: “Turn my best product into a 7-day launch campaign.”
          </small>
        </div>
        <Bot />
      </section>
      <section className="tool-grid">
        <h2>Specialized AI tools</h2>
        {aiTools.map(([n, d, I, c]) => (
          <article key={n}>
            <span className={c}>
              <I />
            </span>
            <div>
              <h3>{n}</h3>
              <p>{d}</p>
            </div>
            <ArrowRight />
          </article>
        ))}
      </section>
    </AppShell>
  );
}
function ProductsPage({ courses = false }: { courses?: boolean }) {
  const list = courses
    ? products.filter((_, i) => i === 0 || i === 5)
    : products.slice(0, 4);
  return (
    <AppShell
      title={courses ? "Courses" : "Products"}
      desc={
        courses
          ? "Build learning experiences students finish."
          : "Create, publish and manage everything you sell."
      }
      actions={
        <Button href={courses ? "/app/ai-studio" : "/app/products/new"}>
          + Create {courses ? "course" : "product"}
        </Button>
      }
    >
      <div className="toolbar">
        <div className="search compact">
          <Search />
          <input
            placeholder={`Search ${courses ? "courses" : "products"}...`}
          />
        </div>
        <button>
          All types <ChevronDown />
        </button>
        <button>
          Published <ChevronDown />
        </button>
      </div>
      <section className="table-card">
        <div className="table-head">
          <span>PRODUCT</span>
          <span>TYPE</span>
          <span>SALES</span>
          <span>REVENUE</span>
          <span>STATUS</span>
        </div>
        {list.map((p, i) => (
          <div className="product-row" key={p[0]}>
            <div>
              <span className={p[4]} />
              <p>
                <b>{p[0]}</b>
                <small>Updated {i + 1} day ago</small>
              </p>
            </div>
            <span>{p[2]}</span>
            <span>{[66, 10, 34, 18][i] || 8}</span>
            <b>{["₱19,734", "₱14,990", "₱8,483", "₱4,482"][i]}</b>
            <em>Published</em>
          </div>
        ))}
      </section>
    </AppShell>
  );
}
function CreateProduct() {
  const [type, setType] = useState("Ebook / PDF");
  return (
    <AppShell
      title="Create product"
      desc="Start with the basics. You can polish everything before publishing."
    >
      <section className="create-layout">
        <div className="form-card">
          <div className="steps-line">
            <b>1</b>
            <span />
            <i>2</i>
            <span />
            <i>3</i>
          </div>
          <h2>What are you selling?</h2>
          <p>Choose a product type, then add the details customers will see.</p>
          <label>
            Product type
            <div className="type-grid">
              {[
                ["Ebook / PDF", BookOpen],
                ["Template", LayoutTemplate],
                ["Prompt pack", Sparkles],
                ["ZIP / resources", Boxes],
                ["Video", Play],
                ["Bundle", Package],
              ].map(([n, I]) => (
                <button
                  className={type === n ? "selected" : ""}
                  key={n as string}
                  onClick={() => setType(n as string)}
                >
                  <I />
                  <span>{n as string}</span>
                  {type === n && <Check />}
                </button>
              ))}
            </div>
          </label>
          <label>
            Product name
            <input placeholder="e.g. AI Side Hustle Blueprint" />
          </label>
          <label>
            Short description
            <textarea placeholder="What will your customer achieve?" />
          </label>
          <div className="two-col">
            <label>
              Price (PHP)
              <input placeholder="299" />
            </label>
            <label>
              Compare-at price
              <input placeholder="499" />
            </label>
          </div>
          <button className="upload">
            <Upload />
            <b>Upload your files</b>
            <span>PDF, ZIP, MP4 up to your plan limit</span>
          </button>
          <div className="form-actions">
            <button>Save draft</button>
            <Button href="/app/products">
              Continue <ArrowRight />
            </Button>
          </div>
        </div>
        <aside className="preview-card">
          <small>LIVE PREVIEW</small>
          <div className="preview-product art-purple">
            <span>{type}</span>
          </div>
          <h3>Your product name</h3>
          <p>Your product description will appear here.</p>
          <b>₱299</b>
          <button>Get instant access</button>
        </aside>
      </section>
    </AppShell>
  );
}
function StoreBuilder() {
  const [theme, setTheme] = useState("Midnight");
  return (
    <AppShell
      title="Store Builder"
      desc="Make your storefront feel unmistakably yours."
      actions={
        <>
          <button className="outline-action">Preview store</button>
          <button className="primary-action">Publish changes</button>
        </>
      }
    >
      <section className="builder">
        <div className="builder-controls">
          <div className="control-tabs">
            <button className="active">Design</button>
            <button>Sections</button>
            <button>SEO</button>
          </div>
          <h3>Creator profile</h3>
          <div className="profile-upload">
            <span>RJ</span>
            <button>Change photo</button>
          </div>
          <label>
            Creator name
            <input defaultValue="Rean Creates" />
          </label>
          <label>
            Headline
            <input defaultValue="AI • Business • Digital Income" />
          </label>
          <label>
            Biography
            <textarea defaultValue="Helping ambitious Filipinos build digital income with AI." />
          </label>
          <h3>Theme</h3>
          <div className="theme-options">
            {["Midnight", "Cloud", "Electric"].map((x) => (
              <button
                key={x}
                onClick={() => setTheme(x)}
                className={theme === x ? "selected" : ""}
              >
                <i />
                <span>{x}</span>
              </button>
            ))}
          </div>
          <h3>Sections</h3>
          {["Featured products", "Courses", "Lead magnet", "Social links"].map(
            (x) => (
              <div className="toggle-row" key={x}>
                <span>{x}</span>
                <i className="on">
                  <b />
                </i>
              </div>
            ),
          )}
        </div>
        <div className="phone-preview">
          <div className={`phone-store ${theme.toLowerCase()}`}>
            <div className="phone-cover" />
            <div className="avatar">RJ</div>
            <h2>Rean Creates</h2>
            <p>AI • Business • Digital Income</p>
            <button>Follow</button>
            <nav>
              <b>Featured</b>
              <span>Products</span>
              <span>Courses</span>
            </nav>
            {products.slice(0, 2).map((p, i) => (
              <article key={p[0]}>
                <div className={i ? "art-blue" : "art-purple"} />
                <span>
                  <small>{p[2]}</small>
                  <b>{p[0]}</b>
                  <em>{p[3]}</em>
                </span>
              </article>
            ))}
          </div>
        </div>
      </section>
    </AppShell>
  );
}

function SocialHub() {
  const [connected, setConnected] = useState(["Facebook", "Instagram"]);
  const networks = [
    ["Facebook", "FB", "2.8K followers", "#1877f2"],
    ["Instagram", "IG", "1.4K followers", "#d946ef"],
    ["TikTok", "TT", "Not connected", "#222"],
    ["YouTube", "YT", "Not connected", "#ef4444"],
    ["LinkedIn", "in", "Not connected", "#0a66c2"],
  ];
  const toggle = (name: string) =>
    setConnected((v) =>
      v.includes(name) ? v.filter((x) => x !== name) : [...v, name],
    );
  return (
    <AppShell
      title="Social Hub"
      desc="Connect, create, schedule and monitor every channel from MorphX."
      actions={
        <Button href="/app/ai-studio">
          Create with AI <Sparkles />
        </Button>
      }
    >
      <section className="social-summary">
        <Stat
          label="CONNECTED CHANNELS"
          value={`${connected.length} / 5`}
          delta="Healthy"
        />
        <Stat label="TOTAL AUDIENCE" value="4,284" delta="+8.2%" />
        <Stat label="SCHEDULED POSTS" value="12" delta="Next at 7:00 PM" />
        <Stat label="ENGAGEMENT" value="5.8%" delta="+1.1%" />
      </section>
      <section className="social-grid">
        <article className="connections">
          <div className="card-head">
            <div>
              <p className="kicker">YOUR CHANNELS</p>
              <h2>Connected accounts</h2>
            </div>
            <small>Secure connections</small>
          </div>
          {networks.map(([name, initials, detail, color]) => {
            const on = connected.includes(name);
            return (
              <div className="network-row" key={name}>
                <span style={{ background: color }}>{initials}</span>
                <div>
                  <b>{name}</b>
                  <small>
                    {on ? detail : "Connect to publish and view analytics"}
                  </small>
                </div>
                <em className={on ? "connected" : ""}>
                  {on ? "Connected" : "Not connected"}
                </em>
                <button onClick={() => toggle(name)}>
                  {on ? "Manage" : "Connect"}
                </button>
              </div>
            );
          })}
        </article>
        <article className="composer">
          <p className="kicker">QUICK COMPOSER</p>
          <h2>Create once. Publish everywhere.</h2>
          <textarea placeholder="Write a post or ask MorphX AI to create one from your product..." />
          <div className="composer-tools">
            <button>
              <Upload /> Add media
            </button>
            <button>
              <Sparkles /> Write with AI
            </button>
          </div>
          <div className="channel-picks">
            {networks.slice(0, 3).map(([name, initials]) => (
              <button
                className={connected.includes(name) ? "selected" : ""}
                key={name}
              >
                {initials}
                <Check />
              </button>
            ))}
          </div>
          <div className="composer-actions">
            <button>Save draft</button>
            <button>
              Schedule post <ArrowRight />
            </button>
          </div>
        </article>
        <article className="content-calendar">
          <div className="card-head">
            <div>
              <p className="kicker">CONTENT CALENDAR</p>
              <h2>Coming up</h2>
            </div>
            <button>View calendar</button>
          </div>
          {[
            [
              "TODAY · 7:00 PM",
              "5 ways AI can improve your freelance workflow",
              "FB · IG",
            ],
            [
              "TOMORROW · 12:30 PM",
              "Behind the scenes: building a digital product",
              "IG",
            ],
            [
              "FRIDAY · 6:00 PM",
              "AI Side Hustle Blueprint launch reminder",
              "FB · IG",
            ],
          ].map((x) => (
            <div className="scheduled-row" key={x[0]}>
              <i />
              <div>
                <small>{x[0]}</small>
                <b>{x[1]}</b>
              </div>
              <span>{x[2]}</span>
            </div>
          ))}
        </article>
        <article className="social-insight">
          <Sparkles />
          <p className="kicker">MORPHX AI INSIGHT</p>
          <h2>Your Facebook audience responds best between 6–8 PM.</h2>
          <p>
            Schedule this week&apos;s product posts in that window to improve
            reach.
          </p>
          <button>
            Optimize my schedule <ArrowRight />
          </button>
        </article>
      </section>
    </AppShell>
  );
}

const pageMeta: Record<string, [string, string]> = {
  orders: ["Orders", "Track purchases, delivery and refunds."],
  customers: [
    "Customers",
    "Know your audience and build lasting relationships.",
  ],
  analytics: ["Analytics", "Understand what drives visits, sales and growth."],
  marketing: ["Marketing", "Turn products into campaigns that convert."],
  payments: ["Payments", "Manage checkout methods and payment providers."],
  payouts: ["Payouts", "Track your available balance and settlement history."],
  settings: ["Settings", "Manage your business, account and team preferences."],
};
function GenericApp({ kind }: { kind: string }) {
  const [title, desc] = pageMeta[kind];
  const payment = kind === "payments" || kind === "payouts";
  return (
    <AppShell
      title={title}
      desc={desc}
      actions={
        <Button>
          {kind === "marketing"
            ? "+ New campaign"
            : kind === "customers"
              ? "Export CSV"
              : "Manage"}
        </Button>
      }
    >
      <div className="generic-stats">
        <Stat
          label="TOTAL"
          value={payment ? "₱47,820" : "1,284"}
          delta="+12.4%"
        />
        <Stat
          label="THIS MONTH"
          value={payment ? "₱19,540" : "184"}
          delta="+18.1%"
        />
        <Stat
          label={payment ? "NEXT PAYOUT" : "ACTIVE"}
          value={payment ? "Sep 15" : "72%"}
          delta="On track"
        />
      </div>
      <section className="generic-card">
        <div className="card-head">
          <div>
            <p className="kicker">{kind.toUpperCase()}</p>
            <h2>{payment ? "Payment infrastructure" : "Recent activity"}</h2>
          </div>
          <button>
            Last 30 days <ChevronDown />
          </button>
        </div>
        {payment ? (
          <div className="provider-list">
            {[
              ["GCash", "Philippine wallets", "Ready to connect"],
              ["Maya", "Wallets + cards", "Ready to connect"],
              ["QRPh", "Interoperable QR", "Ready to connect"],
              [
                "Visa / Mastercard",
                "Local + international cards",
                "Ready to connect",
              ],
            ].map((x) => (
              <article key={x[0]}>
                <CreditCard />
                <div>
                  <b>{x[0]}</b>
                  <small>{x[1]}</small>
                </div>
                <em>{x[2]}</em>
              </article>
            ))}
          </div>
        ) : (
          <DataCard
            title="Latest records"
            rows={[
              ["RJ", "New customer captured", "2 min"],
              ["MX", "Campaign performance updated", "18 min"],
              ["AI", "Recommendation ready", "1 hr"],
            ]}
          />
        )}
      </section>
    </AppShell>
  );
}

function Admin() {
  const path = usePathname();
  const section = path.split("/").pop() || "overview";
  const items = [
    "overview",
    "creators",
    "customers",
    "transactions",
    "products",
    "reports",
    "payouts",
    "subscriptions",
    "analytics",
    "moderation",
    "settings",
  ];
  return (
    <main className="admin-shell">
      <aside>
        <Logo />
        <small>PLATFORM ADMIN</small>
        {items.map((x) => (
          <Link
            className={section === x ? "active" : ""}
            href={x === "overview" ? "/admin" : "/admin/" + x}
            key={x}
          >
            {x === "overview" ? <Home /> : <Boxes />}
            {x[0].toUpperCase() + x.slice(1)}
          </Link>
        ))}
        <span>Operator · MorphX</span>
      </aside>
      <section>
        <header>
          <div>
            <p className="kicker">MORPHX OPERATIONS</p>
            <h1>{section[0].toUpperCase() + section.slice(1)}</h1>
          </div>
          <button className="round-avatar">MX</button>
        </header>
        <div className="generic-stats">
          <Stat label="GMV" value="₱4.28M" delta="+16.2%" />
          <Stat label="ACTIVE CREATORS" value="2,481" delta="+184" />
          <Stat label="TRANSACTIONS" value="18,208" delta="+12.7%" />
          <Stat label="PENDING REPORTS" value="7" delta="Review" />
        </div>
        <div className="admin-grid">
          <article className="admin-chart">
            <div className="card-head">
              <h3>Platform volume</h3>
              <button>Last 12 months</button>
            </div>
            <div className="bars">
              {[38, 51, 46, 68, 58, 73, 79, 65, 88, 91, 84, 100].map((x, i) => (
                <i key={i} style={{ height: x + "%" }} />
              ))}
            </div>
          </article>
          <article className="health">
            <h3>Platform health</h3>
            {[
              ["Payments API", "Operational"],
              ["AI generation", "Operational"],
              ["File delivery", "Operational"],
              ["Payout queue", "12 pending"],
            ].map((x) => (
              <div key={x[0]}>
                <span>{x[0]}</span>
                <em>{x[1]}</em>
              </div>
            ))}
          </article>
          <DataCard
            title="Recent transactions"
            rows={[
              ["TRX-10842", "Rean Creates", "₱1,499"],
              ["TRX-10841", "Studio North", "₱399"],
              ["TRX-10840", "Grace Notes", "₱199"],
            ]}
          />
          <DataCard
            title="Moderation queue"
            rows={[
              ["#R-241", "Product claim review", "Medium"],
              ["#R-240", "Copyright report", "High"],
              ["#R-239", "Payout verification", "Low"],
            ]}
          />
        </div>
      </section>
    </main>
  );
}

function HomePageV2() {
  const demos = [
    [
      "/feature-ai.webp",
      "Create products with AI",
      "Turn an idea into an ebook, course or downloadable product.",
    ],
    [
      "/feature-store.webp",
      "Build your selling page",
      "Put your products and courses on one easy-to-share page.",
    ],
    [
      "/feature-payments.webp",
      "Give customers easy ways to pay",
      "Prepare your store for GCash, Maya, QRPh and bank cards.",
    ],
    [
      "/feature-social.webp",
      "Social Media Connector and Management Tool",
      "Connect your social accounts, schedule posts and check results in one dashboard.",
    ],
  ];
  return (
    <>
      <PublicHeader />
      <main className="home-page home-v2">
        <section className="hero">
          <div className="aurora" />
          <span className="motion-orb orb-one" />
          <span className="motion-orb orb-two" />
          <span className="motion-orb orb-three" />
          <div className="moving-ai-graphic" aria-hidden="true">
            <div className="ai-core">AI</div>
            <i>Write</i>
            <i>Design</i>
            <i>Sell</i>
            <i>Grow</i>
          </div>
          <div className="eyebrow">
            <Sparkles /> EVERYTHING YOU NEED TO SELL ONLINE
          </div>
          <h1>
            Turn your skills into
            <br />
            <em>products people can buy.</em>
          </h1>
          <p>
            Create ebooks, courses and downloads. Sell them from your own page.
            Get paid locally or worldwide. Manage everything in MorphX.
          </p>
          <div className="hero-actions">
            <Button href="/register">
              Start for free <ArrowRight />
            </Button>
            <Button ghost href="/features">
              See what MorphX can do
            </Button>
          </div>
          <div className="trust">
            <span>RJ</span>
            <span>KM</span>
            <span>AL</span>
            <p>
              <b>Made for creators at every stage.</b>
              <br />
              Start small. Grow when you are ready.
            </p>
          </div>
        </section>
        <section className="dashboard-signup">
          <div>
            <span>YOUR CREATOR WORKSPACE</span>
            <h2>Sign up to explore the dashboard</h2>
            <p>
              Create a free account to explore Products, Courses, AI Studio,
              Social Hub, Analytics and Store Settings.
            </p>
          </div>
          <Link href="/register">
            Sign up to explore dashboard <ArrowRight />
          </Link>
        </section>
        <section className="marquee">
          CREATE <i>✦</i> SELL <i>✦</i> TEACH <i>✦</i> CONNECT <i>✦</i> GROW
        </section>
        <section className="section">
          <p className="kicker">SEE HOW MORPHX HELPS YOU</p>
          <div className="split-title">
            <h2>
              One simple place to
              <br />
              <span>run your creator business.</span>
            </h2>
            <p>
              You do not need many separate tools. MorphX brings product
              creation, selling, payments, social media and business tracking
              together.
            </p>
          </div>
          <div className="video-showcase">
            {demos.map(([src, title, copy]) => (
              <article key={title}>
                <img src={src} alt={`Animated demonstration of ${title}`} />
                <div>
                  <h3>{title}</h3>
                  <p>{copy}</p>
                </div>
              </article>
            ))}
          </div>
          <div className="social-feature-card">
            <div className="social-feature-icon">◎</div>
            <label>NEW</label>
            <h3>Social Media Connector and Management Tool</h3>
            <p>
              Connect Facebook, Instagram, TikTok, YouTube and LinkedIn. Create
              one post, choose where it goes, schedule it and view your results
              without leaving MorphX.
            </p>
            <Link href="/app/social">
              Explore Social Hub <ArrowRight />
            </Link>
          </div>
        </section>
        <section className="cta">
          <Sparkles />
          <h2>
            You already know something
            <br />
            useful. <em>Turn it into income.</em>
          </h2>
          <p>
            Start your store, create your first product and share it with your
            audience.
          </p>
          <Button href="/register">
            Create my free account <ArrowRight />
          </Button>
        </section>
      </main>
      <Footer />
    </>
  );
}

function HomeReactBits() {
  return (
    <>
      <DitherCursor />
      <PublicHeader />
      <main className="home-page mx-home">
        <section className="mx-globe-hero">
          <div className="aurora" />
          <div className="mx-hero-copy">
            <div className="eyebrow">
              <Sparkles /> CONNECT. CREATE. GROW.
            </div>
            <h1>MorphX let&apos;s you connect to people who needs you</h1>
            <p>
              Build useful products, share them with the right people and manage
              your creator business from one friendly workspace.
            </p>
            <div className="hero-actions">
              <Button href="/register">
                Sign up to explore dashboard <ArrowRight />
              </Button>
              <Button ghost href="/features">
                See what MorphX can do
              </Button>
            </div>
            <div className="trust">
              <span>RJ</span>
              <span>KM</span>
              <span>AL</span>
              <p>
                <b>Made for creators at every stage.</b>
                <br />
                Start free. Reach people anywhere.
              </p>
            </div>
          </div>
          <ConnectionGlobe />
        </section>
        <section className="marquee">
          CREATE <i>✦</i> SELL <i>✦</i> TEACH <i>✦</i> CONNECT <i>✦</i> GROW
        </section>
        <IdeaMagicTransform />
        <UserCircles />
        <MagicConnections />
        <section className="cta">
          <Sparkles />
          <h2>
            The people who need what you know
            <br />
            are already out there. <em>Meet them.</em>
          </h2>
          <p>
            Create your page, connect your channels and share your first offer.
          </p>
          <Button href="/register">
            Create my free account <ArrowRight />
          </Button>
        </section>
      </main>
      <Footer />
    </>
  );
}

function MarketplaceMotion() {
  const [q, setQ] = useState("");
  const shown = products.filter((p) =>
    p.join(" ").toLowerCase().includes(q.toLowerCase()),
  );
  return (
    <PublicShell>
      <section className="inner-hero">
        <p className="kicker">DISCOVER ON MORPHX</p>
        <h1>Find something useful.</h1>
        <p>
          Explore practical products and courses made by independent creators.
        </p>
        <div className="search">
          <Search />
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search ebooks, courses, templates..."
          />
        </div>
      </section>
      <InfiniteMarketplaceGallery items={shown} />
      <div className="gallery-hint">
        The gallery moves continuously. Hover or swipe to explore.
      </div>
    </PublicShell>
  );
}

function FeaturesMotion() {
  return (
    <PublicShell>
      <section className="inner-hero left">
        <p className="kicker">THE MORPHX WORKSPACE</p>
        <h1>
          Everything you need,
          <br />
          <em>explained simply.</em>
        </h1>
        <p>
          Create, sell, connect and grow without jumping between many separate
          tools.
        </p>
      </section>
      <ParallaxFeatureCarousel />
      <MagicConnections />
    </PublicShell>
  );
}

function PricingMotion() {
  return (
    <PublicShell>
      <section className="inner-hero">
        <p className="kicker">SIMPLE PRICING</p>
        <h1>Start free. Grow when ready.</h1>
        <p>
          Choose the tools you need today. Move to another plan whenever your
          business changes.
        </p>
      </section>
      <LenticularPricingCarousel />
    </PublicShell>
  );
}

function useHomepageMotion(active: boolean) {
  useEffect(() => {
    if (!active) return;
    const hero = document.querySelector(".hero");
    const bento = document.querySelector(".feature-bento");
    if (!hero || !bento) return;
    const heroTitle = hero.querySelector("h1");
    const heroCopy = hero.querySelector(":scope > p");
    if (heroTitle)
      heroTitle.innerHTML =
        "Turn your skills into<br><em>products people can buy.</em>";
    if (heroCopy)
      heroCopy.textContent =
        "Create ebooks, courses and downloads. Sell them from your own page. Get paid locally or worldwide. Manage everything in MorphX.";
    const orbs = ["orb-one", "orb-two", "orb-three"].map((name) => {
      const el = document.createElement("span");
      el.className = `motion-orb ${name}`;
      el.setAttribute("aria-hidden", "true");
      hero.prepend(el);
      return el;
    });
    const aiGraphic = document.createElement("div");
    aiGraphic.className = "moving-ai-graphic";
    aiGraphic.setAttribute("aria-hidden", "true");
    aiGraphic.innerHTML =
      '<div class="ai-core">AI</div><i>Write</i><i>Design</i><i>Sell</i><i>Grow</i>';
    hero.appendChild(aiGraphic);
    const signup = document.createElement("section");
    signup.className = "dashboard-signup";
    signup.innerHTML =
      '<div><span>YOUR CREATOR WORKSPACE</span><h2>Want to see the full MorphX dashboard?</h2><p>Create a free account to explore products, courses, AI Studio, Social Hub, analytics and store settings.</p></div><a href="/register">Sign up to explore dashboard →</a>';
    hero.insertAdjacentElement("afterend", signup);
    const socialFeature = document.createElement("article");
    socialFeature.className = "social-feature-card";
    socialFeature.innerHTML =
      '<div class="social-feature-icon">◎</div><label>NEW</label><h3>Social Media Connector and Management Tool</h3><p>Connect Facebook, Instagram, TikTok, YouTube and LinkedIn. Create posts, schedule content and see results from one MorphX dashboard.</p><a href="/app/social">Open Social Hub →</a>';
    bento.appendChild(socialFeature);
    const showcase = document.createElement("section");
    showcase.className = "video-showcase";
    const details = [
      [
        "/feature-ai.webp",
        "Create products with AI",
        "Turn a simple idea into an ebook, course or download.",
      ],
      [
        "/feature-store.webp",
        "Build your selling page",
        "Show all your products in one easy-to-share storefront.",
      ],
      [
        "/feature-payments.webp",
        "Accept more ways to pay",
        "Prepare your store for GCash, Maya, QRPh and cards.",
      ],
      [
        "/feature-social.webp",
        "Social Media Connector and Management Tool",
        "Connect your accounts, post everywhere and check your results in MorphX.",
      ],
    ];
    details.forEach(([src, title, copy]) => {
      const card = document.createElement("article");
      const image = document.createElement("img");
      image.src = src;
      image.alt = `Animated demo: ${title}`;
      image.loading = "lazy";
      const text = document.createElement("div");
      const heading = document.createElement("h3");
      heading.textContent = title;
      const paragraph = document.createElement("p");
      paragraph.textContent = copy;
      text.append(heading, paragraph);
      card.append(image, text);
      showcase.append(card);
    });
    bento.insertAdjacentElement("afterend", showcase);
    return () => {
      orbs.forEach((x) => x.remove());
      aiGraphic.remove();
      signup.remove();
      socialFeature.remove();
      showcase.remove();
    };
  }, [active]);
}

export function MorphXApp() {
  const path = usePathname();
  const key = path.split("/")[2] || "";
  if (path === "/") return <HomeReactBits />;
  if (path === "/features") return <FeaturesMotion />;
  if (path === "/marketplace") return <MarketplaceMotion />;
  if (path === "/pricing") return <PricingMotion />;
  if (path === "/store/rean") return <Storefront />;
  if (path.startsWith("/product/")) return <ProductDetail />;
  if (path.startsWith("/course/")) return <ProductDetail course />;
  if (path === "/about") return <About />;
  if (path === "/help") return <About kind="help" />;
  if (path === "/terms") return <About kind="terms" />;
  if (path === "/privacy") return <About kind="privacy" />;
  if (path === "/login") return <Auth />;
  if (path === "/register") return <Auth register />;
  if (path.startsWith("/admin")) return <Admin />;
  if (path === "/app") return <CreatorDashboard />;
  if (path === "/app/ai-studio") return <AIStudio />;
  if (path === "/app/products/new") return <CreateProduct />;
  if (path === "/app/products") return <ProductsPage />;
  if (path === "/app/courses") return <ProductsPage courses />;
  if (path === "/app/store-builder") return <StoreBuilder />;
  if (path === "/app/social") return <SocialHub />;
  if (pageMeta[key]) return <GenericApp kind={key} />;
  return <HomeReactBits />;
}

function useSocialFeaturePage(active: boolean) {
  useEffect(() => {
    if (!active) return;
    const list = document.querySelector(".feature-list");
    if (!list) return;
    const item = document.createElement("article");
    item.className = "social-page-feature";
    item.innerHTML =
      '<small>05 / CONNECT</small><div><div class="social-feature-icon">◎</div><h2>Social Media Connector and Management Tool</h2><p>Connect Facebook, Instagram, TikTok, YouTube and LinkedIn. Write one post, publish it to your chosen accounts, schedule future content and view your results in one place.</p><a href="/app/social">See the Social Hub →</a></div><div class="social-network-preview"><span>Facebook <b>Connected</b></span><span>Instagram <b>Connected</b></span><span>TikTok <b>Connect</b></span><span>YouTube <b>Connect</b></span></div>';
    list.appendChild(item);
    return () => item.remove();
  }, [active]);
}

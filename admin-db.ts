type AdminMetrics = {
  creators: number;
  customers: number;
  transactions: number;
  products: number;
  pendingReports: number;
};

const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

async function count(table: string, filter = "") {
  if (!url || !serviceKey) throw new Error("Supabase is not configured");
  const response = await fetch(`${url}/rest/v1/${table}?select=id${filter}`, {
    method: "HEAD",
    headers: {
      apikey: serviceKey,
      Authorization: `Bearer ${serviceKey}`,
      Prefer: "count=exact",
    },
    cache: "no-store",
  });
  if (!response.ok) throw new Error(`Could not read ${table}`);
  const range = response.headers.get("content-range") ?? "*/0";
  return Number(range.split("/")[1] ?? 0);
}

export async function getAdminMetrics(): Promise<AdminMetrics> {
  const [creators, customers, transactions, products, pendingReports] =
    await Promise.all([
      count("profiles", "&role=eq.creator"),
      count("customers"),
      count("orders"),
      count("products"),
      count("reports", "&status=eq.open"),
    ]);
  return { creators, customers, transactions, products, pendingReports };
}

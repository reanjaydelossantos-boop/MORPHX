import { NextResponse } from "next/server";
import { getAdminMetrics } from "@/lib/supabase/admin-db";

export async function GET(request: Request) {
  const adminSecret = process.env.MORPHX_ADMIN_API_SECRET;
  if (!adminSecret || request.headers.get("x-morphx-admin-secret") !== adminSecret) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  try {
    return NextResponse.json(await getAdminMetrics());
  } catch {
    return NextResponse.json(
      { error: "Admin database is not configured yet" },
      { status: 503 },
    );
  }
}

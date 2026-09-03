export type PlanId = "free" | "creator" | "pro";
export type PlanLimits = { products: number; courses: number; aiCredits: number; storageGb: number; feePercent: number; customDomain: boolean };
export const PLAN_LIMITS: Record<PlanId, PlanLimits> = {
  free: { products: 3, courses: 1, aiCredits: 20, storageGb: 1, feePercent: 8, customDomain: false },
  creator: { products: Infinity, courses: 10, aiCredits: 500, storageGb: 25, feePercent: 5, customDomain: false },
  pro: { products: Infinity, courses: Infinity, aiCredits: 2500, storageGb: 100, feePercent: 2, customDomain: true },
};

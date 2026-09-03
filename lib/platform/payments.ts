export type PaymentRail = "gcash" | "maya" | "qrph" | "card" | "international";
export interface PaymentProvider { id: string; rails: PaymentRail[]; enabled: boolean; publicKey?: string }
export const paymentProviders: PaymentProvider[] = [
  { id: "philippines-gateway", rails: ["gcash", "maya", "qrph", "card"], enabled: false },
  { id: "international-gateway", rails: ["card", "international"], enabled: false },
];

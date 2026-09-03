import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MorphX — Turn knowledge into income",
  description: "Build, sell and grow digital products, courses and creator storefronts with AI.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="antialiased">{children}</body>
    </html>
  );
}

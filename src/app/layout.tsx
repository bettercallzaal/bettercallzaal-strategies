import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "BetterCallZaal Strategies | Infrastructure for the Creator Economy",
  description:
    "Token design, governance architecture, and incentive systems for on-chain music and creator platforms. Built by Zaal Panthaki.",
  openGraph: {
    title: "BetterCallZaal Strategies",
    description:
      "Infrastructure for the creator economy. Token design. Governance. Incentive systems.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}

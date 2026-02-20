import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import MiniappProvider from "@/components/MiniappProvider";
import MiniappActions from "@/components/MiniappActions";

const inter = Inter({ subsets: ["latin"] });

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  themeColor: "#0a0a0a",
};

export const metadata: Metadata = {
  title: "BetterCallZaal Strategies | Ecosystem Architect",
  description:
    "Infrastructure for the creator economy. Token design. Governance. Signal. Built by Zaal Panthaki.",
  keywords: ["Zaal", "BetterCallZaal", "Web3", "Governance", "Token Design", "ZAO", "ZABAL"],
  authors: [{ name: "Zaal Panthaki" }],
  openGraph: {
    title: "BetterCallZaal Strategies",
    description: "Ecosystem Architect. Building infrastructure for the creator economy.",
    type: "website",
    url: "https://bettercallzaal-strategies.vercel.app",
    siteName: "BetterCallZaal Strategies",
    locale: "en_US",
    images: [
      {
        url: "https://bettercallzaal-strategies.vercel.app/og-image.png",
        width: 1200,
        height: 630,
      }
    ],
  },
  other: {
    "fc:frame": "vNext",
    "fc:frame:image": "https://bettercallzaal-strategies.vercel.app/og-image.png",
    "fc:frame:post_url": "https://bettercallzaal-strategies.vercel.app/api/frame",
  },
  twitter: {
    card: "summary_large_image",
    title: "BetterCallZaal Strategies",
    description: "Ecosystem Architect. Building infrastructure for the creator economy.",
    creator: "@BetterCallZaal",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script async src="https://cdn.jsdelivr.net/npm/@farcaster/mini-app-sdk@0.2.3/dist/sdk.js" />
      </head>
      <body className={`${inter.className} antialiased`}>
        <MiniappProvider>
          {children}
        </MiniappProvider>
        <MiniappActions />
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css"
import { ArweaveWalletKit } from "arweave-wallet-kit";
import ArConnectStrategy from "@arweave-wallet-kit/arconnect-strategy";
import Layout from "@/components/layout";
import { Analytics } from '@vercel/analytics/react';




const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Rebel Gaming",
  description: "Rebel Gaming is a gaming platform that allows users to play games and earn rewards.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <Layout>
        {children}
        <Analytics />
        </Layout>
      </body>
    </html>
  );
}
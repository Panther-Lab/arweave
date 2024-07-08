import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css"
import { ArweaveWalletKit } from "arweave-wallet-kit";
import ArConnectStrategy from "@arweave-wallet-kit/arconnect-strategy";
import Layout from "@/components/layout";



const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
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
        </Layout>
      </body>
    </html>
  );
}
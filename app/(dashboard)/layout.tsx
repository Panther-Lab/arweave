import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css"
import { ArweaveWalletKit } from "arweave-wallet-kit";
import ArConnectStrategy from "@arweave-wallet-kit/arconnect-strategy";
import Layout from "@/components/layout";
import CryptoHeader from "@/components/Header/crypto";
const inter = Inter({ subsets: ["latin"] });
import Header from "@/components/layout/dashboardHeader";
import Sidebar from "@/components/layout/sidebar";

export const metadata: Metadata = {
  title: "Arweave Game",
  description: "Build by Team Griffin",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ArweaveWalletKit
         config={{
          permissions: [
            "ACCESS_ADDRESS",
            "ACCESS_PUBLIC_KEY",
            "SIGN_TRANSACTION",
            "DISPATCH",
          ],
          ensurePermissions: true,
        }}>
        <Header />
        <div className="flex h-screen overflow-hidden">
        <Sidebar />
        <main className="w-full pt-16">{children}</main>
      </div>
        </ArweaveWalletKit>
      </body>
    </html>
  );
}
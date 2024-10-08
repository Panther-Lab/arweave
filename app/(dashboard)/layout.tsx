import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css"
import { ArweaveWalletKit } from "arweave-wallet-kit";
import ArConnectStrategy from "@arweave-wallet-kit/arconnect-strategy";
import Layout from "@/components/layout";
import CryptoHeader from "@/components/Header/crypto";
const inter = Inter({ subsets: ["latin"] });
import Header from "@/components/layout/dashboardHeader";
import Sidebar from "@/components/layout/sidebar";
import { OnbordaProvider } from "./OnbordaContext";
import Onborda from "./Onborda";
import { steps } from "@/lib/steps";
import CustomCard from "@/components/CustomCard";
import { Analytics } from "@vercel/analytics/react"

export const metadata: Metadata = {
  title: "Pixel Gaming",
  description: "Pixel Gaming is a gaming platform that allows users to play games and earn rewards.",
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
        
        <OnbordaProvider>
        <Sidebar />
        <Onborda steps={steps} cardComponent={CustomCard}
              shadowOpacity="0.8">
        <main className="w-full pt-16 ">
          {children}
          <Analytics />
        </main>
        </Onborda>
        </OnbordaProvider>
      </div>
        </ArweaveWalletKit>
      </body>
    </html>
  );
}
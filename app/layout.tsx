import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ArweaveWalletKit } from "arweave-wallet-kit";
import ArConnectStrategy from "@arweave-wallet-kit/arconnect-strategy";
import Layout from "@/components/layout";



const inter = Inter({ subsets: ["latin"] });

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
        {children}
        </ArweaveWalletKit>
      </body>
    </html>
  );
}
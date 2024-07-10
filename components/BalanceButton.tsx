'use client'
import { useState, useEffect } from 'react';
import { useActiveAddress } from "arweave-wallet-kit";
import { createDataItemSigner, message, result } from "@permaweb/aoconnect";
import { Button } from "@/components/ui/button"
import { useToast } from "@/components/ui/use-toast"
import { cn } from '@/lib/utils';
import { formatNumber } from '@/lib/utils';

export default function BalanceButton({ triggerUpdate = 0 }) {
  const [isLoading, setIsLoading] = useState(false);
  const [balance, setBalance] = useState<string>("0" ?? "");
  const activeAddress = useActiveAddress();
  const { toast } = useToast()
  const processId = "RdiOs7wNV7g-rZfb2IpnnrzTAMpljSwZZRNQOx8-cR8";

  const formatBalance = (balance: string) => {
    const num = Number(balance);
    if (num < 1000) {
      return balance;
    }
    const firstTwo = balance.slice(0, 3);
    const lastTwo = balance.slice(-3);
    return `${firstTwo}...${lastTwo}`;
  };

  const fetchBalance = async () => {
    if (!activeAddress) {
      toast({
        title: "Wallet not connected",
        description: "Please connect your wallet to check balance.",
        variant: "destructive",
      })
      return;
    }

    setIsLoading(true);
    try {
      const res = await message({
        process: processId,
        tags: [
          { name: "Action", value: "Balance" },
          { name: "Target", value: activeAddress }
        ],
        data: "",
        signer: createDataItemSigner(window.arweaveWallet),
      });

      const { Messages, Spawns, Output, Error } = await result({
        message: res,
        process: processId,
      });

      if (Error) {
        throw new Error(Error);
      }
      console.log(Messages[0].Data)

      const balance = Messages[0].Data

      if (balance) {
        setBalance(balance);
        toast({
          title: "Balance",
          description: `Your balance is: ${balance}`,
        })
      } else {
        throw new Error("Balance not found in the response");
      }
    } catch (error) {
      console.error("Balance fetch error:", error);
      toast({
        title: "Error",
        description: "Failed to fetch balance. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (activeAddress) {
      fetchBalance();
    }
  }, [activeAddress, triggerUpdate]);

  return (
    <div className="flex items-center space-x-2">
      <button onClick={fetchBalance} disabled={isLoading || !activeAddress} className='p-4 bg-black rounded-xl w-full'>
        {isLoading ? "Loading..." : `${formatBalance(balance)} MEM`}
      </button>
    </div>
  )
}
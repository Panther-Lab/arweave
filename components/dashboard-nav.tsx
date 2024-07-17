"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Profile from "@/public/GradientAvatar.svg"
import dynamic from 'next/dynamic';
import { ConnectButton } from "arweave-wallet-kit";
import { useOnborda } from "onborda";
import { Sparkle, Sparkles } from "lucide-react";
import Provider from "./Provider";
import BalanceButton from "./BalanceButton";



import { Icons } from "@/components/icons";
import { cn } from "@/lib/utils";
import { NavItem } from "@/type";
import { Dispatch, SetStateAction } from "react";
import { Button } from "./ui/button";
import { OnbordaProvider } from "@/app/(dashboard)/OnbordaContext";

interface DashboardNavProps {
items: NavItem[];
setOpen?: Dispatch<SetStateAction<boolean>>;
  }

  export function DashboardNav({ items, setOpen }: DashboardNavProps) {
  const path = usePathname();

  if (!items?.length) {
  return null;
  }

  const WalletButtons = dynamic(
    async () => {
    await import("./ConnectButton/ConnectionButton");
    return { default: ConnectButton };
    },
    {
    loading: () => (
    <div className="nes-btn is-primary opacity-50 cursor-not-allowed">
      Loading...
    </div>
    ),
    ssr: false,
    }
    );

  return (

  <>
    <nav className="grid items-start gap-2">
      {items.map((item, index) => {
      const Icon = Icons[item.icon || "arrowRight"];
      return (
      item.href && (
      <Link key={index} href={item.disabled ? "/" : item.href} onClick={()=> {
      if (setOpen) setOpen(false);
      }}
      >
      <span className={cn( "group flex items-center rounded-xl px-3 py-3 text-sm font-medium hover:bg-accent hover:text-accent-foreground" , path===item.href ? "bg-accent" : "transparent" , item.disabled && "cursor-not-allowed opacity-80" , )}>
        <Icon className="mr-2 h-4 w-4" />
        <span>{item.title}</span>
      </span>
      </Link>
      )
      );
      })}
    </nav>
    <div className="flex flex-col mt-32 gap-10">
      <div className="flex mt-24 flex-col gap-5">
      <WalletButtons />
      <BalanceButton/>
      </div>
    </div>  
  </>

  );
  }
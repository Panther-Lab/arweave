"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Profile from "@/public/GradientAvatar.svg"
import dynamic from 'next/dynamic';
import { ConnectButton } from "arweave-wallet-kit";



import { Icons } from "@/components/icons";
import { cn } from "@/lib/utils";
import { NavItem } from "@/type";
import { Dispatch, SetStateAction } from "react";

interface DashboardNavProps {
items: NavItem[];
setOpen?: Dispatch<SetStateAction<boolean>>;
  }

  export function DashboardNav({ items, setOpen }: DashboardNavProps) {
  const [walletConnected, setWalletConnected] = useState(false);
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
      <span className={cn( "group flex items-center rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground" , path===item.href ? "bg-accent" : "transparent" , item.disabled && "cursor-not-allowed opacity-80" , )}>
        <Icon className="mr-2 h-4 w-4" />
        <span>{item.title}</span>
      </span>
      </Link>
      )
      );
      })}
    </nav>
    <div className="mt-48">
      <div className="flex mt-48">
      <WalletButtons />
      </div>
    </div>
    {walletConnected &&
    <div>
      <div className="flex items-center gap-3 flex-row text-black dark:text-white overflow-x-hidden min-h-10 mt-48">
        <div className="relative flex hover:border-blue-500">
          <Image className="block w-10 h-10 object-cover cursor-pointer rounded-full border-3 border-transparent transition-all duration-200 ease-in-out" src={Profile} alt="Profile Avatar" />
          <div className=""></div>
        </div>
        <div className="flex flex-col gap-1 whitespace-nowrap hide">
          <div className="font-semibold text-left text-black dark:text-white">Joe Doe</div>
          <div className="text-black dark:text-white text-sm">joe.doe@atheros.ai</div>
        </div>
      </div>
    </div>
  }
  </>

  );
  }
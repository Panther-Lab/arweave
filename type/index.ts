import { Icons } from "@/components/icons";
import { z } from "zod";

export interface NavItem {
  title: string;
  href?: string;
  disabled?: boolean;
  external?: boolean;
  icon?: keyof typeof Icons;
  label?: string;
  description?: string;
}

export interface NavItemWithChildren extends NavItem {
  items: NavItemWithChildren[];
}

export interface NavItemWithOptionalChildren extends NavItem {
  items?: NavItemWithChildren[];
}

export interface FooterItem {
  title: string;
  items: {
    title: string;
    href: string;
    external?: boolean;
  }[];
}

export type MainNavItem = NavItemWithOptionalChildren;

export type SidebarNavItem = NavItemWithChildren;



// Context
export interface OnbordaContextType {
  currentStep: number;
  setCurrentStep: (step: number, delay?: number) => void;
  closeOnborda: () => void;
  startOnborda: () => void;
  isOnbordaVisible: boolean;
}

// Step
export interface Step {
  // Step Content
  icon: React.ReactNode | string | null;
  title: string;
  content: React.ReactNode;
  selector: string;
  // Options
  side?: "top" | "bottom" | "left" | "right";
  showControls?: boolean;
  pointerPadding?: number;
  pointerRadius?: number;
  // Routing
  nextRoute?: string;
  prevRoute?: string;
}

// Onborda
export interface OnbordaProps {
  children: React.ReactNode;
  steps: Step[];
  showOnborda?: boolean;
  shadowRgb?: string;
  shadowOpacity?: string;
  cardComponent?: React.ComponentType<CardComponentProps>;
}

// Custom Card
export interface CardComponentProps {
  step: Step;
  currentStep: number;
  totalSteps: number;
  nextStep: () => void;
  prevStep: () => void;
  arrow: JSX.Element;
}

export enum GameType {
  Free = "Free",
  Premium = "Borrow",
  Commercial = "Commercial",
}


export const createGameSchema = z.object({
  name: z.string(),
  description: z.string(),
  website: z.string().url().optional(),
  borrowerAddress: z.string(),
  gameType: z.nativeEnum(GameType),
  buildDocument: z.custom<File[]>().optional(),
});
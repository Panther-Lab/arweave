import { DashboardNav } from "@/components/dashboard-nav";
import { navItems } from "@/data";
import { cn } from "@/lib/utils";
import { OnbordaProvider } from "@/app/(dashboard)/OnbordaContext";

export default function Sidebar() {
  return (
    <nav
      className={cn(
        `relative hidden border-2 pt-8 md:block w-80 rounded-xl mt-20 shadow-lg h-full`
      )}
    >
      <div className="">
        <div className="px-3">
          <div className="space-y-1">
            <OnbordaProvider>
              <DashboardNav items={navItems} />
            </OnbordaProvider>
          </div>
        </div>
      </div>
    </nav>
  );
}

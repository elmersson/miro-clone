"use client";

import { OrganizationSwitcher } from "@clerk/nextjs";
import { LayoutDashboard, Star } from "lucide-react";
import { Poppins } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const font = Poppins({
  subsets: ["latin"],
  weight: ["600"],
});
export const OrgSidebar = () => {
  const searchParams = useSearchParams();
  const favorites = searchParams.get("favorites");

  const { resolvedTheme } = useTheme();

  const themeMode = resolvedTheme === "light" ? "white" : "black";
  const themeModeBorder = resolvedTheme === "light" ? "#E5E7EB" : "#353535";

  return (
    <div className="hidden w-[206px] flex-col space-y-6 pl-5 pt-5 lg:flex">
      <Link href="/">
        <div className="flex items-center gap-x-2">
          <Image src="/logo.svg" alt="Logo" height={60} width={60} />
          <span className={cn("font-semibold text-2xl", font.className)}>Liro</span>
        </div>
      </Link>
      <OrganizationSwitcher
        hidePersonal
        appearance={{
          elements: {
            rootBox: {
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
            },
            organizationSwitcherTrigger: {
              padding: "6px",
              width: "100%",
              borderRadius: "8px",
              border: `1px solid ${themeModeBorder}`,
              justifyContent: "space-between",
              backgroundColor: themeMode,
            },
          },
        }}
      />
      <div className="w-full space-y-1">
        <Button
          variant={favorites ? "ghost" : "secondary"}
          asChild
          size="lg"
          className="w-full justify-start px-2 font-normal"
        >
          <Link href="/">
            <LayoutDashboard className="mr-2 h-4 w-4" />
            Team boards
          </Link>
        </Button>
        <Button
          variant={favorites ? "secondary" : "ghost"}
          asChild
          size="lg"
          className="w-full justify-start px-2 font-normal"
        >
          <Link
            href={{
              pathname: "/",
              query: { favorites: true },
            }}
          >
            <Star className="mr-2 h-4 w-4" />
            Favorite boards
          </Link>
        </Button>
      </div>
    </div>
  );
};

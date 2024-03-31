"use client";

import { OrganizationSwitcher, UserButton, useOrganization } from "@clerk/nextjs";
import { useTheme } from "next-themes";

import { InviteButton } from "./invite-button";
import { SearchInput } from "./search-input";

export const Navbar = () => {
  const { organization } = useOrganization();

  const { resolvedTheme } = useTheme();

  const themeMode = resolvedTheme === "light" ? "white" : "black";
  const themeModeBorder = resolvedTheme === "light" ? "#E5E7EB" : "#353535";

  return (
    <div className="flex items-center gap-x-4 p-5">
      <div className="hidden lg:flex lg:flex-1">
        <SearchInput />
      </div>
      <div className="block flex-1 lg:hidden">
        <OrganizationSwitcher
          hidePersonal
          appearance={{
            elements: {
              rootBox: {
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                maxWidth: "376px",
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
      </div>
      {organization && <InviteButton />}
      <UserButton />
    </div>
  );
};

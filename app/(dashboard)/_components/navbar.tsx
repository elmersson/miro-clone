"use client";

import { OrganizationSwitcher, UserButton, useOrganization } from "@clerk/nextjs";
import { SearchInput } from "./search-input";
import { InviteButton } from "./invite-button";
import { useTheme } from "next-themes";

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
      <div className="block lg:hidden flex-1">
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

"use client";

import { ModeToggle } from "@/components/mode-toggle";

import { List } from "./list";
import { NewButton } from "./new-button";

export const Sidebar = () => {
  return (
    <aside className="fixed left-0 z-[1] flex h-full w-[60px] flex-col bg-neutral-200 p-3 text-white dark:bg-neutral-900">
      <div className="grow">
        <div>
          <List />
          <NewButton />
        </div>
      </div>
      <ModeToggle />
    </aside>
  );
};

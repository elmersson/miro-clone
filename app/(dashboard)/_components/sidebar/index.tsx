"use client";

import { ModeToggle } from "@/components/mode-toggle";
import { List } from "./list";
import { NewButton } from "./new-button";

export const Sidebar = () => {
  return (
    <aside className="fixed z-[1] left-0 h-full w-[60px] flex p-3 flex-col text-white bg-neutral-200 dark:bg-neutral-900">
      <div className="flex-grow">
        <div>
          <List />
          <NewButton />
        </div>
      </div>
      <ModeToggle />
    </aside>
  );
};

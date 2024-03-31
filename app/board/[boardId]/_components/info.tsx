"use client";

import { useQuery } from "convex/react";
import { Menu } from "lucide-react";
import { Poppins } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

import { Actions } from "@/components/actions";
import { Hint } from "@/components/hint";
import { Button } from "@/components/ui/button";
import { api } from "@/convex/_generated/api";
import { Id } from "@/convex/_generated/dataModel";
import { cn } from "@/lib/utils";
import { useRenameModal } from "@/store/use-rename-modal";

interface InfoProps {
  boardId: Id<"boards">;
}

const font = Poppins({
  subsets: ["latin"],
  weight: ["600"],
});

const TabSeparator = () => {
  return <div className="px-1.5 text-neutral-300">|</div>;
};

export const Info = ({ boardId }: InfoProps) => {
  const { onOpen } = useRenameModal();

  const data = useQuery(api.board.get, {
    id: boardId,
  });

  if (!data) return <InfoSkeleton />;

  return (
    <div className="absolute left-2 top-2 flex h-12 items-center rounded-md bg-white px-1.5 shadow-md dark:bg-black">
      <Hint label="Go to boards" side="bottom" sideOffset={10}>
        <Button asChild variant="board" className="px-2">
          <Link href="/">
            <Image src="/logo.svg" alt="Board logo" height={40} width={40} />
            <span className={cn("font-semibold text-xl ml-2", font.className)}>Liro</span>
          </Link>
        </Button>
      </Hint>
      <TabSeparator />
      <Hint label="Edit title" side="bottom" sideOffset={10}>
        <Button variant="board" className="px-2 text-base font-normal" onClick={() => onOpen(data._id, data.title)}>
          {data.title}
        </Button>
      </Hint>
      <TabSeparator />
      <Actions id={data._id} title={data.title} side="bottom" sideOffset={10}>
        <div>
          <Hint label="Main menu" side="bottom" sideOffset={10}>
            <Button size="icon" variant="board">
              <Menu />
            </Button>
          </Hint>
        </div>
      </Actions>
    </div>
  );
};
export const InfoSkeleton = () => {
  return (
    <div className="absolute left-2 top-2 flex h-12 w-[300px] items-center rounded-md bg-white px-1.5 shadow-md dark:bg-black" />
  );
};

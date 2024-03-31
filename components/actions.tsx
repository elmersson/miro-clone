"use client";

import { DropdownMenuContentProps } from "@radix-ui/react-dropdown-menu";
import { Link2, Pencil, Trash2 } from "lucide-react";
import { toast } from "sonner";

import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { api } from "@/convex/_generated/api";
import { Id } from "@/convex/_generated/dataModel";
import useApiMutation from "@/hooks/use-api-mutation";
import { useRenameModal } from "@/store/use-rename-modal";

import { ConfirmModal } from "./confirm-modal";
import { ModeToggleText } from "./mode-toggle";
import { Button } from "./ui/button";

interface ActionsProps {
  children: React.ReactNode;
  side?: DropdownMenuContentProps["side"];
  sideOffset?: DropdownMenuContentProps["sideOffset"];
  id: Id<"boards">;
  title: string;
  modeToggle?: boolean;
}

export const Actions = ({ children, side, sideOffset, id, title, modeToggle = true }: ActionsProps) => {
  const { mutate, pending } = useApiMutation(api.board.remove);
  const { onOpen } = useRenameModal();

  const onCopyLink = () => {
    navigator.clipboard
      .writeText(`${window.location.origin}/board/${id}`)
      .then(() => toast.success("Link copied"))
      .catch(() => toast.error("Failed to copy link"));
  };

  const onDelete = () => {
    mutate({ id })
      .then(() => toast.success("Board deleted"))
      .catch(() => toast.error("Failed to delete board"));
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>{children}</DropdownMenuTrigger>
      <DropdownMenuContent onClick={(e) => e.stopPropagation()} side={side} sideOffset={sideOffset} className="w-60">
        <DropdownMenuItem onClick={onCopyLink} className="cursor-pointer p-3">
          <Link2 className="mr-2 h-4 w-4" />
          Copy board link
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => onOpen(id, title)} className="cursor-pointer p-3">
          <Pencil className="mr-2 h-4 w-4" />
          Rename
        </DropdownMenuItem>
        <ConfirmModal
          header="Delete board?"
          description="This will delete the board and all of its contents."
          disabled={pending}
          onConfirm={onDelete}
        >
          <Button variant="ghost" className="w-full cursor-pointer justify-start p-3 text-sm font-normal">
            <Trash2 className="mr-2 h-4 w-4" />
            Delete
          </Button>
        </ConfirmModal>
        {modeToggle && <ModeToggleText />}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

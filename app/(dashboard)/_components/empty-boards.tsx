"use client";

import { useOrganization } from "@clerk/nextjs";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { api } from "@/convex/_generated/api";
import useApiMutation from "@/hooks/use-api-mutation";

export const EmptyBoards = () => {
  const router = useRouter();
  const { organization } = useOrganization();
  const { mutate, pending } = useApiMutation(api.board.create);

  const onClick = () => {
    if (!organization) return;

    mutate({
      orgId: organization.id,
      title: "Untitled",
    })
      .then((id) => {
        toast.success("Board created");
        router.push(`/board/${id}`);
      })
      .catch(() => toast.error("Failed to create board"));
  };

  return (
    <div className="flex h-full flex-col items-center justify-center">
      <Image src="/note.svg" height={110} width={110} alt="Empty" />
      <h2 className="mt-6 text-2xl font-semibold">Create your first board!</h2>
      <p className="textg-sm mt-2 text-muted-foreground">Start by creating a board for your organization</p>
      <div className="mt-6">
        <Button onClick={onClick} disabled={pending} size="lg">
          Create board
        </Button>
      </div>
    </div>
  );
};

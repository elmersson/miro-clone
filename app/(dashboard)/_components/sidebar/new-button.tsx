import { CreateOrganization } from "@clerk/nextjs";
import { Plus } from "lucide-react";

import { Hint } from "@/components/hint";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

export const NewButton = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="mt-4 aspect-square">
          <Hint label="Create organization" side="right" align="start" sideOffset={18}>
            <button className="flex h-full w-full items-center justify-center rounded-md bg-black/25 opacity-60 transition hover:opacity-100 dark:bg-white/25">
              <Plus className="text-white dark:text-black" />
            </button>
          </Hint>
        </div>
      </DialogTrigger>
      <DialogContent className="max-w-[480px] border-none bg-transparent p-0">
        <CreateOrganization />
      </DialogContent>
    </Dialog>
  );
};

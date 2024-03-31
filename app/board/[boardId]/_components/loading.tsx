import { Loader } from "lucide-react";

import { InfoSkeleton } from "./info";
import { ParticipantsSkeleton } from "./participants";
import { TimerSkeleton } from "./timer";
import { ToolbarSkeleton } from "./toolbar";
import { ZoomSkeleton } from "./zoom";

export const Loading = () => {
  return (
    <main className="relative flex h-full w-full touch-none items-center justify-center bg-neutral-100 dark:bg-neutral-900">
      <Loader className="h-6 w-6 animate-spin text-muted-foreground" />
      <InfoSkeleton />
      <TimerSkeleton />
      <ZoomSkeleton />
      <ParticipantsSkeleton />
      <ToolbarSkeleton />
    </main>
  );
};

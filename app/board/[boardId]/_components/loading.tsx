import { Loader } from "lucide-react";

import { InfoSkeleton } from "./info";
import { ToolbarSkeleton } from "./toolbar";
import { ParticipantsSkeleton } from "./participants";
import { TimerSkeleton } from "./timer";
import { ZoomSkeleton } from "./zoom";

export const Loading = () => {
  return (
    <main className="h-full w-full relative bg-neutral-100 dark:bg-neutral-900 touch-none flex items-center justify-center">
      <Loader className="h-6 w-6 text-muted-foreground animate-spin" />
      <InfoSkeleton />
      <TimerSkeleton />
      <ZoomSkeleton />
      <ParticipantsSkeleton />
      <ToolbarSkeleton />
    </main>
  );
};

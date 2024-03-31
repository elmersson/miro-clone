"use client";

import { connectionIdToColor } from "@/lib/utils";
import { useOthers, useSelf } from "@/liveblocks.config";

import { UserAvatar } from "./user-avatar";

const MAX_SHOWN_USERS = 2;

export const Participants = () => {
  const users = useOthers();
  const currentUser = useSelf();
  const hasMoreUsers = users.length > MAX_SHOWN_USERS;

  return (
    <div className="absolute right-2 top-2 flex h-12 items-center rounded-md bg-white p-3 shadow-md dark:bg-black">
      <div className="flex gap-x-2">
        {users.slice(0, MAX_SHOWN_USERS).map(({ connectionId, info }) => {
          return (
            <UserAvatar
              key={connectionId}
              src={info?.picture}
              name={info?.name}
              fallback={info?.name?.[0] || "T"}
              borderColor={connectionIdToColor(connectionId)}
            />
          );
        })}

        {currentUser && (
          <UserAvatar
            src={currentUser.info?.picture}
            name={`${currentUser.info?.name} (You)`}
            fallback={currentUser.info?.name?.[0]}
            borderColor={connectionIdToColor(currentUser.connectionId)}
          />
        )}

        {hasMoreUsers && (
          <UserAvatar name={`${users.length - MAX_SHOWN_USERS} more`} fallback={`+${users.length - MAX_SHOWN_USERS}`} />
        )}
      </div>
    </div>
  );
};

export const ParticipantsSkeleton = () => {
  return (
    <div className="absolute right-2 top-2 flex h-12 w-[100px] items-center rounded-md bg-white p-3 shadow-md dark:bg-black" />
  );
};

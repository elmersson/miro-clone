"use client";

import Image from "next/image";

export const Loading = () => {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center dark:bg-neutral-900">
      <Image src="/logo.svg" alt="Logo" width={120} height={120} className="animate-pulse duration-700" />
    </div>
  );
};

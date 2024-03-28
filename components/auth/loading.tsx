"use client";

import Image from "next/image";

export const Loading = () => {
  return (
    <div className="h-full w-full flex flex-col justify-center items-center dark:bg-neutral-900">
      <Image src="/logo.svg" alt="Logo" width={120} height={120} className="animate-pulse duration-700" />
    </div>
  );
};

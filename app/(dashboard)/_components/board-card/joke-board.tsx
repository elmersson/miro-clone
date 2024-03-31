"use client";

import { MoreHorizontal } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

import { Footer } from "./footer";
import { Overlay } from "./overlay";

export const JokeBoardCard = () => {
  const [isFavorite, setIsFavorite] = useState<boolean>(false);

  return (
    <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank" rel="noopener noreferrer">
      <div className="group flex aspect-[100/127] flex-col justify-between overflow-hidden rounded-lg border">
        <div className="relative flex-1 bg-amber-50">
          <Image src="/placeholders/1.svg" alt="Dont touch" fill className="object-fit" />
          <Overlay />
          <div>
            <button className="absolute right-1 top-1 px-3 py-2 opacity-0 outline-none transition-opacity group-hover:opacity-100">
              <MoreHorizontal className="text-white opacity-75 transition-opacity hover:opacity-100" />
            </button>
          </div>
        </div>
        <Footer
          isFavorite={isFavorite}
          title="DONT TOUCH"
          authorLabel="Rasmus"
          createdAtLabel="1 hour ago"
          onClick={() => setIsFavorite(!isFavorite)}
          disabled={false}
        />
      </div>
    </a>
  );
};

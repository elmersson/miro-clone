"use client";

import Image from "next/image";
import { Overlay } from "./overlay";
import { MoreHorizontal } from "lucide-react";
import { Footer } from "./footer";
import { useState } from "react";

export const JokeBoardCard = () => {
  const [isFavorite, setIsFavorite] = useState<boolean>(false);

  return (
    <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank" rel="noopener noreferrer">
      <div className="group aspect-[100/127] border rounded-lg flex flex-col justify-between overflow-hidden">
        <div className="relative flex-1 bg-amber-50">
          <Image src="/placeholders/1.svg" alt="Dont touch" fill className="object-fit" />
          <Overlay />
          <div>
            <button className="absolute top-1 right-1 opacity-0 group-hover:opacity-100 transition-opacity px-3 py-2 outline-none">
              <MoreHorizontal className="text-white opacity-75 hover:opacity-100 transition-opacity" />
            </button>
          </div>
        </div>
        <Footer
          isFavorite={isFavorite}
          title="DONT TOUCH"
          authorLabel="Rasmus"
          createdAtLabel="1 hour"
          onClick={() => setIsFavorite(!isFavorite)}
          disabled={false}
        />
      </div>
    </a>
  );
};

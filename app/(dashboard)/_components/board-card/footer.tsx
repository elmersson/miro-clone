import { Star } from "lucide-react";

import { cn } from "@/lib/utils";

interface FooterProps {
  title: string;
  authorLabel: string;
  createdAtLabel: string;
  isFavorite: boolean;
  onClick: () => void;
  disabled: boolean;
}

export const Footer = ({ title, authorLabel, createdAtLabel, isFavorite, onClick, disabled }: FooterProps) => {
  const handleClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.stopPropagation();
    event.preventDefault();

    onClick();
  };

  return (
    <div className="relative bg-white p-3 dark:bg-black">
      <p className="max-w-[calc(100%-20px)] truncate text-[13px]">{title}</p>
      <p className="truncate text-[11px] text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100">
        {authorLabel}, {createdAtLabel}
      </p>
      <button
        disabled={disabled}
        onClick={handleClick}
        className={cn(
          "opacity-0 group-hover:opacity-100 transition absolute top-3 right-3 text-muted-foreground hover:text-blue-600",
          disabled && "cursor-not-allowed opacity-75"
        )}
      >
        <Star className={cn("h-4 w-4", isFavorite && "fill-blue-600 text-blue-600")} />
      </button>
    </div>
  );
};

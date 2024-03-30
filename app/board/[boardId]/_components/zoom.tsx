"use client";

import { Button } from "@/components/ui/button";
import { Minus, Plus } from "lucide-react";

interface ZoomProps {
  zoom: number;
  updateZoom: (newZoom: number) => void;
}
export const Zoom = ({ zoom, updateZoom }: ZoomProps) => {
  return (
    <div className="absolute h-12 bottom-2 right-2 bg-white dark:bg-black rounded-md p-3 flex items-center shadow-md">
      <div className="flex gap-x-2 items-center">
        <Button variant="outline" size="sm" onClick={() => updateZoom(zoom - 0.1)}>
          <Minus size={16} />
        </Button>
        <span>{(zoom * 100).toFixed(0)} %</span>
        <Button variant="outline" size="sm" onClick={() => updateZoom(zoom + 0.1)}>
          <Plus size={16} />
        </Button>
      </div>
    </div>
  );
};

export const ZoomSkeleton = () => {
  return (
    <div className="absolute h-12 bottom-2 right-2 bg-white dark:bg-black rounded-md p-3 flex items-center shadow-md w-[100px]" />
  );
};

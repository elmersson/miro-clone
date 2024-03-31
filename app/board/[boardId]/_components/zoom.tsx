"use client";

import { Minus, Plus } from "lucide-react";

import { Button } from "@/components/ui/button";

interface ZoomProps {
  zoom: number;
  updateZoom: (newZoom: number) => void;
}
export const Zoom = ({ zoom, updateZoom }: ZoomProps) => {
  return (
    <div className="absolute bottom-2 right-2 flex h-12 items-center rounded-md bg-white p-3 shadow-md dark:bg-black">
      <div className="flex items-center gap-x-2">
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
    <div className="absolute bottom-2 right-2 flex h-12 w-[100px] items-center rounded-md bg-white p-3 shadow-md dark:bg-black" />
  );
};

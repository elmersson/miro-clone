import { PewLayer } from "@/types/canvas";
import Image from "next/image";

interface PewProps {
  id: string;
  layer: PewLayer;
  onPointerDown: (e: React.PointerEvent, id: string) => void;
  selectionColor?: string;
}

export const Pew = ({ layer, onPointerDown, id, selectionColor }: PewProps) => {
  const { x, y, width, height } = layer;
  return (
    <foreignObject
      x={x}
      y={y}
      width={width}
      height={height}
      onPointerDown={(e) => onPointerDown(e, id)}
      style={{
        outline: selectionColor ? `1px solid ${selectionColor}` : "none",
      }}
    >
      <Image src="/bullet-hole.svg" alt="Board logo" height={50} width={50} className="filter dark:invert" />
    </foreignObject>
  );
};

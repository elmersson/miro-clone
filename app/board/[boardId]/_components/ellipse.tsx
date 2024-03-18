import { EllipseLayer } from "@/types/canvas";

interface EllipseProps {
  id: string;
  layer: EllipseLayer;
  onPointerDown: (e: React.PointerEvent, id: string) => void;
  selectionColor?: string;
}

export const Ellipse = ({ id, layer, onPointerDown, selectionColor }: EllipseProps) => {
  return <div>Ellipse</div>;
};

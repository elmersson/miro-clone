import { NoteLayer } from "@/types/canvas";

interface NoteProps {
  id: string;
  layer: NoteLayer;
  onPointerDown: (e: React.PointerEvent, id: string) => void;
  selectionColor?: string;
}

export const Note = ({ layer, onPointerDown, id, selectionColor }: NoteProps) => {
  const { x, y, width, height, fill, value } = layer;

  return <div>Note</div>;
};

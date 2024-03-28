"use client";

import { Dispatch, PointerEvent, SetStateAction, memo } from "react";

import { LayerType } from "@/types/canvas";
import { useStorage } from "@/liveblocks.config";

import { Text } from "./text";
import { Ellipse } from "./ellipse";
import { Note } from "./note";
import { Path } from "./path";
import { Rectangle } from "./rectangle";
import { colorToCss } from "@/lib/utils";
import { Pew } from "./pew";

interface LayerPreviewProps {
  id: string;
  onLayerPointerDown: (e: React.PointerEvent, layerId: string) => void;
  selectionColor?: string;
  setIsEditingText: Dispatch<SetStateAction<boolean>>;
}

export const LayerPreview = memo(({ id, onLayerPointerDown, selectionColor, setIsEditingText }: LayerPreviewProps) => {
  const layer = useStorage((root) => root.layers.get(id));

  if (!layer) {
    return null;
  }

  switch (layer.type) {
    case LayerType.Path:
      return (
        <Path
          key={id}
          points={layer.points}
          onPointerDown={(e: PointerEvent<Element>) => onLayerPointerDown(e, id)}
          x={layer.x}
          y={layer.y}
          fill={layer.fill ? colorToCss(layer.fill) : "#000"}
          stroke={selectionColor}
        />
      );
    case LayerType.Note:
      return (
        <Note
          id={id}
          layer={layer}
          onPointerDown={onLayerPointerDown}
          selectionColor={selectionColor}
          setIsEditingText={setIsEditingText}
        />
      );
    case LayerType.Text:
      return (
        <Text
          id={id}
          layer={layer}
          onPointerDown={onLayerPointerDown}
          selectionColor={selectionColor}
          setIsEditingText={setIsEditingText}
        />
      );
    case LayerType.Ellipse:
      return <Ellipse id={id} layer={layer} onPointerDown={onLayerPointerDown} selectionColor={selectionColor} />;
    case LayerType.Rectangle:
      return <Rectangle id={id} layer={layer} onPointerDown={onLayerPointerDown} selectionColor={selectionColor} />;
    case LayerType.Pew:
      return <Pew id={id} layer={layer} onPointerDown={onLayerPointerDown} selectionColor={selectionColor} />;
    default:
      console.warn("Unknown layer type");
      return null;
  }
});

LayerPreview.displayName = "LayerPreview";

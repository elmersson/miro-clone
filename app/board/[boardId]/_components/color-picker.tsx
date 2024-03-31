"use client";

import { colorToCss } from "@/lib/utils";
import { Color } from "@/types/canvas";

interface ColorPickerProps {
  onChange: (color: Color) => void;
}

export const ColorPicker = ({ onChange }: ColorPickerProps) => {
  return (
    <div className="mr-2 flex max-w-[164px] flex-wrap items-center gap-2 border-r border-neutral-200 pr-2">
      <ColorButton color={{ r: 218, g: 58, b: 45 }} onClick={onChange} />
      <ColorButton color={{ r: 236, g: 192, b: 89 }} onClick={onChange} />
      <ColorButton color={{ r: 123, g: 202, b: 143 }} onClick={onChange} />
      <ColorButton color={{ r: 101, g: 166, b: 218 }} onClick={onChange} />
      <ColorButton color={{ r: 144, g: 96, b: 238 }} onClick={onChange} />
      <ColorButton color={{ r: 236, g: 128, b: 79 }} onClick={onChange} />
      <ColorButton color={{ r: 0, g: 0, b: 0 }} onClick={onChange} />
      <ColorButton color={{ r: 255, g: 255, b: 255 }} onClick={onChange} />
    </div>
  );
};

interface ColorButtonProps {
  onClick: (color: Color) => void;
  color: Color;
}

const ColorButton = ({ onClick, color }: ColorButtonProps) => {
  return (
    <button
      className="flex h-8 w-8 items-center justify-center transition hover:opacity-75"
      onClick={() => onClick(color)}
    >
      <div className="h-8 w-8 rounded-md border border-neutral-300" style={{ background: colorToCss(color) }} />
    </button>
  );
};

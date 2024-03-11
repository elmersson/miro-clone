"use client";

interface InfoProps {
  boardId: string;
}

export const Info = ({ boardId }: InfoProps) => {
  return (
    <div className="absolute top-2 left-2 bg-white rounded-md px-1.5 h-12 flex items-center shadow-md">{boardId}</div>
  );
};

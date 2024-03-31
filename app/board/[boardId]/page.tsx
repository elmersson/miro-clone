import { Room } from "@/components/room";
import { Id } from "@/convex/_generated/dataModel";

import { Canvas } from "./_components/canvas";
import { Loading } from "./_components/loading";

interface BoardIdPageProps {
  params: {
    boardId: Id<"boards">;
  };
}

const BoardIdPage = ({ params }: BoardIdPageProps) => {
  return (
    <Room roomId={params.boardId} fallback={<Loading />}>
      <Canvas boardId={params.boardId} />
    </Room>
  );
};

export default BoardIdPage;

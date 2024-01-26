import { DndContext, DragEndEvent } from "@dnd-kit/core";
import { PlanetList, DropZone, AcceptButton } from "./components";
import { usePlanetStore } from "./hooks";
import { PlanetType } from "./types";
import { useState } from "react";

function App() {
  const [status, setStatus] = useState<"wrong" | "correct">();
  const appendArrangement = usePlanetStore((state) => state.appendArrangement);
  const onDragEnd = (e: DragEndEvent) => {
    if (e.collisions && e.active) {
      const target = e.collisions[0];
      const active = e.active;
      const dropOrder = target?.data?.droppableContainer?.data?.current?.order;
      const activeOrder = active?.data?.current;

      if (dropOrder !== undefined && activeOrder) {
        appendArrangement(dropOrder, activeOrder as PlanetType);
      }
    }
  };

  const onAccept = (isOk: boolean) => {
    setStatus(isOk ? "correct" : "wrong");
  };
  return (
    <DndContext onDragEnd={onDragEnd}>
      <main className="flex w-full items-center pt-5 px-5 h-[100vh]">
        <section className="flex-1">
          <PlanetList />
        </section>
        <section className="flex-[3] flex space-x-1">
          {[...new Array(9)].map((_, indx) => {
            return <DropZone key={indx + 1} order={indx + 1} status={status} />;
          })}
        </section>
        <AcceptButton onAccept={onAccept} />
      </main>
    </DndContext>
  );
}

export default App;

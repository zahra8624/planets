import { useDroppable } from "@dnd-kit/core";
import cls from "classnames";
import { usePlanetStore } from "../../hooks";
import Planet from "../Planet/Planet";

interface DropZoneProps {
  order: number;
  status?: "wrong" | "correct";
}

export function DropZone(props: DropZoneProps) {
  const { order, status } = props;
  const placedPlanet = usePlanetStore((state) => {
    return state.arrangedItems[order - 1];
  });
  const removeArrangement = usePlanetStore((state) => {
    return state.removeArrangement;
  });

  const { isOver, setNodeRef } = useDroppable({
    id: `droppable ${order}`,
    data: {
      order,
    },
  });

  return (
    <div className="flex flex-col items-center">
      <div
        onClick={() => removeArrangement(order)}
        ref={setNodeRef}
        style={{ zIndex: order }}
        className={cls(
          "w-20 h-20 rounded-lg transition-transform border-dashed border flex justify-center items-center",
          {
            "border-gray-400 scale-100": !isOver,
            "border-gray-600 scale-105": isOver,
            "bg-green-200": status === "correct",
            "bg-red-200": status === "wrong",
          }
        )}
      >
        {placedPlanet && <Planet planet={placedPlanet} hideName />}
      </div>
      <h4>{order}</h4>
    </div>
  );
}

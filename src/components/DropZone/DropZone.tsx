import { useDroppable } from "@dnd-kit/core";
import cls from "classnames";
import Planet from "../Planet/Planet";
import { useDropZoneLogic } from "./useDropZoneLogic";
interface DropZoneProps {
  order: number;
  status?: "wrong" | "correct";
}

export function DropZone(props: DropZoneProps) {
  const { order, status } = props;
  const { setPlanets, placedPlanet, removeArrangement } =
    useDropZoneLogic(order);

  const { isOver, setNodeRef } = useDroppable({
    id: `droppable ${order}`,
    data: {
      order,
    },
  });
  const dimension = order * 100;

  return (
    <div
      onClick={() => removeArrangement(order)}
      ref={setNodeRef}
      style={{ zIndex: 9 - order, width: dimension, height: dimension }}
      className={cls(
        `absolute rounded-full transition-transform border-dashed border flex justify-center items-center`,
        {
          "border-gray-400 scale-100": !isOver,
          "border-gray-600 scale-105": isOver,
          "bg-green-200": status === "correct",
          "bg-red-200": status === "wrong",
        }
      )}
    >
      {placedPlanet && (
        <div
          style={{ animationDelay: `${order * 50}ms` }}
          className="relative w-full h-full rounded-full animate-gogoli"
        >
          <div style={{ ...setPlanets() }} className="absolute">
            <Planet planet={placedPlanet} hideName />
          </div>
        </div>
      )}
    </div>
  );
}

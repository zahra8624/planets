import { useDroppable } from "@dnd-kit/core";
import cls from "classnames";
import { usePlanetStore } from "../../hooks";

interface DropZoneProps {
  order: number;
}

export function DropZone(props: DropZoneProps) {
  const { order } = props;
  const placedPlanet = usePlanetStore((state) => {
    console.log(state.arrangedItems);
    return state.arrangedItems[order];
  });

  const { isOver, setNodeRef } = useDroppable({
    id: `droppable ${order}`,
    data: {
      order,
    },
  });

  return (
    <div
      ref={setNodeRef}
      style={{ zIndex: order }}
      className={cls(
        "w-20 h-20 rounded-lg transition-transform border-dashed border flex justify-center items-center",
        {
          "border-gray-400 scale-100": !isOver,
          "border-gray-600 scale-105": isOver,
        }
      )}
    >
      {placedPlanet && (
        <img
          src={placedPlanet.imgSrc}
          alt={placedPlanet.imgSrc}
          className="w-12 h-12"
        />
      )}
    </div>
  );
}

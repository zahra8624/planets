import { useDraggable } from "@dnd-kit/core";
import { PlanetType } from "../../types";
import cls from "classnames";

interface PlanetProps {
  planet: PlanetType;
}

function Planet(props: PlanetProps) {
  const { planet } = props;
  const { name, imgSrc } = planet;
  const { attributes, listeners, setNodeRef, isDragging } = useDraggable({
    id: `planet ${planet.order}`,
    data: planet,
  });
  

  return (
    <img
      ref={setNodeRef}
      src={imgSrc}
      alt={name}
      className={cls("w-10 h-10", {
        "animate-bounce": isDragging,
      })}
      width="40px"
      height="40px"
      {...listeners}
      {...attributes}
    />
  );
}

export default Planet;

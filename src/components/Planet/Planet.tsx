import { useDraggable } from "@dnd-kit/core";
import { PlanetType } from "../../types";
import cls from "classnames";
import { useMemo } from "react";

interface PlanetProps {
  planet: PlanetType;
  hideName?: boolean;
}

function Planet(props: PlanetProps) {
  const { planet, hideName } = props;
  const { name, imgSrc } = planet;
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: `planet ${planet.order}`,
    data: planet,
  });

  const style = useMemo(() => {
    return transform
      ? {
          transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
        }
      : undefined;
  }, [transform]);

  return (
    <div className="flex items-center flex-col">
      <img
        ref={setNodeRef}
        src={imgSrc}
        alt={name}
        style={style}
        className={cls("w-10 h-10 transition-transform duration-75")}
        width="40px"
        height="40px"
        {...listeners}
        {...attributes}
      />
      {!hideName && <p>{planet.name}</p>}
    </div>
  );
}

export default Planet;

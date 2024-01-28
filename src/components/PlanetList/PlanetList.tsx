import Planet from "../Planet/Planet";
import { usePlanetListLogic } from "./usePlanetListLogic";

export function PlanetList() {
  const { isPlanetFound, shuffledPlanets } = usePlanetListLogic();

  return (
    <div className="flex flex-wrap items-center w-full">
      {shuffledPlanets.map((item) => {
        if (isPlanetFound(item.order)) return null;
        return (
          <div key={item.name} className="p-2.5">
            <Planet planet={item} />
          </div>
        );
      })}
    </div>
  );
}

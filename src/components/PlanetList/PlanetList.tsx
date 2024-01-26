import { useMemo } from "react";
import { PLANET_LIST } from "../../constants";
import { usePlanetStore } from "../../hooks";
import Planet from "../Planet/Planet";
import { shuffle } from "../../utils";

export function PlanetList() {
  const arrangedItems = usePlanetStore((state) => state.arrangedItems);

  const isPlanetFound = (currentPlanetOrder: number) => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //@ts-ignore
    return Object.keys(arrangedItems).reduce((isFound, item: number) => {
      if (isFound) return true;
      const currentPlanet = arrangedItems[item];
      return currentPlanet?.order === currentPlanetOrder;
    }, false);
  };

  const shuffledPlanets = useMemo(() => {
    return shuffle(PLANET_LIST);
  }, []);

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

import { PLANET_LIST } from "../../constants";
import { usePlanetStore } from "../../hooks";
import Planet from "../Planet/Planet";

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

  return (
    <>
      {PLANET_LIST.map((item) => {
        if (isPlanetFound(item.order)) return null;
        return (
          <div key={item.name} className="mb-5">
            <Planet planet={item} />
          </div>
        );
      })}
    </>
  );
}

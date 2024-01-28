import { useMemo } from "react";
import { usePlanetStore } from "../../hooks";
import { shuffle } from "../../utils";
import { PLANET_LIST } from "../../constants";


export function usePlanetListLogic() {
  
    const arrangedItems = usePlanetStore((state) => state.arrangedItems);
    
      const isPlanetFound = (currentPlanetOrder: number) => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        //@ts-ignore
        return arrangedItems.reduce((isFound, item) => {
          if (isFound) return true;
          return item?.order === currentPlanetOrder;
        }, false);
      };
    
      const shuffledPlanets = useMemo(() => {
        return shuffle(PLANET_LIST);
      }, []);

      return {isPlanetFound, shuffledPlanets}
}







  
import { usePlanetStore } from "../../hooks";


export function useDropZoneLogic(order:number) {
     const placedPlanet = usePlanetStore((state) => {
    return state.arrangedItems[order - 1];
  });
  const removeArrangement = usePlanetStore((state) => {
    return state.removeArrangement;
  });
  const setPlanets = () => {
    switch (order - 1) {
      case 0:
        return { inset: "30%" };
      case 1:
      case 2:
        return { left: "8%", top: "8%" };

      case 3:
        return { left: "10%", top: "10%" };

      default:
        return { left: "12%", top: "12%" };
    }
  };

  return {setPlanets, removeArrangement, placedPlanet}

 
}



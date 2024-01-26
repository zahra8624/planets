/* eslint-disable @typescript-eslint/ban-ts-comment */
import { usePlanetStore } from "../../hooks";

export const AcceptButton = () => {
  const arrangedItems = usePlanetStore((state) => state.arrangedItems);
  const checkPlanetArrangements = () => {
    const isOk = Object.keys(arrangedItems).reduce(
      //@ts-ignore
      (isArranged, key: number) => {
        if (!isArranged) return false;
        const currentItem = arrangedItems[key];
        if (currentItem && key === currentItem.order) return true;
        return false;
      },
      true
    );
    console.log(isOk);
  };
  return (
    <button className="flex-1" type="button" onClick={checkPlanetArrangements}>
      Accept
    </button>
  );
};

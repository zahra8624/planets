/* eslint-disable @typescript-eslint/ban-ts-comment */
import { usePlanetStore } from "../../hooks";

interface Props {
  onAccept: (isCorrect: boolean) => void;
}

export const AcceptButton = ({ onAccept }: Props) => {
  const arrangedItems = usePlanetStore((state) => state.arrangedItems);
  const checkPlanetArrangements = () => {
    const isOk = arrangedItems.reduce((isOk, currentItem, order) => {
      if (!isOk) return false;
      if (currentItem?.order !== order + 1) return false;
      return true;
    }, true);

    onAccept(isOk);
  };
  return (
    <button
      className="fixed top-4 left-4  px-5  bg-gray-300 rounded-md py-2.5"
      type="button"
      onClick={checkPlanetArrangements}
    >
      Start
    </button>
  );
};

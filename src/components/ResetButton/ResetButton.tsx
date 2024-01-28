import { usePlanetStore } from "../../hooks";

function ResetButton() {
  const resetPlanet = usePlanetStore((state) => state.resetPlanet);
  return (
    <button
      className="fixed top-16 left-4  px-4  bg-gray-300 rounded-md py-2.5"
      type="button"
      onClick={resetPlanet}
    >
      Reset
    </button>
  );
}

export default ResetButton;

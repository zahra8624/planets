import { PLANET_LIST } from "../../constants";
import Planet from "../Planet/Planet";

export function PlanetList() {
  return (
    <>
      {PLANET_LIST.map((item) => (
        <div key={item.name} className="mb-5">
          <Planet planet={item} />
        </div>
      ))}
    </>
  );
}

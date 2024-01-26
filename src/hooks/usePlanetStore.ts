import { create } from "zustand";
import { PlanetType } from "../types";

interface PlanetStore {
  arrangedItems: Array<PlanetType | null>;
  appendArrangement: (dropOrder: number, planet: PlanetType) => void;
  removeArrangement: (dropOrder: number) => void;
}

export const usePlanetStore = create<PlanetStore>((set) => ({
  arrangedItems: [...new Array(9).map(() => null)],
  appendArrangement: (order, planet) =>
    set((state) => ({
      ...state,
      arrangedItems: state.arrangedItems.map((p, o) => {
        const thisOrder = o + 1;
        if (p?.name === planet.name) return null;
        if (order === thisOrder) {
          return planet;
        }
        return p;
      }),
    })),
  removeArrangement: (order) =>
    set((state) => ({
      ...state,
      arrangedItems: state.arrangedItems.map((p, o) =>
        o === order ? null : p
      ),
    })),
}));

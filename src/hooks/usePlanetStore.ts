import { create } from "zustand";
import { PlanetType } from "../types";

interface PlanetStore {
  arrangedItems: Record<number, PlanetType | undefined>;
  appendArrangement: (dropOrder: number, planet: PlanetType) => void;
  removeArrangement: (dropOrder: number) => void;
}

export const usePlanetStore = create<PlanetStore>((set) => ({
  arrangedItems: {},
  appendArrangement: (order, planet) =>
    set((state) => ({
      ...state,
      arrangedItems: {
        ...state.arrangedItems,
        [order]: planet,
      },
    })),
  removeArrangement: (order) =>
    set((state) => ({
      ...state,
      arrangedItems: {
        ...state.arrangedItems,
        [order]: undefined,
      },
    })),
}));

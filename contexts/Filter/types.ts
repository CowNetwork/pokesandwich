import { ReactNode } from "react";

export type FilterContextValue = {
  effectLevel?: number;
  effectType?: string;
  pokemonType?: string;
  reset: () => void;
  set: (effectLevel: number, effectType: string, pokemonType: string) => void;
};

export type FilterProviderProps = {
  children: ReactNode;
};

import { createContext, useState } from "react";
import { FilterContextValue, FilterProviderProps } from "./types";

const initialValue: FilterContextValue = {
  effectLevel: undefined,
  effectType: undefined,
  pokemonType: undefined,
  hasFilter: false,
  reset: () => void 0,
  set: (_, __, ___) => void 0,
};

export const FilterContext = createContext<FilterContextValue>(initialValue);

export const FilterProvider = ({ children }: FilterProviderProps) => {
  const [{ effectLevel, effectType, pokemonType }, setFilters] = useState<
    Pick<FilterContextValue, "effectLevel" | "effectType" | "pokemonType">
  >({
    effectLevel: undefined,
    effectType: undefined,
    pokemonType: undefined,
  });

  const reset = () => {
    setFilters({
      effectLevel: undefined,
      effectType: undefined,
      pokemonType: undefined,
    });
  };

  const set = (
    effectLevel: number,
    effectType: string,
    pokemonType: string
  ) => {
    setFilters({
      effectLevel,
      effectType,
      pokemonType,
    });
  };

  const value: FilterContextValue = {
    effectLevel,
    effectType,
    pokemonType,
    hasFilter:
      typeof effectLevel !== "undefined" &&
      typeof effectType !== "undefined" &&
      typeof pokemonType !== "undefined",
    reset,
    set,
  };

  const { Provider } = FilterContext;

  return <Provider value={value}>{children}</Provider>;
};

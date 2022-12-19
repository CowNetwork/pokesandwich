import { ReactNode } from "react";

export type IngredientDetailContextValue = {
  hide: () => void;
  show: (ingredientId: string) => void;
};

export type IngredientDetailProviderProps = {
  children: ReactNode;
};

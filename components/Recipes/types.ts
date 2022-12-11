import { ReactNode } from "react";
import { EffectType, Ingredient, PokemonType } from "../../types";

type RecipeEffect = {
  effectType: EffectType;
  level: number;
  pokemonType: PokemonType | undefined;
}

export type RecipeCardProps = {
  effects: RecipeEffect[];
  ingredients: (Ingredient & { instanceId: number;  quantity: number; })[];
};

export type RecipeContainerProps = {
  children: ReactNode;
};
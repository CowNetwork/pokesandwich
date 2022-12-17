import useSWR from "swr";
import { directus } from "../../data/directus";
import { Ingredient } from "../../types";

const fetchIngredient = (id: string) =>
  directus.items("ingredients").readOne(id, {
    fields: ["*", "translations.*"],
  });

export const useSandwichIngredient = (ingredientId: string) => {
  const { data: ingredient } = useSWR(
    () => `ingredient:${ingredientId}`,
    () => fetchIngredient(ingredientId)
  );

  return ingredient as Ingredient;
};

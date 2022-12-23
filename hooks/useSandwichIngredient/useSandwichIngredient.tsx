import useSWR from "swr";
import { directus } from "../../data/directus";
import { Ingredient } from "../../types";

const fetchIngredient = async (id: string | undefined) => {
  if (typeof id === "undefined") return undefined;

  return await directus.items("ingredients").readOne(id, {
    fields: ["id", "imageUrl", "translations.*"],
  });
};

export const useSandwichIngredient = (ingredientId: string | undefined) => {
  const { data: ingredient } = useSWR(
    () => `ingredient:${ingredientId ?? ""}`,
    () => fetchIngredient(ingredientId)
  );

  return ingredient as Ingredient;
};

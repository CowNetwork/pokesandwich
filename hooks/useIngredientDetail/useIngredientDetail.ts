import useSWR from "swr";
import { directus } from "../../data/directus";
import { Ingredient } from "../../types";

const fetchIngredient = async (id: string | undefined) => {
  if (typeof id === "undefined") return undefined;

  return await directus.items("ingredients").readOne(id, {
    fields: [
      "*",
      "shoppableAt.shop_id.*",
      "shoppableAt.shop_id.translations.*",
      "translations.*",
    ],
  });
};

export const useIngredientDetail = (ingredientId: string | undefined) => {
  const { data: ingredient } = useSWR(
    () => `ingredient-detail:${ingredientId ?? ""}`,
    () => fetchIngredient(ingredientId)
  );

  return ingredient as Ingredient;
};

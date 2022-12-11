import { EffectType, Ingredient, PokemonType } from "../types";

const PLACEHOLDER_LOCALE = "de-DE";

export const getLocaleEffectType = (effectType: EffectType) => {
  return effectType.translations.find((t) => t.languages_code === PLACEHOLDER_LOCALE) ?? { name: "", abbreviation: "" };
};

export const getLocaleIngredientName = (ingredient: Ingredient) => {
  return ingredient.translations.find((t) => t.languages_id === PLACEHOLDER_LOCALE)?.name ?? "";
};

export const getLocalePokemonTypeName = (pokemonType: PokemonType) => {
  return pokemonType.translations.find((t) => t.languages_code === PLACEHOLDER_LOCALE)?.name ?? "";
};
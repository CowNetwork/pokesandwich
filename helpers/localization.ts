import { EffectType, Ingredient, PokemonType } from "../types";

const PLACEHOLDER_LOCALE = "de-DE";

export const getLocaleEffectType = (effectType: EffectType) => {
  return (
    effectType.translations.find(
      (t) => t.languages_code === PLACEHOLDER_LOCALE
    ) ?? { name: "", abbreviation: "" }
  );
};

export const getLocaleIngredientName = (ingredient: Ingredient) => {
  return (
    ingredient.translations.find((t) => t.languages_id === PLACEHOLDER_LOCALE)
      ?.name ?? ""
  );
};

export const getLocalePokemonTypeName = (pokemonType: PokemonType) => {
  return (
    pokemonType.translations.find(
      (t) => t.languages_code === PLACEHOLDER_LOCALE
    )?.name ?? ""
  );
};

type WithKey<T extends string | number | symbol> = Record<T, string>;

export const translate =
  <TField extends string = "languages_code">(
    locale: string = "de-DE",
    fieldName: TField = "languages_code" as TField
  ) =>
  <T extends WithKey<TField>>(translations: T[]) => {
    return translations.find(
      (translation) => translation[fieldName] === locale
    )!;
  };

const INGREDIENT_TYPE_TRANSLATIONS: Record<
  string,
  Record<Ingredient["type"], string>
> = {
  "de-DE": {
    condiment: "Würzmittel",
    topping: "Belag",
  },
  "en-US": {
    condiment: "Condiment",
    topping: "Topping",
  },
};

export const translateIngredientType = (
  type: Ingredient["type"],
  locale: string = "de-DE"
) => INGREDIENT_TYPE_TRANSLATIONS[locale]?.[type] ?? type;

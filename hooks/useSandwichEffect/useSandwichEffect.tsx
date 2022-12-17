import useSWR from "swr";
import { directus } from "../../data/directus";
import { EffectType, PokemonType } from "../../types";

const fetchEffectType = (type: string) =>
  directus.items("effect_types").readOne(type, {
    fields: ["*", "translations.*"],
  });

const fetchPokemonType = (type: string) =>
  directus.items("pokemon_types").readOne(type, {
    fields: ["*", "translations.*"],
  });

export const useSandwichEffect = (
  effectTypeId: string,
  pokemonTypeId: string
) => {
  const { data: effectType } = useSWR(
    () => `effect-type:${effectTypeId}`,
    () => fetchEffectType(effectTypeId)
  );
  const { data: pokemonType } = useSWR(
    () => `pokemon-type:${pokemonTypeId}`,
    () => fetchPokemonType(pokemonTypeId)
  );

  return {
    effectType: effectType as EffectType,
    pokemonType: pokemonType as PokemonType,
  };
};

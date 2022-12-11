import axios from "axios";
import { EffectType, Ingredient, PokemonType, Sandwich } from "../types";

const BASE_URL = "https://directus.pokesandwi.ch/";

type DirectusResult<T> = { data: T; };

export const fetchEffectTypes = async () => {
  const { data: { data } } = await axios.get<DirectusResult<EffectType[]>>(`${BASE_URL}items/effect_types?fields=*,translations.*`);

  return data;
};

export const fetchIngredients = async () => {
  const { data: { data } } = await axios.get<DirectusResult<Ingredient[]>>(`${BASE_URL}items/ingredients?fields=*,translations.*`);

  return data;
};

export const fetchPokemonTypes = async () => {
  const { data: { data } } = await axios.get<DirectusResult<PokemonType[]>>(`${BASE_URL}items/pokemon_types?fields=*,translations.*`);

  return data;
};

export const fetchRecipes = async () => {
  const { data: { data } } = await axios.get<DirectusResult<Sandwich[]>>(`${BASE_URL}items/sandwiches?fields=*,ingredients.*,translations.*`);

  return data;
};
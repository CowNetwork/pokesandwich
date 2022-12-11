"use client";

import useSWR from "swr";
import RecipeCard from '../components/Recipes/Card';
import RecipesContainer from '../components/Recipes/Container';
import { fetchEffectTypes, fetchIngredients, fetchPokemonTypes, fetchRecipes } from "../data/fetchers";
import { Sandwich } from "../types";
import styles from './page.module.scss';

export default function Home() {
  const { data: allEffectTypes } = useSWR("effect_types", fetchEffectTypes);
  const { data: allIngredients } = useSWR("ingredients", fetchIngredients);
  const { data: allPokemonTypes } = useSWR("pokemon_types", fetchPokemonTypes);

  const { data: allRecipes } = useSWR("recipes", fetchRecipes);

  const getEffects = (recipe: Sandwich) => {
    const convertEffect = (effectTypeId: string, pokemonTypeId: string, level: number) => {
      return {
        effectType: allEffectTypes?.find((effectType) => effectType.id === effectTypeId)!,
        level,
        pokemonType: allPokemonTypes?.find((pokemonType) => pokemonType.id === pokemonTypeId)!,
      };
    };

    return [
      convertEffect(recipe.firstEffect, recipe.firstEffectType, recipe.firstEffectLevel),
      convertEffect(recipe.secondEffect, recipe.secondEffectType, recipe.secondEffectLevel),
      convertEffect(recipe.thirdEffect, recipe.thirdEffectType, recipe.thirdEffectLevel),
    ];
  };

  const getIngredients = (recipe: Sandwich) => {
    return recipe.ingredients.map((raw) => {
      const ingredient = allIngredients?.find((ingredient) => ingredient.id === raw.ingredients_id)!;
      return {
        ...ingredient,
        instanceId: raw.id,
        quantity: raw.quantity,
      };
    });
  };

  const dataComplete = allEffectTypes?.length !== 0 && allIngredients?.length !== 0 && allPokemonTypes?.length !== 0;

  return (
    <div className={styles.base}>
      <RecipesContainer>
        {dataComplete && allRecipes !== undefined && allRecipes.map((recipe) =>
          <RecipeCard
            effects={getEffects(recipe)}
            ingredients={getIngredients(recipe)}
            key={recipe.id}
          />
        )}
      </RecipesContainer>
    </div>
  );
}

"use client";

import cx from "classnames";
import Image from "next/image";
import { getLocaleEffectType, getLocaleIngredientName, getLocalePokemonTypeName } from "../../helpers/localization";
import styles from "./Card.module.scss";
import { RecipeCardProps } from "./types";

const RecipeCard = ({
  effects,
  ingredients,
}: RecipeCardProps) => {
  return <article className={cx(styles.base, {
  })}>
    <div className={styles.name}><span style={{ fontWeight: 300 }}>#S0001</span> McTasty</div>

    {ingredients.map((ingredient) =>
      <Image alt={getLocaleIngredientName(ingredient)} height={58} key={ingredient.instanceId} src={ingredient.imageUrl} width={58} />
    )}

    <div className={styles.effects}>
      {effects.map((effect, index) => {
        const { name: effectName, abbreviation: effectShortName } = getLocaleEffectType(effect.effectType);
        const pokemonTypeName = effect.pokemonType && getLocalePokemonTypeName(effect.pokemonType);

        return (
          <span className={styles.effect} key={index}>
            {effect.pokemonType && <Image alt={pokemonTypeName!} height={22} src={effect.pokemonType.imageUrl} title={pokemonTypeName} width={22} />}
            <span title={effectName}>{`${effectShortName || effectName} ${effect.level}`}</span>
          </span>
        );
      })}
    </div>
  </article>;
};

export default RecipeCard;
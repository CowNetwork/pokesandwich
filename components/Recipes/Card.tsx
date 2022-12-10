"use client";

import cx from "classnames";
import styles from "./Card.module.scss";
import { RecipeCardProps } from "./types";

const RecipeCard = ({

}: RecipeCardProps) => {
  return <article className={cx(styles.base, {
  })}>
    <div className={styles.name}><span style={{ fontWeight: 300 }}>#S0001</span> McTasty</div>

    <img height={58} src="https://www.pokewiki.de/images/4/4e/Itemsprite_Ananas_KAPU.png" />
    <img height={58} src="https://www.pokewiki.de/images/7/73/Itemsprite_Basilikum_KAPU.png" />
    <img height={58} src="https://www.pokewiki.de/images/c/ca/Itemsprite_Butter_KAPU.png" />

    <div className={styles.effects}>
      <span className={styles.effect}>
        <img height={22} src="https://www.pokewiki.de/images/thumb/d/d8/Typ-Icon_Eis_%28Symbol%29_PLA.png/48px-Typ-Icon_Eis_%28Symbol%29_PLA.png" />
        <span>Fang 1</span>
      </span>
      <span className={styles.effect}>
        <img height={22} src="https://www.pokewiki.de/images/thumb/a/a9/Typ-Icon_Elektro_%28Symbol%29_PLA.png/48px-Typ-Icon_Elektro_%28Symbol%29_PLA.png" />
        <span>Raid 1</span>
      </span>
      <span className={styles.effect}>
        <img height={22} src="https://www.pokewiki.de/images/thumb/0/00/Typ-Icon_Flug_%28Symbol%29_PLA.png/48px-Typ-Icon_Flug_%28Symbol%29_PLA.png" />
        <span>Maxi 1</span>
      </span>
    </div>
  </article>;
};

export default RecipeCard;
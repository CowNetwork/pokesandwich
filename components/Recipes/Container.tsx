"use client";

import cx from "classnames";
import styles from "./Container.module.scss";
import { RecipeContainerProps } from "./types";

const RecipesContainer = ({
  children,
}: RecipeContainerProps) => {
  return <section className={cx(styles.base, {
  })}>
    {children}
  </section>;
};

export default RecipesContainer;
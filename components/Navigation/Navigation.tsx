"use client";

import cx from "classnames";
import { Books, Funnel } from "phosphor-react";
import { useState } from "react";
import useScroll from "../../hooks/useScroll/useScroll";
import styles from "./Navigation.module.scss";

const Navigation = () => {
  const [collapsed, setCollapsed] = useState(false);

  useScroll(() => {
    const { scrollY } = window;

    if (scrollY > 0 && !collapsed) {
      setCollapsed(true);
    } else if (scrollY === 0 && collapsed) {
      setCollapsed(false);
    }
  });

  return <nav className={cx(styles.base, {
    [styles.collapsed]: collapsed,
  })}>
    <div className={styles.header}>
      <div className={styles.brand}>
        <Books size={24} weight="duotone" />
        <span>PokeSandwi.ch</span>
      </div>

      <Funnel size={24} weight="duotone" />
    </div>

    <div className={styles.title}>Alle Rezepte</div>
  </nav>;
};

export default Navigation;
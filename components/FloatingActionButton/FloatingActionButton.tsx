"use client";

import cx from "classnames";
import { Plus } from "phosphor-react";
import styles from "./FloatingActionButton.module.scss";
import { FloatingActionButtonProps } from "./types";

const FloatingActionButton = ({
  fixed = false
}: FloatingActionButtonProps) => {
  return <button className={cx(styles.base, {
    [styles.fixed]: fixed
  })}>
    <Plus size={24} weight="bold" />
  </button>;
};

export default FloatingActionButton;
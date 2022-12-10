"use client";

import cx from "classnames";
import styles from "./BottomSheet.module.scss";
import { BottomSheetProps } from "./types";

const BottomSheet = ({
}: BottomSheetProps) => {
  return <article className={cx(styles.base, {
  })}>
    <div className={styles.title}>Filter</div>
  </article>;
};

export default BottomSheet;
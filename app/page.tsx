"use client";

import { Container } from "@chakra-ui/react";
import { SandwichesGrid } from "../components/SandwichesGrid/SandwichesGrid";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <div className={styles.base}>
      <Container maxW="1440px" py={4}>
        <SandwichesGrid />
      </Container>
    </div>
  );
}

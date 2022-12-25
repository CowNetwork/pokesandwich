import { Container } from "@chakra-ui/react";
import Head from "next/head";
import { SandwichesGrid } from "../components/SandwichesGrid/SandwichesGrid";

export default function Home() {
  return (
    <>
      <Head>
        <title>PokéSandwich</title>
        <meta name="description" content="Lecker. Schmecker. Dachdecker." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Container maxW="1440px" py={4}>
          <SandwichesGrid />
        </Container>
      </main>
    </>
  );
}

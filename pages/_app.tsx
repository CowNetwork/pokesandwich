import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import Navigation from "../components/Navigation/Navigation";
import { FilterProvider } from "../contexts/Filter/Filter.context";
import { IngredientDetailProvider } from "../contexts/IngredientDetail/IngredientDetail.context";
import "../styles/globals.scss";

export default function App({ Component, pageProps }: AppProps) {
  const theme = extendTheme({
    fonts: {
      body: "'Quicksand', sans-serif",
      heading: "'Quicksand', sans-serif",
      noto: "'Noto Sans', sans-serif",
    },
  });

  return (
    <ChakraProvider theme={theme}>
      <IngredientDetailProvider>
        <FilterProvider>
          <Navigation />

          <Component {...pageProps} />
        </FilterProvider>
      </IngredientDetailProvider>
    </ChakraProvider>
  );
}

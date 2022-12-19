"use client";

import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import Navigation from "../components/Navigation/Navigation";
import { FilterProvider } from "../contexts/Filter/Filter.context";
import { IngredientDetailProvider } from "../contexts/IngredientDetail/IngredientDetail.context";
import "./globals.scss";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const theme = extendTheme({
    fonts: {
      body: "'Quicksand', sans-serif",
      heading: "'Quicksand', sans-serif",
      noto: "'Noto Sans', sans-serif",
    },
  });

  return (
    <html lang="en">
      <head />

      <body>
        <ChakraProvider theme={theme}>
          <IngredientDetailProvider>
            <FilterProvider>
              <Navigation />

              {children}
            </FilterProvider>
          </IngredientDetailProvider>
        </ChakraProvider>
      </body>
    </html>
  );
}

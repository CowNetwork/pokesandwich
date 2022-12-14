"use client";

import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import Navigation from '../components/Navigation/Navigation';
import './globals.scss';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
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
          <Navigation />

          {children}
        </ChakraProvider>
      </body>
    </html>
  );
}

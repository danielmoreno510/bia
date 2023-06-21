"use client";

import { Inter } from "next/font/google";
import { Box, ChakraProvider } from "@chakra-ui/react";
import Header from "./components/common/Header";

import "./globals.css";
import theme from "./theme";

const inter = Inter({ subsets: ["latin"] });

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ChakraProvider theme={theme}>
          <Header />
          <Box className="padding-hotizontal">{children}</Box>
        </ChakraProvider>
      </body>
    </html>
  );
};

export default RootLayout;

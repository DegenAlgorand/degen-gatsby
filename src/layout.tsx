import * as React from "react"

import { Container } from '@chakra-ui/react';
import { ChakraProvider } from "@chakra-ui/provider";
import theme from "./theme";
import Navbar from "./components/navbar";

import '@fontsource/space-mono';
import '@fontsource/roboto-mono';

interface LayoutProps {
    children?: React.ReactNode;
}

// markup
const Layout = ({children}:LayoutProps) => {
  return (
    <ChakraProvider theme={theme}>
      <Navbar />
      <Container maxW={'7xl'}>
        {children}
      </Container>
    </ChakraProvider>
  )
}

export default Layout;
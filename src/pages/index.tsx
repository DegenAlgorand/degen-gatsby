import * as React from "react"

import { Container } from '@chakra-ui/react';
import { ChakraProvider } from "@chakra-ui/provider";
import theme from "../theme";
import Navbar from "../components/navbar";

import '@fontsource/space-mono';
import '@fontsource/roboto-mono';
import LaunchSmartContractsHero from "../components/launchSmartContractsHero";

// markup
const IndexPage = () => {
  return (
    <ChakraProvider theme={theme}>
      <Navbar />
      <Container maxW={'7xl'}>
      <LaunchSmartContractsHero />
    </Container>
    </ChakraProvider>
  )
}

export default IndexPage

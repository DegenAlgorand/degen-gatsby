import * as React from "react"

import { Center, Box, Text, Button, ColorModeProvider, useColorMode, color } from '@chakra-ui/react';
import { ChakraProvider } from "@chakra-ui/provider";

import theme from "../theme";
import ColorModeToggle from "../components/colorModeToggle";
import Navbar from "../components/navbar";

// markup
const IndexPage = () => {
  return (
    <ChakraProvider theme={theme}>
      <Navbar />
      <Center padding={10}>
        
        <Box>
          <Text>Degen</Text>
        </Box>
      </Center>
    </ChakraProvider>
  )
}

export default IndexPage

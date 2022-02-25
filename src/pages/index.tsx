import * as React from "react"

import { Center, Box, Text, Button } from '@chakra-ui/react';
import { ChakraProvider } from "@chakra-ui/provider";

import theme from "../theme";

// markup
const IndexPage = () => {
  return (
    <ChakraProvider theme={theme}>
      <Center padding={10}> 
        <Box>
          <Text>Degen</Text>
          <Button>Click Me</Button>
        </Box>
      </Center>
    </ChakraProvider>
   
  )
}

export default IndexPage

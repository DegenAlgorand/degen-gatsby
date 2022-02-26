import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  config: {
    initialColorMode: "dark"
  },
  fonts: {
    heading: 'Space Mono, sans-serif',
    body: 'Roboto Mono, sans-serif',
  },
})

export default theme
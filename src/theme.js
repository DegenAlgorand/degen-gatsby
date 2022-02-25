import { extendTheme } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';


const theme = extendTheme({
  config: {
    initialColorMode: "dark"
  },
})

export default theme
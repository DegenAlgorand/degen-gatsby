import React, {useEffect, useState} from "react"

import { Container } from '@chakra-ui/react';
import { ChakraProvider } from "@chakra-ui/provider";


import theme from "./theme";
import Navbar from "./components/navbar";
import NetworkSelect from "./components/select";
import ColorModeToggle from "./components/colorModeToggle";

import * as buffer from 'buffer';

import '@fontsource/space-mono';
import '@fontsource/roboto-mono';

import SEO from "./components/seo";
import ConnectButton from "./components/connect/connectButton";
import Footer from './components/footer';

if (typeof window !== `undefined`) {
  (window as any).Buffer = buffer.Buffer;
}

interface LayoutProps {
    children?: React.ReactNode;
}

// markup
const Layout = ({children}:LayoutProps) => {

  const [environment, setEnvironment] = useState<string>();

  

  useEffect(() => {
    setEnvironment(process.env.GATSBY_ENV)
  }, []);

  return (
    <>
      <SEO />
      <ChakraProvider theme={theme}>
        <Navbar left={ environment == 'dev' ? <NetworkSelect/>:<></>}>
          <ColorModeToggle/>
          <ConnectButton />
        </Navbar>
        <Container maxW={'7xl'} minHeight={'81vh'}>
          {children}
        </Container>
        <Footer />
      </ChakraProvider>
    </>
  )
}

export default Layout;
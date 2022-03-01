import React, {useEffect} from "react"

import { Container, useDisclosure, HStack } from '@chakra-ui/react';
import { ChakraProvider } from "@chakra-ui/provider";
import WalletConnect from "@walletconnect/client";
import QRCodeModal from "algorand-walletconnect-qrcode-modal";
import MyAlgoConnect from '@randlabs/myalgo-connect';

import theme from "./theme";
import Navbar from "./components/navbar";
import Button from "./components/button";
import WalletConnectModal from "./components/walletConnectModal"
import ColorModeToggle from "./components/colorModeToggle";
import DisconnectWalletButton from './components/disconnectWallet';

import { truncate } from './utils/utilities';
import * as buffer from 'buffer';
// import WalletConnect from "./components/walletConnect";

import '@fontsource/space-mono';
import '@fontsource/roboto-mono';

import useWalletAccount from './utils/persistAccount';
import { connected } from "process";

if (typeof window !== `undefined`) {
  (window as any).Buffer = buffer.Buffer;
}

interface LayoutProps {
    children?: React.ReactNode;
}

// markup
const Layout = ({children}:LayoutProps) => {
    const [account, setAccount] = useWalletAccount({connected:false, address: "", provider:""});
    const { isOpen, onOpen, onClose } = useDisclosure();

  const handleWalletConnect = async () => {
    // Create a connector
    const connector = new WalletConnect({
      bridge: "https://bridge.walletconnect.org", // Required
      qrcodeModal: QRCodeModal,
    });

    // Check if connection is already established
    if (!connector.connected) {
      // create new session
      connector.createSession();
    }

    connector.on("connect", (error, payload) => {
      if (error) {
        throw error;
      }
    
      // Get provided accounts
      const { accounts } = payload.params[0];
      setAccount({connected: true, address: accounts[0], provider: 'PeraWallet'});
    });

    // session update example 
    connector.on("session_update", async (error, payload) => {

      if (error) {
        throw error;
      }
      // Get provided accounts
      const { accounts } = payload.params[0];
      setAccount({connected: true, address: accounts[0], provider: 'PeraWallet'});
    });

    // Handle the case when the wallet is connected but user has selected to disconnect from local storage
    if (connector.connected) {
      const { accounts } = connector;
      setAccount({connected: true, address: accounts[0], provider: 'PeraWallet'});
    }

    // Close the modal
    onClose()
  }

  const handleDisconnect = () => {
    setAccount({connected: false, address: "", provider: ""});
    localStorage.removeItem('walletAccount');
  }     

  const handleMyAlgoConnect = async () => {
    const myAlgoConnect = new MyAlgoConnect();
    try {
        const accountsSharedByUser = await myAlgoConnect.connect();
        setAccount({connected: true, address: accountsSharedByUser[0].address, provider: 'MyAlgo'});
    } catch(err) {
        console.log(err);
    }

  // For the future may need to use useEffect to get initial state (not sure how this works yet)
  useEffect(() => {
    console.log("here")
    console.log(account)
    if(!account){
      setAccount({connected:false, address: "", provider:""})
    }
  }, [account]);
}

  return (
    
    <ChakraProvider theme={theme}>
      <WalletConnectModal isOpen={isOpen} onClose={onClose}>
        <Button width={'100%'} marginBottom={'10px'} onClickHandler={handleMyAlgoConnect} text={"Connect MyAlgo"}/>
        <Button width={'100%'} marginBottom={'10px'} onClickHandler={handleWalletConnect} text={"Wallet Connect"}/>
      </WalletConnectModal>
      <Navbar>
      <ColorModeToggle/>
      {account.connected?
        <HStack>
          <Button width={'100%'} onClickHandler={onOpen} text={truncate(account.address!)}/>
          <DisconnectWalletButton onClickHandler={handleDisconnect}/>
        </HStack>
        :
        <Button width={'100%'} marginBottom={'10px'} onClickHandler={onOpen} text={"Connect Wallet"}/>
      } 
      </Navbar>
      <Container maxW={'7xl'}>
        {children}
      </Container>
    </ChakraProvider>
  )
}

export default Layout;
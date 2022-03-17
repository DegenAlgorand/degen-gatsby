import React, {useEffect, useState} from "react"

import { Container, useDisclosure, HStack } from '@chakra-ui/react';
import { ChakraProvider } from "@chakra-ui/provider";
import WalletConnect from "@walletconnect/client";
import QRCodeModal from "algorand-walletconnect-qrcode-modal";
import MyAlgoConnect from '@randlabs/myalgo-connect';

import theme from "./theme";
import Navbar from "./components/navbar";
import Button from "./components/button";
import Select from "./components/select";
import WalletConnectModal from "./components/walletConnectModal"
import ColorModeToggle from "./components/colorModeToggle";

import * as buffer from 'buffer';

import '@fontsource/space-mono';
import '@fontsource/roboto-mono';

import useWalletAccount from './utils/persistAccount';
import AccountInfoPopover from "./components/accountInfoPopover";
import SEO from "./components/seo";

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
    const [environment, setEnvironment] = useState<string>();

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
        onClose();
    } catch(err) {
        console.log(err);
    }
  }

  const [shouldShowAccountInfo, setShouldShowAccountInfo] = useState(false);
  const showAccountInfo = () => {
    setShouldShowAccountInfo(!shouldShowAccountInfo);
  }

  useEffect(() => {
    setEnvironment(process.env.GATSBY_ENV)
  }, []);

  return (
    <>
      <SEO />
      <ChakraProvider theme={theme}>
        <WalletConnectModal isOpen={isOpen} onClose={onClose}>
          <Button width={'100%'} marginBottom={'10px'} onClickHandler={handleMyAlgoConnect} text={"Connect MyAlgo"} dataTest={'myAlgoConnectButton'} />
          <Button width={'100%'} marginBottom={'10px'} onClickHandler={handleWalletConnect} text={"Wallet Connect"} dataTest={'walletConnectButton'} />
        </WalletConnectModal>
        <Navbar left={ environment == 'dev' ? <Select/>:<></>}>
          <ColorModeToggle/>
          {account?.connected?
            <AccountInfoPopover address={account.address} disconnect={handleDisconnect} />
            :
            <Button width={'100%'} marginBottom={'10px'} onClickHandler={onOpen} text={"Connect Wallet"} dataTest={'connectWalletButton'}/>
          }
        </Navbar>
        <Container maxW={'7xl'}>
          {children}
        </Container>
      </ChakraProvider>
    </>
  )
}

export default Layout;
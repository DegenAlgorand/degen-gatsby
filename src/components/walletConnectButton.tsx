import React from 'react'
import WalletConnect from "@walletconnect/client";
import QRCodeModal from "algorand-walletconnect-qrcode-modal";
import { Button } from '@chakra-ui/react';
import useWalletAccount from '../utils/persistAccount';

const WalletConnectButton = () => {
  const [account, setAccount] = useWalletAccount();

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
  }
  
  return (
    <Button w={'100%'} marginBottom={'10px'} onClick={handleWalletConnect}>Wallet Connect</Button>
  )
}

export default WalletConnectButton;

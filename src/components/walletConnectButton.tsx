import React from 'react'
import WalletConnect from "@walletconnect/client";
import QRCodeModal from "algorand-walletconnect-qrcode-modal";
import algosdk from "algosdk";
import { formatJsonRpcRequest } from "@json-rpc-tools/utils";
import { Button } from '@chakra-ui/react';

const WalletConnectButton = () => {
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
  }
  
  return (
    <Button w={'100%'} marginBottom={'10px'} onClick={handleWalletConnect}>Wallet Connect</Button>
  )
}

export default WalletConnectButton;

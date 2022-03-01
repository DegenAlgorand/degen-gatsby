import { Button, Tooltip } from '@chakra-ui/react';
import React from 'react'
import useWalletAccount from '../utils/persistAccount';
import { BsFillEjectFill } from "react-icons/bs";

const DisconnectWalletButton = () => {
  const [account, setAccount] = useWalletAccount();

  const handleDisconnect = () => {
    setAccount({connected: false, address: "", provider: ""});
    localStorage.removeItem('walletAccount');
  }   
  return (
    <Tooltip label='Disconnect Wallet'>
      <Button onClick={handleDisconnect}><BsFillEjectFill /> </Button>
    </Tooltip>
  );
}

export default DisconnectWalletButton;
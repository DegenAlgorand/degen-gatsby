import { useDisclosure } from '@chakra-ui/react';
import WalletConnect from '@walletconnect/client';
import React, { useState } from 'react';
import useWalletAccount from '../../utils/persistAccount';
import WalletConnectModal from '../walletConnectModal';
import QRCodeModal from "algorand-walletconnect-qrcode-modal";
import MyAlgoConnect from '@randlabs/myalgo-connect';
import AccountInfoPopover from '../accountInfoPopover';
import Button from '../button';

const ConnectButton = () => {
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
            onClose();
        } catch(err) {
            console.log(err);
        }
      }
    
      const [shouldShowAccountInfo, setShouldShowAccountInfo] = useState(false);
      const showAccountInfo = () => {
        setShouldShowAccountInfo(!shouldShowAccountInfo);
      }

    return (
        <>
          {account?.connected ?
            <AccountInfoPopover address={account.address} disconnect={handleDisconnect} />
            :
            <Button width={'100%'} marginBottom={'10px'} onClickHandler={onOpen} text={"Connect Wallet"} dataTest={'connectWalletButton'} />
          }

          <WalletConnectModal isOpen={isOpen} onClose={onClose}>
            <Button width={'100%'} marginBottom={'10px'} onClickHandler={handleMyAlgoConnect} text={"Connect MyAlgo"} dataTest={'myAlgoConnectButton'} />
            <Button width={'100%'} marginBottom={'10px'} onClickHandler={handleWalletConnect} text={"Wallet Connect"} dataTest={'walletConnectButton'} />
          </WalletConnectModal>
        </>
    )
}

export default ConnectButton;

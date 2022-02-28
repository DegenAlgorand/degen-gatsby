import { Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure } from '@chakra-ui/react';
import React from 'react';
import MyAlgoConnectButton from './myAlgoConnectButton';
import WalletConnectButton from './walletConnectButton';
import * as buffer from 'buffer';
import useWalletAccount from '../utils/persistAccount';

if (typeof window !== `undefined`) {
  (window as any).Buffer = buffer.Buffer;
}

const truncate = (address: string) => address.substring(0, 4) + "..." + address.substring(address.length-4, address.length)

const WalletConnectModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [account, setAccount] = useWalletAccount();

  const handleDisconnect = () => {
    setAccount({});
    localStorage.setItem('walletconnect', '{}');
  }   
  if (account?.address) {
    return <Button onClick={handleDisconnect}>{truncate(account?.address)}</Button>
  }
  return (
    <>
      <Button onClick={onOpen}>Connect Wallet</Button>
      <Modal onClose={onClose} size={'sm'} isOpen={isOpen}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Connect Your Wallet</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <MyAlgoConnectButton />
            <WalletConnectButton />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  )
}

export default WalletConnectModal;

import { Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure } from '@chakra-ui/react';
import React from 'react';
import MyAlgoConnectButton from './myAlgoConnectButton';
import WalletConnectButton from './walletConnectButton';
import * as buffer from 'buffer';
(window as any).Buffer = buffer.Buffer;

const WalletConnectModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()

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

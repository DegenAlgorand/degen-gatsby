import {Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay } from '@chakra-ui/react';
import React from 'react';

interface WalletConnectModalProps {
  children?: React.ReactNode;
  isOpen:boolean,
  onClose:() => void,
}

const WalletConnectModal = ({children, isOpen, onClose}:WalletConnectModalProps) => {
  
  return (
    <>
      <Modal onClose={onClose} size={'sm'} isOpen={isOpen}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Connect Your Wallet</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {children}
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  )
}

export default WalletConnectModal;

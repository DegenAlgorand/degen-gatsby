import { Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure } from '@chakra-ui/react';
import React from 'react';

const WalletConnectModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [size, setSize] = React.useState('md')

  return (
    <>
      <Button onClick={onOpen}>Connect Wallet</Button>
      <Modal onClose={onClose} size={'sm'} isOpen={isOpen}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Connect Your Wallet</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            TODO:
            Wallet Connect Here...
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export default WalletConnectModal;

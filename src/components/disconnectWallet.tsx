import { Button, Tooltip } from '@chakra-ui/react';
import React from 'react'

interface DisconnectWalletButtonProps {
  onClickHandler: React.MouseEventHandler<HTMLButtonElement>,
}

const DisconnectWalletButton = ({onClickHandler}:DisconnectWalletButtonProps) => {

  return (
    <Tooltip label='Disconnect Wallet'>
      <Button width='100%' onClick={onClickHandler}>Disconnect Wallet</Button>
    </Tooltip>
  );
}

export default DisconnectWalletButton;
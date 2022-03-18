import React, { useEffect, useState } from 'react';
import { Popover, PopoverTrigger, Button, Portal, PopoverContent, PopoverArrow,
  PopoverHeader, PopoverCloseButton, PopoverBody, PopoverFooter, Text
} from '@chakra-ui/react';
import DisconnectWalletButton from './disconnectWallet';
import { getAccountInfo } from '../utils/getAccountInfo';
import { truncate } from '../utils/utilities';

interface IAccountInfoPopover {
  address: string;
  disconnect: () => void;
}

const AccountInfoPopover = ({ address, disconnect }: IAccountInfoPopover) => {
  const [accountInfo, setAccountInfo] = useState({});
  useEffect(() => {
    const getAcct = async () => {
      const resp = await getAccountInfo(address);
      setAccountInfo({ algo: resp.amount, degen: resp.assets.filter((a) => a['asset-id'] === 417708610)[0]?.amount || 0 })
    }
    getAcct();
  }, [address]);
  return (
    <Popover placement='bottom-end'>
      <PopoverTrigger>
        <Button>{address && truncate(address)}</Button>
      </PopoverTrigger>
      <Portal>
        <PopoverContent>
          <PopoverArrow />
          <PopoverHeader>Account Information</PopoverHeader>
          <PopoverCloseButton />
          <PopoverBody>
            <Text>Algos: {accountInfo.algo/1000000}</Text>
            <Text>Degen: {new Intl.NumberFormat('en-US').format(accountInfo.degen)}</Text>
          </PopoverBody>
          <PopoverFooter>
            <DisconnectWalletButton onClickHandler={disconnect} />
          </PopoverFooter>
        </PopoverContent>
      </Portal>
    </Popover>
  )
}

export default AccountInfoPopover;

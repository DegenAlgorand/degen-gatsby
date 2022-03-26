import React, { useEffect, useState } from 'react';
import { Popover, PopoverTrigger, Button, Portal, PopoverContent, PopoverArrow,
  PopoverHeader, PopoverCloseButton, PopoverBody, PopoverFooter, Text
} from '@chakra-ui/react';
import DisconnectWalletButton from './disconnectWallet';
import { getAccountInfo } from '../utils/algoIndexer';
import { truncate } from '../utils/utilities';

interface IAccountInfoPopover {
  address: string;
  disconnect: () => void;
}

interface AccountHoldings {
  algo: number;
  degen: number;
}

const AccountInfoPopover = ({ address, disconnect }: IAccountInfoPopover) => {
  const [accountInfo, setAccountInfo] = useState<AccountHoldings>({algo: 0, degen: 0});

  useEffect(() => {
    const getAcct = async () => {
      const account = await getAccountInfo(address);
      setAccountInfo(
        { 
          algo: account?.amount || 0,
          degen: account?.assets?.find((a) => a.assetId === 417708610)?.amount || 0,
        } as AccountHoldings
      );
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
            <Text>Algos: {accountInfo?.algo/1000000}</Text>
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

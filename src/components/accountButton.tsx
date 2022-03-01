import { Button } from '@chakra-ui/react';
import React from 'react';
import { truncate } from '../utils/utilities';

interface AccountButtonProps {
  address: string;
}
const AccountButton = ({address}: AccountButtonProps) => {
  return (
    <Button>{truncate(address)}</Button>
  );
}

export default AccountButton;

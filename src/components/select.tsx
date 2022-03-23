import React, { useEffect, useState } from "react";
import { Select } from '@chakra-ui/react'
import createPersistedState from 'use-persisted-state';

type Network = 'mainnet' | 'testnet' | 'devnet';

const useNetworkState = createPersistedState<Network>('network');

const NetworkSelect = () => {
  const [network, setNetwork] = useNetworkState('mainnet');

  const handleSetNetwork = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setNetwork(e.target.value as Network);
  }

  return (
    <Select onChange={(e) => handleSetNetwork(e)} value={network}>
      <option value='mainnet'>Mainnet</option>
      <option value='testnet'>Testnet</option>
      <option value='devnet'>Devnet</option>
    </Select>
  )
}
  
export default NetworkSelect;
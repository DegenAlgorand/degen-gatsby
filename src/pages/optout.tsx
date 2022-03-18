import { Center, Checkbox, Grid, GridItem, Tooltip } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import Layout from '../layout';
import { getAssetsForAccount } from '../utils/getAccountInfo';
import useWalletAccount from '../utils/persistAccount';

import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
} from '@chakra-ui/react'

const OpterOuter = () => {
  const [account, _] = useWalletAccount();
  
  const [data, setData] = useState();
  const [displayData, setDisplayData] = useState();
  useEffect(async () => {
    const assets = await getAssetsForAccount(account?.address);
    setData(assets);
    setDisplayData(assets);
  }, [account]);

  const [showingAll, setShowingAll] = useState<boolean>(true);
  const toggleShowAll = () => {
    setShowingAll(!showingAll);
  }

  useEffect(() => {
    if (showingAll) {
      setDisplayData(data);
    } else {
      setDisplayData(data.filter((item) => item.amount === 0));
    }
  }, [showingAll]);

  return (
    <Layout>
      <Checkbox checked={!showingAll} onChange={toggleShowAll}>Show only zero assets</Checkbox>
      <Center>
        <Table variant='simple'>
          <Thead>
            <Tr>
              <Th>Select</Th>
              <Th>Amount</Th>
              <Th>Name</Th>
            </Tr>
          </Thead>
          <Tbody>
            {displayData && displayData?.map((item) => (
              <Tr key={item.info.index}>
                <Td><Checkbox /></Td>
                <Td>{item.amount/Math.pow(10, item.info.params.decimals)}</Td>
                <Td>{item.info.params.name}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </Center>
    </Layout>

  )
}

export default OpterOuter;

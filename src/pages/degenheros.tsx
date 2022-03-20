import React, { useEffect, useState } from 'react';
import pLimit from 'p-limit';
import { Center, Wrap, WrapItem } from '@chakra-ui/react';
import Layout from '../layout';
import { getAccountInfo } from '../utils/algoIndexer';

const DegenHeros = () => {
  const limit = pLimit(10);
  const [degens, setDegens] = useState();

  useEffect(async () => {
    const acct = await getAccountInfo('HR5H3NGZ5MVOQ747E3KMUQBNFDG2VGA2IHEYWE6YLCAHR2DGF76ZVPX6MA');
    const requests = acct.createdAssets.map((dgn) => limit(() => dgn.params.url));
    const result = await Promise.all(requests);
    setDegens(result.map((d) => d.replace('ipfs://','https://ipfs.io/ipfs/')));
  }, []);
  
  return (
    <Layout>
      <Center pt={20}>
        <Wrap>
          {degens && degens.map((d) => <WrapItem><img src={d} height={120} width={120} /></WrapItem>)}
        </Wrap>
      </Center>
    </Layout>
  )
}

export default DegenHeros;

import { Center } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import Layout from '../layout';
import useWalletAccount from '../utils/persistAccount';
import * as IPFS from 'ipfs-core'
import { getAccountInfo, getAssetInfo } from '../utils/getAccountInfo';
import pLimit from 'p-limit';


const Gallery = () => {
  const limit = pLimit(10);

  const [account, _] = useWalletAccount();
  const [nfts, setNfts] = useState([]);

  const ipfs = async () => {
    const ipfs = await IPFS.create();
    const { cid } = await ipfs.add('Hello world');
    console.info(cid);
  }

  const getAssets = async (account: string) => {
    const resp = await getAccountInfo(account);
    console.log(resp);
    const nfts = resp.account.assets.filter((a) => a.amount === 1);
    const r = nfts.map((nft) => limit(async () => await getAssetInfo(nft['asset-id'])));
    const result = await Promise.all(r);
    setNfts(result.map((item) => item.asset.params));
  }

  useEffect(() => {
    if (account?.address) {
      getAssets(account?.address);
    }
  },[account]);

  return(
    <Layout>
      {!account && <Center pt={20}>Loading..</Center>}
      {account && (
        <Center pt={20}>
          {nfts && nfts.map((t) => <img width={120} height={120} src={t.url} />)}
        </Center>
      )}
    </Layout>
  )
}

export default Gallery;

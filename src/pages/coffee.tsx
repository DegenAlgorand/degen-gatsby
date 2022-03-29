import { Box, Center, Link, Wrap, Image, Text, Heading } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { Asset, CreatedAsset } from '../types';
import { getAccountInfo, getAssetInfo } from '../utils/algoIndexer';
import pLimit from 'p-limit'
import useWalletAccount from '../utils/persistAccount';
import Layout from '../layout';
import { beans as beansIDs } from '../data/beansIDs';
import InfiniteScroll from 'react-infinite-scroll-component';

interface GCard {
  id: number,
}
const BeansCard = ({ id }: GCard) => {
  const [asset, setAsset] = useState<Asset>();

  useEffect(async () => {
    setAsset(await getAssetInfo(id));
  }, [id]);

  if (asset) {
    return (
      <Center>
        <Box p="5" width={{ sm: '100%', md: 300 }} borderWidth="1px">
          <Link href={`https://www.nftexplorer.app/asset/${asset.index}`}>
          <Image borderRadius="md" src={asset?.params?.url?.replace('ipfs://', 'https://ipfs.io/ipfs/')} />
          <Text fontSize={'2xl'}>
            {asset?.params?.name}
          </Text>
          </Link>
        </Box>
      </Center>
    )
  } else {
    return (
      <Box key={id}>-</Box>
    )
  }
}

const Coffee = () => {
  const limit = pLimit(5);
  const [account, _ ] = useWalletAccount();

  const [beans, setBeans] = useState<number[]>([]);
  useEffect(async () => {
    const usersBeans = await (await getAccountInfo(account?.address))
    .assets?.filter((a) => beansIDs.includes(a.assetId))
    .filter((a) => a.amount > 0)
    .map((a) => a.assetId);
    setBeans(usersBeans);
  }, [account]);

  const [displayBeans, setDisplayBeans] = useState<number[]>();
  const [slice, setSlice] = useState(12);
  useEffect(() => {
    console.log(slice);
    setDisplayBeans(beans?.slice(0, slice));
  }, [beans, slice]);

  const fetchhMore = () => {
    setSlice(slice + 4);
  }

  const hasMore = () => {
    return displayBeans?.length < beans?.length;
  }

  return (
    <Layout>
      <Heading pt='10px'>Coffee Beans: {beans?.length}</Heading>
      <InfiniteScroll
        dataLength={displayBeans?.length || 0}
        next={fetchhMore}
        hasMore={hasMore()}
        loader={<h4>Loading...</h4>}
        style={{ overflow: 'hidden' }}
      >
          {beans && beans.length > 0 &&
            <Wrap pt='30px'>
              {displayBeans?.map((b) => <BeansCard key={b} id={b} />)}
            </Wrap>
          }
      </InfiniteScroll>
    </Layout>
  )
}

export default Coffee;

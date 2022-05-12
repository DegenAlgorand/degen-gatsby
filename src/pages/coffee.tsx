import { Box, Center, Link, Wrap, Image, Text, Heading } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { Asset, CreatedAsset } from '../types';
import { getAccountInfo, getAssetInfo } from '../utils/algoIndexer';
import pLimit from 'p-limit'
import useWalletAccount from '../utils/persistAccount';
import Layout from '../layout';
import { beans as beansIDs } from '../data/beansIDs';
import { beanrank } from '../data/beanrank';
import InfiniteScroll from 'react-infinite-scroll-component'; 

interface GCard {
  id: number,
}

interface BeanRank {
  rank: number,
  unit_name: string,
  score: number,
  properties: {
      Sky: string,
      Floor: string,
      Roast: string,
      Roast_Type: string,
      Power: string,
  }
}

const BeansCard = ({ id }: GCard) => {
  const [asset, setAsset] = useState<Asset>();

  useEffect(async () => {
    setAsset(await getAssetInfo(id));
  }, [id]);

  const [rankInfo, setRankInfo] = useState<BeanRank>();
  useEffect(() => {
    const rankinfo = beanrank.find((br: BeanRank) => br.unit_name === asset?.params?.unitName);
    setRankInfo(rankinfo);
  }, [asset]);

  if (asset) {
    return (
      <Center>
        <Box p="5" width={{ sm: '100%', md: 305 }} borderWidth="1px">
          <Link href={`https://www.nftexplorer.app/asset/${asset.index}`}>
            <Text fontSize={'xl'}>
              {asset?.params?.unitName}
            </Text>
          </Link>
          <Image borderRadius="md" src={asset?.params?.url?.replace('ipfs://', 'https://degen.mypinata.cloud/ipfs/')} />

          <Box fontSize={'small'} pt='10px'>
              Rank: {rankInfo?.rank} ({rankInfo?.score.toFixed(2)})<br/>
              Floor: {rankInfo?.properties.Floor}<br/>
              Power: {rankInfo?.properties.Power}<br/>
              Roast: {rankInfo?.properties.Roast}<br/>
              Roast Type: {rankInfo?.properties.Roast_Type}<br/>
              Sky: {rankInfo?.properties.Sky}
          </Box>
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
      {!account && 
        <Heading textAlign={'center'} pt='20px' verticalAlign={'center'}>Connect Wallet to See Beans</Heading>
      }
      {account && 
        <Heading pt='10px'>Coffee Beans: {beans?.length}</Heading>
      }
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

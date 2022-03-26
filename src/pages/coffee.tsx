import { Box, Center, Link, Wrap, Image, Text, Heading } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { Asset, CreatedAsset } from '../types';
import { getAccountInfo, getAssetInfo } from '../utils/algoIndexer';
import pLimit from 'p-limit'
import useWalletAccount from '../utils/persistAccount';
import Layout from '../layout';

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
        <Box p="5" maxW="306px" borderWidth="1px">
          <Link href={`https://www.nftexplorer.app/asset/${asset.index}`}>
          <Image borderRadius="md" src={asset?.params.url.replace('ipfs://', 'https://ipfs.io/ipfs/')} />
          <Text fontSize={'2xl'}>
            {asset.params.name}
          </Text>
          </Link>
        </Box>
      </Center>
    )
  } else {
    return (
      <Box key={id}>Empty</Box>
    )
  }
}

const Coffee = () => {
  const creators = ['RCXYYJH5N2QMJUR4RUM5QILPGPQA3MZDWNIRFWRNEKWJGK7ZLZPIS34RCM','7WOLVIYJYRO2TULBLRD3HCQHEUJDQX24DMMTRJOYUV3TWLX3CQ5D35RU74','XJROCQBI6XMZZ3ZVXLQPY6OZDVDR7DHHX64YK3QUTVFTGGBVC2PJBRWOTY','QDLC2CB4MKTO3JV2QCTIC2OQJKQ6LN4EEOZNMJDRZWZMTNV6PYINDENNY4','6NBEBSQN3F2CA5P5PYJGBPGBQAPTKD3SO5X4BQRJY5JWCQ26DGJBBC7GJA','XT36Z4E4XAEY4Y7MUK5V673L6KLDKARQ3KYPEOFUPVIMQ55GJP5O3SHGGM','WU2DODPNW73EMEUURIFDOC336P4VUAAOG2XFVGPBNFK37PF5FS5GXGOLR4','BUQRBBAK26JGE3I4TUOJPIAZVTDJ3K5R62PGIJHX5OWGG77BEKODWNLIXU','NGL5VOKOP7SNYWEE64WT67FAB2DYFKPIDIHMFTEDOBUL4IDSVTTM6SEGKQ','RD4URXKIGQU4RBORQ23AZ43E5SX4P7A6Z4A5VIEG7LBYPABLS2KTFAFZDI'];
  const limit = pLimit(5);
  const [account, _ ] = useWalletAccount();

  const [beans, setBeans] = useState();
  useEffect(async () => {
    const p = creators.map((c) => limit(() => getAccountInfo(c)));
    const a = await Promise.all(p);
    const ten_k = Array.prototype.concat.apply([], a.map((ass) => ass.createdAssets.map((p) => p.index)));

    const my = await (await getAccountInfo(account?.address)).assets?.filter((a) => a.amount > 0).map((a) => a.assetId);
    const coffeebeans = my?.filter((asset) => ten_k.includes(asset));
    setBeans(coffeebeans);
  }, [account]);

  return (
    <Layout>
        <Heading pt='10px'>Coffee Beans</Heading>
        <Box>
        {beans && beans.length > 0 &&
          <Wrap pt='30px'>
            {beans?.sort((a,b) => a-b).map((a) => <BeansCard id={a} />)}
          </Wrap>
        }
        </Box>
    </Layout>
  )
}

export default Coffee;

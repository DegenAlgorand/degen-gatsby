import { Badge, Box, Center, Flex, Input, Wrap, WrapItem, Text, Image, Link,  } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import Layout from '../layout';
import { Asset } from '../types';
import { getAccountInfo, getAssetInfo } from '../utils/algoIndexer';
import { MdStar } from "react-icons/md";


interface GCard {
  id: number,
}
const GraffeCard = ({ id }: GCard) => {
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

const Graffe = () => {
  const [youngGs, setYoungGs] = useState<number[]>();
  const [oldGs, setOldGs] = useState<number[]>();
  const handleAddress = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const address = e.target.value;
    if (address === (undefined || '')) return;
    const resp = await (await getAccountInfo(address)).assets?.filter((a) => a.amount > 0).map((a) => a.assetId);

    const young = await (await getAccountInfo('F4JZAICLVUVTBNTVEKYT4S4ABLU7XFYCHIFUDN6HQM26KOF5IMIMKVCE3I')).createdAssets?.map((a) => a.index);
    const oldgs = await (await getAccountInfo('OEXQNTAJFHLBJYUJ4VBZLKJW6QPGRPMMX2DNCZIFCQCPCNVORTBE53UUEA'))
      .createdAssets?.filter((a) => a.index !== 405246809 && a.index !== 447063297)
      .map((a) => a.index);

    const o_Ys = resp?.filter((asset) => young.includes(asset));
    const o_Os = resp?.filter((asset) => oldgs.includes(asset));
    setYoungGs(o_Ys);
    setOldGs(o_Os);
  }

  return (
    <Layout>
      <Input title='Account' placeholder='Account' onChange={(e) => handleAddress(e)} />
        <Box>
          {youngGs && youngGs.length > 0 &&
          <Wrap pt='10px'>
            {youngGs?.sort((a,b) => a-b).map((a) => <GraffeCard id={a} />)}
          </Wrap>
        }
        {oldGs && oldGs.length > 0 &&
          <Wrap pt='30px'>
            {oldGs?.sort((a,b) => a-b).map((a) => <GraffeCard id={a} />)}
          </Wrap>
        }
        </Box>
    </Layout>
  )
}

export default Graffe;

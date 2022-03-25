import { Box, Input } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import Layout from '../layout';
import { Asset } from '../types';
import { getAccountInfo, getAssetInfo } from '../utils/algoIndexer';

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
      <Box key={id}>
        {asset?.index}
        {asset?.params.name}
        <a href={`https://www.nftexplorer.app/asset/${asset.index}`}>
          <img width={200} src={asset?.params.url.replace('ipfs://', 'https://ipfs.io/ipfs/')} />
        </a>
      </Box>
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
      {youngGs &&
        <Box>
          Young G's
          {youngGs?.sort((a,b) => a-b).map((a) => <GraffeCard id={a} />)}
        </Box>
      }
      {oldGs &&
        <Box>
          Graffe's
          {oldGs?.sort((a,b) => a-b).map((a) => <GraffeCard id={a} />)}
        </Box>
      }
    </Layout>
  )
}

export default Graffe;

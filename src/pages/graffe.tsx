import { Box, Input } from '@chakra-ui/react';
import React, { useState } from 'react';
import Layout from '../layout';
import { getAccountInfo } from '../utils/algoIndexer';

const Graffe = () => {
  const [youngGs, setYoungGs] = useState<number[]>();
  const [oldGs, setOldGs] = useState<number[]>();
  const handleAddress = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const address = e.target.value;
    if (address === (undefined || '')) return;
    const resp = await (await getAccountInfo(address)).assets?.map((a) => a.assetId);

    const young = await (await getAccountInfo('F4JZAICLVUVTBNTVEKYT4S4ABLU7XFYCHIFUDN6HQM26KOF5IMIMKVCE3I')).createdAssets?.map((a) => a.index);
    const oldgs = await (await getAccountInfo('OEXQNTAJFHLBJYUJ4VBZLKJW6QPGRPMMX2DNCZIFCQCPCNVORTBE53UUEA')).createdAssets?.map((a) => a.index);

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
          {youngGs?.sort((a,b) => a-b).map((a) => <Box key={a}>{a}</Box>)}
        </Box>
      }
      {oldGs &&
        <Box>
          Graffe's
          {oldGs?.sort((a,b) => a-b).map((a) => <Box key={a}>{a}</Box>)}
        </Box>
      }
    </Layout>
  )
}

export default Graffe;

import { Box, Button, Input } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import Layout from '../layout';
import {loadStdlib} from '@reach-sh/stdlib';
import * as backend from '../contracts/build/degen-swap.main.mjs';
import { ALGO_WalletConnect as WalletConnect} from '@reach-sh/stdlib';
import { ALGO_MyAlgoConnect as MyAlgoConnect } from '@reach-sh/stdlib';
import useWalletAccount from '../utils/persistAccount';

const DegenSwap = () => {
      const stdlib = loadStdlib('ALGO');

  const [account, _ ] = useWalletAccount();
  useEffect(() => {
    console.log(account);
  }, [account]);

  const [sellerAccount, setSellerAccount] = useState();
  useEffect(async () => {
    const stdlib = loadStdlib('ALGO');
    if (account && account?.address) {
      if (account?.provider === 'MyAlgo') {
        stdlib.setWalletFallback(stdlib.walletFallback({
          providerEnv: 'TestNet', MyAlgoConnect }));
      } else {
        stdlib.setWalletFallback(stdlib.walletFallback({
          providerEnv: 'TestNet', WalletConnect }));
      }
      const acct = await stdlib.connectAccount({ addr: account?.address });
      setSellerAccount(acct);
    }
  }, [account]);

  const [nftId, setnftId] = useState();
  const launchContract = async () => {
    try {
      const a = await sellerAccount.contract(backend).p.Seller({
        getSwap: () => {
          return [nftId, 89054166, 100, 1_000_000];
        },
        cancel: await cancelContract(),
      });
    } catch (err) {
      console.log(err);
    }
  }

  const updateNftId = (e) => {
    setnftId(e.target.value);
  }

  const [appId, setAppId] = useState(0);
  const updateApp = (e) => {
    console.log(e.target.value);
    setAppId(e.target.value);
  }

  const connectToApp = async () => {
    const acct2 = await stdlib.connectAccount({ addr: account?.address });

    const c = await acct2.contract(backend, appId);
    const connect = await acct2.contract(backend, c.getInfo()).p.Buyer({
      accSwap: async (t1, t2, p) => { 
        // returns info
        console.log(t1,t2,p);
        // nothing happens
        return true;
      },
    });
    console.log(connect);
  }

  const cancelContract = async () => {
    
  }

  return (
    <Layout>
      <Box>


        <Input onChange={updateNftId} placeholder='Asset Id' />

        <Input onChange={(e) => updateApp(e)} placeholder='App ID'/>
        <Button onClick={launchContract}>Launch Contract</Button>
        <Button onClick={cancelContract}>Cancel</Button>
        <Button onClick={connectToApp}>Connect</Button>
      </Box>
    </Layout>
  )
}

export default DegenSwap;

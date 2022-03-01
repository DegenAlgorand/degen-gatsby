import React from 'react';
import useWalletAccount from '../utils/persistAccount';
import AccountButton from './accountButton';
import DisconnectWalletButton from './disconnectWallet';
import WalletConnectModal from './walletConnectModal';

const WalletConnect = () => {
  const [account, setAccount] = useWalletAccount();
  if (!account) {
    return <WalletConnectModal />
  }
  return (
    <>
      <AccountButton address={account.address!}/>
      <DisconnectWalletButton />
    </>
  )
}

export default WalletConnect;

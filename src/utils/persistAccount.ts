import createPersistedState from 'use-persisted-state';

interface WalletAccount {
    connected: boolean,
    address: string;
    provider: string;
}

const useWalletAccount = createPersistedState<WalletAccount>('walletAccount');

export default useWalletAccount;

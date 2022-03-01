import createPersistedState from 'use-persisted-state';

interface WalletAccount {
    address: string | null;
    provider: string | null;
}

const useWalletAccount = createPersistedState<WalletAccount>('walletAccount');

export default useWalletAccount;

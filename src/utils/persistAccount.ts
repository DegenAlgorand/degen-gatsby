import createPersistedState from 'use-persisted-state';

interface WalletAccount {
    address?: string;
    provider?: string;
}

const useWalletAccount = createPersistedState<WalletAccount>('walletAccount');

export default useWalletAccount;

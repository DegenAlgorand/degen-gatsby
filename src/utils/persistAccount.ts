import createPersistedState from 'use-persisted-state';

interface WalletAccount {
    account: { address: string, name: string };
    provider: string;
}
const useWalletAccount = createPersistedState('walletAccount');

export default useWalletAccount;

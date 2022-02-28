import React from 'react';
import MyAlgoConnect from '@randlabs/myalgo-connect';
import { Button } from '@chakra-ui/react';
import useWalletAccount from '../utils/persistAccount'; 

const MyAlgoConnectButton = () => {
    const [account, setAccount] = useWalletAccount();
    const handleMyAlgoConnect = async () => {
        const myAlgoConnect = new MyAlgoConnect();
        try {
            const accountsSharedByUser = await myAlgoConnect.connect();
            setAccount({address: accountsSharedByUser[0], provider: 'MyAlgo'});
        } catch(err) {
            console.log(err);
        }
    }
    return (
        <Button w={'100%'} marginBottom={'10px'} onClick={handleMyAlgoConnect}>Connect MyAlgo</Button>
    )
}
 
export default MyAlgoConnectButton;

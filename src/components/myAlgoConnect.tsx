import React from 'react';
import MyAlgoConnect from '@randlabs/myalgo-connect';
import { Button } from '@chakra-ui/react';

const MyAlgoConnectButton = () => {
    const handleMyAlgoConnect = async () => {
        const myAlgoConnect = new MyAlgoConnect();
        try {
            const accountsSharedByUser = await myAlgoConnect.connect();
        } catch(err) {
            console.log(err);
        }
    }
    return (
        <Button onClick={handleMyAlgoConnect}>Connect MyAlgo</Button>
    )
}
 
export default MyAlgoConnectButton;

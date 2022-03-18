import algosdk, { Account, Indexer, modelsv2 } from "algosdk";

const server = 'https://algoindexer.algoexplorerapi.io';
const indexer = new algosdk.Indexer('', server, '');

const getAccountInfo = async (address: string): Promise<modelsv2.Account> => {
    let resp = await indexer.lookupAccountByID(address).do();
    return resp.account as modelsv2.Account;
}

const getAssetsForAccount = async (address: string) => {
    console.log(address);
    try {
        let accountResp = await getAccountInfo(address);
        let assetPromise = accountResp.assets.map(async (asset) => await indexer.lookupAssetByID(asset['asset-id']).includeAll(true).do());
        let assets = await Promise.all(assetPromise);
        const zip = accountResp.assets.map((asset) => {
            const item = assets.find((a) => a.asset.index === asset['asset-id']);
            return { amount: asset.amount, info: item.asset };
        });
        console.log(zip);
        return zip;
    } catch (err: Error) {
        return err;
    }
    
}

export { getAccountInfo, getAssetsForAccount };

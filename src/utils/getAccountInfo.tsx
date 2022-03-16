import algosdk from "algosdk";

const server = 'https://algoindexer.algoexplorerapi.io';
const indexer = new algosdk.Indexer('', server, '');

export const getAccountInfo = async (address: string) => {
    let resp = {};
    if (address) {
        resp = await indexer.lookupAccountByID(address).do();
    }
    return resp;
}

export const getAssetInfo = async (assetId: number) => {
    let resp = {};
    if (assetId) {
        resp = await indexer.lookupAssetByID(assetId).do();
    }
    return resp;
}

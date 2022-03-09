import algosdk from "algosdk";

const server = 'https://algoindexer.algoexplorerapi.io';
const indexer = new algosdk.Indexer('', server, '');

const getAccountInfo = async (address: string) => {
    let resp = {};
    if (address) {
        resp = await indexer.lookupAccountByID(address).do();
    }
    return resp;
}

export default getAccountInfo;

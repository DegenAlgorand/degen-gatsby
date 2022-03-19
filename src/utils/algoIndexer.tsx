import algosdk from "algosdk";
import { Account, Asset } from "../types";
const camelcaseKeys = require('camelcase-keys');

const server = 'https://algoindexer.algoexplorerapi.io';
const indexer = new algosdk.Indexer('', server, '');

const getAccountInfo = async (address: string): Promise<Account> => {
  try {
    const resp = await indexer.lookupAccountByID(address).do();
    const account = convert(resp.account) as Account;
    return account;
  } catch (err: any) {
    console.log(err);
    return err;
  } 
}

const getAssetInfo = async (assetId: number, includeAll = false): Promise<Asset> => {
  try {
    const resp = await indexer.lookupAssetByID(assetId).includeAll(includeAll).do();
    const asset = convert(resp.asset) as Asset;
    return asset;
  } catch (err: any) {
    console.log(err);
    return err;
  }
}

const convert = (input: any) => camelcaseKeys(input, { deep: true} );

export { getAccountInfo, getAssetInfo };

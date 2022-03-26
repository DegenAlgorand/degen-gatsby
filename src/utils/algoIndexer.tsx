import algosdk from "algosdk";
import { Account, Asset } from "../types";
const camelcaseKeys = require('camelcase-keys');

const server = 'https://mainnet-api.algonode.cloud';
const indexer = new algosdk.Indexer('', server, '');

const getAccountInfo = async (address: string): Promise<Account> => {
  try {
    const accountResp = await indexer.lookupAccountByID(address).do();
    const account = convert(accountResp) as Account;
    return account;
  } catch (err: any) {
    console.log(err);
    return err;
  } 
}

const getAssetInfo = async (assetId: number, includeAll = false): Promise<Asset> => {
  try {
    const assetResp = await indexer.lookupAssetByID(assetId).includeAll(includeAll).do();
    const asset = convert(assetResp) as Asset;
    return asset;
  } catch (err: any) {
    console.log(err);
    return err;
  }
}

const convert = (input: any) => camelcaseKeys(input, { deep: true} );

export { getAccountInfo, getAssetInfo };

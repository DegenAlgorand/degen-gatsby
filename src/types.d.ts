export interface Account {
    address: string;
    amount: number;
    assets: {
        amount: number,
        assetId: number
        creator: string,
        deleted: boolean,
        isFrozen: boolean,
        optedInAtRound: number,
    }[],
    createdAssets: CreatedAsset[],
    createdAtRound: number,
    deleted: boolean,
    pendingRewards: number,
    rewardBase: number,
    rewards: number,
    round: number,
    sigType: SigType,
    status: string,
}

interface SigType {
    sig: "sig"|"msig",
}

export interface CreatedAsset {
    createdAtRound: number,
    deleted: false,
    index: number,
    params: {
        creator: string,
        decimals: number,
        defaultFrozen: boolean,
        manager: string,
        name: string,
        nameB64: string,
        reserve: string,
        total: number,
        unitName: string,
        unitNameB64: string,
        url: string,
        urlB64: string
    }
}

export type Asset = CreatedAsset & {
    params: {
        clawback: string,
        freeze: string,
    }
}
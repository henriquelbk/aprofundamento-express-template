export enum ACCOUNT_TYPE {
    BRONZE = "Bronze",
    SILVER = "Prata",
    GOLD = "Ouro",
    PLATINUM = "Platina",
    BLACK = "Black"
}

export enum STRONG_FOOT {
    LEFT = "Left",
    RIGHT = "Right",
}

export type TAccount = {
    id: string,
    ownerName: string,
    balance: number,
    type: ACCOUNT_TYPE
}

export type TCoringas = {
    id: string,
    name: string,
    goals: number,
    strongFoot: STRONG_FOOT
}
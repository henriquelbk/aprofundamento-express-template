import { ACCOUNT_TYPE, TAccount } from "./types";
import { STRONG_FOOT, TCoringas } from "./types";

export const accounts: TAccount[] = [
    {
        id: "a001",
        ownerName: "Ciclano",
        balance: 10000,
        type: ACCOUNT_TYPE.GOLD
    },
    {
        id: "a002",
        ownerName: "Astrodev",
        balance: 500000,
        type: ACCOUNT_TYPE.BLACK
    },
    {
        id: "a003",
        ownerName: "Fulana",
        balance: 20000,
        type: ACCOUNT_TYPE.PLATINUM
    }
]

export const coringas: TCoringas[] = [
    {
        id: "a001",
        name: "Gabigol",
        goals: 135,
        strongFoot: STRONG_FOOT.LEFT
    },
    {
        id: "a002",
        name: "Bruno Henrique",
        goals: 93,
        strongFoot: STRONG_FOOT.RIGHT
    },
    {
        id: "a003",
        name: "Arrascaeta",
        goals: 55,
        strongFoot: STRONG_FOOT.RIGHT
    }
]
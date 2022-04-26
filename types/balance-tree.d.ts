/// <reference types="node" />
import { BigNumber } from "ethers";
import { Balance } from "./types/balance";
export default class BalanceTree {
    private readonly tree;
    constructor(balances: Balance[]);
    static verifyProof(account: string, amount: BigNumber, proof: Buffer[], root: Buffer): boolean;
    static toNode(account: string, amount: BigNumber): Buffer;
    getHexRoot(): string;
    getProof(account: string, amount: BigNumber): string[];
}
//# sourceMappingURL=balance-tree.d.ts.map
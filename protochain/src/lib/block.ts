import sha256 from "crypto-js/sha256.js";

export default class Block {
    index: number = 1;
    timestamp: number = Date.now();
    hash: string = "";
    previousHash: string = "";
    data : string = "" ;


/**
 * 
 * @param index The block index in blockchain
 * @param timestamp The timestamp data in blockchain
 * @param hash The block hash
 * @param previousHash The previous block hash
 * @param data The block data
 */

    constructor(index: number, timestamp: number, hash: string, previousHash: string, data: string) {
        this.index = index;
        this.timestamp = timestamp;
        this.previousHash = previousHash;
        this.data = data;
        this.hash = this.getHash();
    
    }

    getHash(): string {
        return sha256(this.index + this.data + this.timestamp + this.previousHash).toString();
    }




    isValid(): boolean {
        if (this.index < 0) return false;    
        if (!this.hash) return false;
        return true;
        
    }
}

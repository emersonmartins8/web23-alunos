import Block from './block';

/**
 * A simple implementation of a blockchain in TypeScript. This class manages a chain of blocks, allowing you to add new blocks and validate the integrity of the chain. Each block contains an index, timestamp, hash, previous hash, and data. The blockchain starts with a genesis block, and new blocks are added by referencing the hash of the latest block in the chain.
 */

export default class Blockchain {
    blocks: Block[];
    
    constructor() {
        this.blocks = [new Block(0,"","Genesis Block", "", "")];
    }
}
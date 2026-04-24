import {describe,test,expect} from '@jest/globals';
import Block from '../src/lib/block';


describe('Block tests', () => {
   
   test ('should create a block with correct properties', () => {
    const block = new Block(1, Date.now(), "hash123", "prevHash123", "Some data");
    const valid = block.isValid();
    expect(valid).toBeTruthy();
   });


   test ('should NOT be valid (timestamp )', () => {
    const block = new Block(1, Date.now(), "hash123", "prevHash123", "Some data");
    const valid = block.isValid();
    block.timestamp = -1;
    expect(valid).toBeFalsy();
   });

   test ('should NOT be valid (hash)', () => {
    const block = new Block(1, Date.now(), "hash123", "prevHash123", "Some data");
    const valid = block.isValid();
    expect(valid).toBeFalsy();
   });

    test ('should NOT be valid (data)', () => {
    const block = new Block(1, Date.now(), "hash123", "prevHash123", " ");
    const valid = block.isValid();
    expect(valid).toBeFalsy();
   });

   test ('should NOT be valid (index)', () => {
    const block = new Block(-1, Date.now(), "hash123", "prevHash123", "Some data");
    const valid = block.isValid();
    expect(valid).toBeFalsy();
   });

});
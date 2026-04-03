import Block from './block';

const block1 = new Block();
block1.hash = "abc123";
block1.index = 2;

block1.isValid();

console.log(block1.isValid());

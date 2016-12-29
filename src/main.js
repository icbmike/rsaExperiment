import * as enc from './encrypt.js';
import {gcd} from './gcd.js';

const keys = enc.generateKeys();
const message = "My message yo!";

console.log(message);
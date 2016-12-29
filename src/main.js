import {generateKeys, encrypt, decrypt} from './encrypt.js';
import {gcd} from './gcd.js';

const keys = generateKeys();
console.log(keys);

const message = "A message yo!";

console.log(message);
const encryptedMessage = encrypt(keys.publicKey, message);
console.log(encryptedMessage);
console.log(decrypt(keys.privateKey, encryptedMessage));
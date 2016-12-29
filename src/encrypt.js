import  {eed} from './gcd.js';
import _ from 'lodash';
import bigInt from 'big-integer';

function totient(p, q){
    return (p - 1) * (q - 1);
}

function findCoprime(n){
    return n - 1;
}

export function generateKeys(){
    const p = 61, q = 53;

    const n = p * q;

    const t = totient(p, q);

    const e = 17

    const d =  eed(e, t);

    return {
        publicKey: {
            n, e
        },
        privateKey: {
            d, n
        }
    }
}

export function encrypt(publicKey, message){
    return _.map(message, charString => {
        const charcode = charString.charCodeAt(0);
        return bigInt(charcode).pow(publicKey.e).mod(publicKey.n);
    }).join('+');
}

export function decrypt(privateKey, encryptedMessage){
     return _.map(encryptedMessage.split('+'), charString => {
        const charcode = bigInt(charString).pow(privateKey.d).mod(privateKey.n).toJSNumber();
        return String.fromCharCode(charcode);
    }).join('');
}
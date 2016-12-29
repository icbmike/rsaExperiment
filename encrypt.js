import  gcd from './gcd.js'

function totient(q, p){
    return (p - 1) * (q - 1);
}

function findCoprime(n){
    return n - 1;
}

export function generateKeys(){
    const p = 5, q = 11;

    const n = p * q;

    const t = totient(p, q);

    const e = findCoprime(t);

    const d = find
}

export function encrypt(){

}

export function decrypt(){
    
}
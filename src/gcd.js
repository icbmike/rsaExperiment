import _ from 'lodash';

function findRemainder(a, b){
    let i = 1;

    while ((i + 1) * b < a){
        i++;
    }
    return {r: a % (i * b), q : i};
}

export function gcd(a, b){
    const {r, q} = findRemainder(a, b);
   
    const iteration = {
        a,
        b,
        r,
        q
    }
    const result = [iteration];

    if(r === 0){
        return result;
    } else {
        console.log(`${iteration.a} = ${iteration.q}(${iteration.b}) + ${iteration.r}`);
        return result.concat(gcd(b, r));
    }
}

export function modularInverse(e, totient){
    const gcdSeries = gcd(totient, e);

    if(gcdSeries !== 1){
        return undefined;
    } else {
        
    }
}
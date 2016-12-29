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
        return result.concat(gcd(b, r));
    }
}

function calculateNextEEDIteration(currentGCDIteration, currentEEDIteration){
    if(currentEEDIteration === undefined){
        return {
            a: 1,
            x: currentGCDIteration.a,
            b: -currentGCDIteration.q,
            y: currentGCDIteration.b
        }
    }else if(currentEEDIteration.y === currentGCDIteration.r){
        return  {
            a: currentEEDIteration.a - currentGCDIteration.q * currentEEDIteration.b,
            x: currentEEDIteration.x,
            b: currentEEDIteration.b,
            y: currentGCDIteration.a
        };
    }else if(currentEEDIteration.x === currentGCDIteration.r){
        return  {
            a: currentEEDIteration.a,
            x: currentGCDIteration.a,
            b: currentEEDIteration.b - currentEEDIteration.a * currentGCDIteration.q,
            y: currentEEDIteration.y
        };
    }
}

function substituteRemainders(gcdIterations, currentIteration, terminalB, terminalA){
    const currentGCDIteration = _.head(gcdIterations);

    const nextIteration = calculateNextEEDIteration(currentGCDIteration, currentIteration);
    const {a, b, x, y } = nextIteration;

    if((nextIteration.x === terminalA && nextIteration.y === terminalB) ||
    (nextIteration.x === terminalB && nextIteration.y === terminalA)){
        return nextIteration;
    }

    return substituteRemainders(_.tail(gcdIterations), nextIteration, terminalB, terminalA);
}

export function eed(e, t){
    const gcdSeries = gcd(t, e);
    
    const gcdIterations = _.tail(_.tail(_.reverse(gcdSeries))); //This line is fishy - investigate
    
    const finalIteration = substituteRemainders(gcdIterations, undefined, t, e);

    if(finalIteration.b < 0){
        return t + finalIteration.b
    }

    return finalIteration.b;
}

export function findRemainder(a, b){
    let i = 2;
    while (i * b < a){
        i++;
    }

    return a % (i * b);
}

console.log(findRemainder(1071, 462));


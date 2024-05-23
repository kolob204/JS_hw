'use strict'

const concatVariables = (n) => {    
    return n+ +(String(n)+String(n))+ +(String(n)+String(n)+String(n));
}

console.log(concatVariables(5));
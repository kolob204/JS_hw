'use strict'

const concatVariables = (n) => {
  //return n+ +`${String(n).repeat(2)}` + +`${String(n).repeat(3)}`;
  return +(n)+ +`${n.repeat(2)}` + +`${n.repeat(3)}`;
}

//console.log(concatVariables(5));
console.log(concatVariables("5"));
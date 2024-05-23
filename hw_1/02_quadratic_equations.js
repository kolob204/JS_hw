'use strict'

const quadraticEquation = (a, b, c) => {
    if(a == 0)
        return false;
    const res = {};
    const D = b * b - 4 * a * c;
    res.roots = [];
    
    if(D < 0)
        return false; 
    if(D == 0)
        res.roots = (-b + Math.sqrt(D)) / (2 * a);
    else if(D > 0){ 
        res.roots.push((-b + Math.sqrt(D)) / (2 * a));
        res.roots.push((-b - Math.sqrt(D)) / (2 * a)); 
    }
    return res;
}


console.log("Ответ к уравнению 1: " +quadraticEquation(1,-6,9)["roots"] + ", Ответ к уравнению 2: " +quadraticEquation(1,-4,-5)["roots"]);
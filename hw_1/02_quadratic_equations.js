'use strict'

const quadraticEquation = (a, b, c) => {
    if(a == 0)
        return false;
    let res = {};
    const D = b * b - 4 * a * c;
   
    if(D < 0)
        return false;
    res['discriminant'] = D;
    if(D == 0)
        res["roots"] = (-b + Math.sqrt(D)) / (2 * a);
    else if(D > 0){
        let roots = [];
        roots.push((-b + Math.sqrt(D)) / (2 * a));
        roots.push((-b - Math.sqrt(D)) / (2 * a));
        res["roots"] = roots;
    }
    return res;
}


console.log("Ответ к уравнению 1: " +quadraticEquation(1,-6,9)["roots"] + ", Ответ к уравнению 2: " +quadraticEquation(1,-4,-5)["roots"]);
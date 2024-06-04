//=============================================
// Рекурсия
//=============================================
console.log('==============  Рекурсия  ===================')


function recurs(digit) { 
    let summ = String(digit).split('').reduce((a,b) =>  +(a)+ +(b),0); 
    if (summ>9) recurs(summ);
        return summ;
}


console.log(recurs(555555))


//=============================================
// Двойные буквы
//=============================================
console.log('==============  Двойные буквы  ===================')


function haveDublicates(inputString,regex) {
    const haveDublicates = inputString.matchAll(regex) ;
    const arr = Array.from(haveDublicates);
    return Boolean(arr.length);
}

function distinctLetters(inputString) { 

    while(haveDublicates(inputString,/(.)\1+/g)) {
        console.debug(inputString)
        inputString = inputString.replaceAll(/(.)\1+/g, (match, p1) => String.fromCharCode(p1.charCodeAt(0)+1))        
    } 

    return inputString;
}


const withRepeat = "aa sddeffag ffsdhhgkjrrew";
//const withoutRepeat = "a sdefag fsdh";

console.log(distinctLetters(withRepeat))
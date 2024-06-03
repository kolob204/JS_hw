
const convertBytes = (bytes, to) => {

    switch (to) {
        case "Kb":
            console.log((bytes / 1024).toFixed(1) + " Kb")
            break;
        case "Mb":
            console.log((bytes / 1048576).toFixed(1) + " Mb")
            break;
        case "Gb":
            console.log((bytes / 1073741824).toFixed(1) + " Gb")
            break;
        default:
            console.log("Unknow format")
            break;
    }

}

convertBytes(16565846123, "Gb")

//===============================================

const makeTriangle = (hOfTriangle) => {

    for (i = hOfTriangle; i >= 1; i--) {
        console.log(" ".repeat(i - 1) + "*".repeat(hOfTriangle - i + (hOfTriangle - i + 1)));
    }

}

makeTriangle(15);
//===============================================

const makeRomb = (hOfRomb) => {

    for (i = hOfRomb; i >= 1; i--) {
        console.log(" ".repeat(i - 1) + "*".repeat(hOfRomb - i + (hOfRomb - i + 1)));
    }

    for (i = 1; i < hOfRomb; i++) {
        console.log(" ".repeat(i) + "*".repeat(hOfRomb - i + (hOfRomb - i - 1)));
    }
 
}

makeRomb(5);
//===============================================

for(i=1; i<=100; i++) {
    console.log(i);

    if (!(i % 3)) {
        console.log(i % 5 ? `Число ${i} делится на 3` : `Число ${i} делится на 3 и на 5`);
    } else if (!(i % 5)) {
        console.log(`Число ${i} делится на 5`)
    }

}

//===============================================


const makeCamelCase = (inputString) => {
    
    console.log(inputString[0].toLowerCase() + inputString.slice(1,inputString.lenght).replaceAll(/ (\W)/g, (match, p1) => p1.toUpperCase()))
}

makeCamelCase('Я у мамы инженер')


//===============================================



//«а»   «у»  «о»  «и»  й    «э»  «ю» «я»   ы     «е»  «ё»
//1072 1091 1086 1080 1081 1101 1102 1102 1099  1077  1105
//[а,у,о,и,й,э,ю,я,ы,е,ё]

const vowels = "ауоийэюяыеёaeiou";

const letterParser = (inputString) => {
    let countOfGlass = 0;
    inputString.toLowerCase().split('').forEach(e => {
        vowels.split('').includes(e) ? countOfGlass++ : ""
    });
    console.log(`world contains ${countOfGlass} vowels and ${inputString.length - countOfGlass} consonants`)
}


letterParser("фЫварл")

//=====================================
const offset = -1;

const enSmallLetters = { lower: 97, upper: 122 };
const enBigLetters = { lower: 65, upper: 90 };

const ruSmallLetters = { lower: 1072, upper: 1103 };
const ruBigLetters = { lower: 1040, upper: 1071 };


function isInRange(x, range) {
    return x >= range.lower && x <= range.upper;
}

const getOffsetedCharFromRangeForEncode = (char, range) => {
    const range_size = range.upper - range.lower + 1;
    return String.fromCharCode(range.lower + ((char - range.lower + offset) % range_size + range_size) % range_size);
}

const getOffsetedCharFromRangeForDecode = (char, range) => {
    const range_size = range.upper - range.lower + 1;
    return String.fromCharCode(range.lower + ((char - range.lower - offset) % range_size + range_size) % range_size);
}

const encode = (inputString) => {
    let result = "";
    for (let i = 0; i <= inputString.length - 1; i++) {
        code = inputString.charCodeAt(i);
        switch (true) {
            case (isInRange(code, ruBigLetters)): {
                result += getOffsetedCharFromRangeForEncode(inputString.charCodeAt(i), ruBigLetters);
                break;
            }
            case (isInRange(code, ruSmallLetters)): {
                result += getOffsetedCharFromRangeForEncode(inputString.charCodeAt(i), ruSmallLetters);
                break;
            }
            case (isInRange(code, enBigLetters)): {
                result += getOffsetedCharFromRangeForEncode(inputString.charCodeAt(i), enBigLetters);
                break;
            }
            case (isInRange(code, enSmallLetters)): {
                result += getOffsetedCharFromRangeForEncode(inputString.charCodeAt(i), enSmallLetters);
                break;
            }
            default: result += inputString[i];
        }
    }
    console.log(`Передаём закодированное сообщение : ${result}`);
    return result;
}

const decode = (inputString) => {
    let result = "";
    for (let i = 0; i <= inputString.length - 1; i++) {
        code = inputString.charCodeAt(i);
        switch (true) {
            case (isInRange(code, ruBigLetters)): {
                result += getOffsetedCharFromRangeForDecode(inputString.charCodeAt(i), ruBigLetters);
                break;
            }
            case (isInRange(code, ruSmallLetters)): {
                result += getOffsetedCharFromRangeForDecode(inputString.charCodeAt(i), ruSmallLetters);
                break;
            }
            case (isInRange(code, enBigLetters)): {
                result += getOffsetedCharFromRangeForDecode(inputString.charCodeAt(i), enBigLetters);
                break;
            }
            case (isInRange(code, enSmallLetters)): {
                result += getOffsetedCharFromRangeForDecode(inputString.charCodeAt(i), enSmallLetters);
                break;
            }
            default: {
                result += inputString[i];
                break;
            }
        }
    }
    console.log(`Декодируем сообщение : ${inputString}. Результат расшифровки: ${result}`);
}

decode(encode('мама мыла раму'));

console.log()

decode(encode('AbC'));

console.log()

decode(encode('ZzZ'));

//=====================================
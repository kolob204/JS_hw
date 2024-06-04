//=============================================
// Сравнение пицц с конкурентами
//=============================================
console.log('============= Сравнение пицц с конкурентами ====================')


function pizzaValidator(ourDeliciousPizza) {
    const result = [];
    const theirTastelessPizza = ['Peperoni', 'Caprichosa', 'Diablo', '4 chesee', 'hawai']
    ourDeliciousPizza.forEach(pizza => { if (!theirTastelessPizza.includes(pizza)) result.push(pizza) });
    if (result.length == 0) return null
    else return result;
}

//Debug
//const ourPizza  = ['Peperoni','Caprichosa','Diablo','4 chesee','hawai']
//const ourPizza  = ['Peperoni','Caprichosa','Diablo','4 chesee','hawai',"homemade Delicious"]
//const ourPizza  = ['Peperoni','Caprichosa']
//const ourPizza  = ['Diablo','Diablo','Diablo','Diablo','Diablo']
const ourPizza = ['Peperoni', 'Caprichosa', 'Diablo', '4 chesee', 'hawai']

console.log(pizzaValidator(ourPizza))
 
//=============================================
// Найти всамые длинные слова
//=============================================
console.log('============= Найти всамые длинные слова ====================')


function parseSentence(sentence) {
 
    const worlds = sentence.matchAll(/([А-Я,а-я,ё]+)/g) ;  //object
    
    const arr = Array.from(worlds); 
    const maxLength =  Math.max(...arr.map(el => el[0].length));

    arr.forEach(el => {
        if(el[0].length==maxLength) console.log(el[0])
    }); 
}

parseSentence('на дворе дрова на дровах братва вся братва в жёлтые дрова')
 
//=============================================
// Фильтрация массива чисел на уникальные значения
//=============================================
console.log('================ Фильтрация массива чисел на уникальные значения =================')

function distinctArray(inputArray) {
 
    const result = [...new Set(inputArray)];
    
    return result;
}

const inputArray = [1,3,5,2,1,6,5,3];

console.log(distinctArray(inputArray));
 
//=============================================
// Палиндром
//=============================================
console.log('============= Палиндром ====================')

function palindrom(world) {    
    return world === world.split('').reverse().join('');
}

console.log(palindrom('СОРРОС'))
console.log(palindrom('палиндром'))
console.log(palindrom('казак'))
 
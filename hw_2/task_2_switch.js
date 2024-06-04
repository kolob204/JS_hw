//======================================================
// Task 1 через switch
//======================================================
const age = "2";

const age2 = 18;

const age3 = 90;


switch (true) {
    case (age < age2 && age > 1): {
        console.log("You don't have access cause your age is " + age + " i'ts less then ");
        break;
    }
    case (age >= age2 && age < age3): {
        console.log("Welcome")
        break;
    }
    case (age > age3): {
        console.log("Keep calm and look culture channel");
        break;
    }
    default: {
   console.log("Technical works")
   }

}

//======================================================
// Проверить тип данных
//======================================================

const isNotNumer = (a) => {
    return (a) => typeof a !== 'number';
}
 
switch (true) {
    case (isNotNumer(age) || isNotNumer(age2) || isNotNumer(age3)): {
        console.error("Input data is't correct");
        break;
    }
    case (age < age2 && age > 1): {
        console.log("You don't have access cause your age is " + age + " i'ts less then ");
        break;
    }
    case (age >= age2 && age < age3): {
        console.log("Welcome")
        break;
    }
    case (age > age3): {
        console.log("Keep calm and look culture channel");
        break;
    }
    default: {
        console.log("Technical works")
    }

}


//======================================================
// Преобразование
//======================================================

const canBeANumber = (a, b, c) => { Number(a) && Number(b) && Number(c) 
}

if (canBeANumber(age, age2, age3)) {
    switch (true) {

        case (Number(age) < Number(age2) && Number(age) > 1): {
            console.log("You don't have access cause your age is " + age + " i'ts less then ");
            break;
        }
        case (Number(age) >= Number(age2) && Number(age)< Number(age3)): {
            console.log("Welcome")
            break;
        }
        case (Number(age) > Number(age3)): {
            console.log("Keep calm and look culture channel");
            break;
        }
        default: {
            console.log("Technical works")
        }

    }
} else {
    console.error("Input data is't correct");
}
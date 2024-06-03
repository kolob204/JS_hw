//======================================================
// Task 1 через switch
//======================================================
const age = 1;

const age2 = 18;

const age3 = 60;

switch (age) {
    case (age < age2 && age > 1): {
        console.log("You don't have access cause your age is " + age + " i'ts less then ")
    }
    case (age >= age2 && age < age3): {
        console.log("Welcome")
    }
    case (age > age3): {
        console.log("Keep calm and look culture channel");
    }
    default: {
        console.log("Technical works")
    }

}

//======================================================
//
//======================================================

const age2 = prompt("Please set minimal age", 19);
const age3 = prompt("Please maximum age", 60);
const age = prompt("Please your age", 17);


const canBeANumber = (a, b, c) => {
    if (Number(a) && Number(b) && Number(c)) return true;
}

if (canBeANumber(age, age2, age3)) {
    switch (true) {

        case (Number(age) < Number(age2) && Number(age) > 1): {
         alert("You don't have access cause your age is " + age + " i'ts less then ");
            break;
        }
        case (Number(age) >= Number(age2) && Number(age)< Number(age3)): {
         alert("Welcome")
            break;
        }
        case (Number(age) > Number(age3)): {
            alert("Keep calm and look culture channel");
            break;
        }
        default: {
         alert("Technical works")
        }

    }
} else {
    alert("Input data is't correct");
}
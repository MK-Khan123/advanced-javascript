//1. const first = 2;
// const second = '2';

const first = 1;
const second = true;

if(first == second){ //This is true because in JavaScript false is equivalent to 0 and true is equivalent to 1. But if we use triple equal the result will be unequal.
    console.log("Condition is true");
}
else{
    console.log("Condition is false");
}

//Double equal dile kon variable kon type er sheita check korbe na, shudhu value ta check korbe. Kintu triple equal dile value and type duitai check korbe.
//Double equal duita variable er type jodi same na thake then duita type same korar chesta korbe, and then compare korbe.
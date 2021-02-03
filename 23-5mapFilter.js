const numbers = [3, 4, 5, 6, 7, 8];
// const output = [];

// for (let i = 0; i < numbers.length; i++) {
//     const element = numbers[i];
//     const result = element * element;
//     output.push(result);
// }

// console.log(output);

// function square(element){
//     return element * element;
// }

// numbers.map(function(element, index, array){ //Map er bhitore jei function ta pass kora hoi, shei function e just 3ta parameter dewa jai.
//     console.log(element, index, array);
// })

// const square = element => element * element;
// const square = x => x * x;

// const result = numbers.map(function (element) {
//     return element * element;
// }); //Map ekta array er upor apply kore tarpore prottekta element ke niye function er bhitor certain kaaj korar por shetar return ta output hishebe arekta array dibe.

// const result = numbers.map(x => x * x);

// console.log(result);

//FILTER

const result = numbers.filter(x => x > 5); //Filter er kaaj hocche array er moddhe jei element gula ase, shekhan theke, jei condition ta fulfil korbe, fulfil korar por return korbe ekta array hishebe.

//FIND and Filter almost same. Filter always ekta array return korbe. But Find condition wise shudhu element ta dibe. FIND Filter er ekta special version.

const isThere = numbers.find(x => x > 5);

console.log(isThere);
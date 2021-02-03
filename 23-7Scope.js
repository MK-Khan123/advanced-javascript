let bonus = 20; //Eita global scope e ase so je keu jekono jaiga theke call korte parbe.

function sum (first, second) {
    let result = first + second + bonus;
    if(result > 9){ // let or const ei block scope er moddhei use kora jaabe. Er baire use kora jaabe na. Kintu jodi var use kora hoi tokhon variable ta ke tene function er upore rekhe dewa hoi (programming er bhashai eita ke 'hoist' kora hoi bujhai). Jar karone function er bhitore shobai var er variable ta ke use korte pare. 
        let mood = "happy";
        mood = "fishy";
        mood = "funky";
        mood = "cranky";
        console.log(mood);
    }
    // console.log(mood);
    // console.log(day); //Ekhane undefined dekhai karon hoisting korle day er value shoho parent scope e nei na. Just declaration er part taake upore nibe.
    // var day = "Friday";
    console.log(day);
    let day = "Friday"; //Eikhane ekta error dibe je initialize korar aage access kora jabe na.
    return result;
}

const output = sum(3, 7);
// console.log(result); //Eita JavaScript error dibe. 'result' scope er baire.
console.log(output);
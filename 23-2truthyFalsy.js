//1. const age = 0; //Assign any value to age, the condition will be true except 0.

//2. const name = ''; //String er bhitor e kichu thaklei true bolbe but empty string hoilei false bolbe.

//3. let name; //Condition e false ashbe because kono variable jodi declare kora hoi but define kora na hoi then 'undefined' ashbe. And undefined hole by default condition false dekhabe.

//4. const name = null; //Variable er value null dileo condition e false dekhabe.

//5. const name = NaN; //Eitao condition false dibe.

//6. const name = []; //Empty array condition true dibe.

//7. const name = {}; //Empty object condition true dibe.
console.log(name);

if (name) { //First e age diye check kora hoisilo.
    console.log("condition is true");
}
else {
    console.log("condition is false");
}

//In a nutshell

//Falsy:
//0
//''
//undefined
//null
//false
//NaN

//Truthy:
//'Any number other than 0'
//Not an empty string ' '
//true
//empty array []
//empty object {}


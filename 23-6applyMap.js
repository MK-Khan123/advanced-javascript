const students = [
    {id: 21, name:"Omar Sunny"},
    {id: 31, name:"Mannaaaaaa"},
    {id: 41, name:"Moyuri"},
    {id: 71, name:"DeepJol"}
]

// let studentsArray = [];

// for (let i = 0; i < students.length; i++) {
//     const element = students[i].name;
//     studentsArray.push(element); 
// }

// console.log(studentsArray);

const names = students.map(s => s.name);
const ids = students.map(s => s.id);
const bigger = students.filter(s => s.id > 40);
const bigger2 = students.find(s => s.id > 40);
console.log(bigger2);
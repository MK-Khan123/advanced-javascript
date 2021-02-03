const nums = [1, 2, 3, 4, 5, 6, 7, 8];
// const part  = nums.slice(2,5); //Slice kore niye jaabe but original array intact thakbe.
// console.log(part);

const removed = nums.splice(2, 5, 77, 88, 99); //Eikhane 2 number index theke shuru kore 5ta index er value remove kore dibe. Original array ke change kore dibe. 
// const removed = nums.splice(2, 1, 77, 88, 99); //A good example to clear the concepts

// console.log(removed);
// console.log(nums);

const together = nums.join("ami"); //You can put all the elements of an array into a string using join().
console.log(together);

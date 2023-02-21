/*
You are given an array say: [33, 50, 79, 78, 90, 101, 30 ]. Now return/get all the elements which are divisible by 10 using array.filter() method.
*/



const num = [33, 50, 79, 78, 90, 101, 30 ];

// it will return all the element who will satisfied the condition
const div10Filter = num.filter(x=> x % 10 === 0);
console.log(div10Filter);


/*
Now do the same task of question 2. But do this using array.find() method. Then compare the output.
*/

// it will return only the first element who will satisfied the condition
const div10Find = num.find(x=> x % 10 === 0);
console.log(div10Find);
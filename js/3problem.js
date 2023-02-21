/*
You have an array [ 1, 9, 17, 22 ]. Add the all elements of this array and give output. Do this using for loop array.reduce() method.
*/

const number = [ 1, 9, 17, 22 ];

const sum = number.reduce( (prev, current)=> prev+current, 0);
console.log(sum);

let sum1 =0;
for (const num of number) {
    sum1=sum1+num;
}
console.log(sum1);

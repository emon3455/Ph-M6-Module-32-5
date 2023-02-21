const people=[
    {name: "Emon", age:21},
    {name: "Elina", age:22},
    {name: "Sumon", age:25},
    {name: "Yousuf", age:5}
];

// using for in loop:
let sum=0;
people.forEach(x => {
    sum = sum + x.age;
});

// using reduce:
const sum1 = people.reduce( (prev , next)=> prev + next.age ,0);

console.log(sum);
console.log(sum1);
const num = [33, 50, 79, 78, 90, 101, 30 ];

// it will return all the element who will satisfied the condition
const div10Filter = num.filter(x=> x % 10 === 0);
console.log(div10Filter);

// it will return only the first element who will satisfied the condition
const div10Find = num.find(x=> x % 10 === 0);
console.log(div10Find);
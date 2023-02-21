/*
সিম্পল একটা জাভাস্ক্রিপ্ট অবজেক্ট এর কোন একটা প্রোপার্টিকে ভেরিয়েবল হিসেবে ডিক্লেয়ার করার জন্য destructuring ইউজ করো। 
*/

const student = {
    name:"Emon",
    cgpa:3.85
}

const {name,cgpa}=student;
console.log(name);
console.log(cgpa);

/*
array এর destructuring করবে আর সেটা করার জন্য তুমি এরে এর থার্ড পজিশন এর উপাদান কে destructuring করে 'three' নামক একটা ভেরিয়েবল এ রাখবে। 
*/
const number = [1,2,3,4,5,6];
const [a,b,third,...rest] = number;
console.log(third);
console.log(rest);


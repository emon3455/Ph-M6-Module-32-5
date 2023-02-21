/*
অনেকগুলা সংখ্যার একটা array হবে। তারপর তোমার কাজ হবে array এর উপরে map ইউজ করে। প্রত্যেকটা উপাদানকে ৫ দিয়ে গুন্ করে গুনফল আরেকটা array হিসেবে রাখবে। পুরা কাজটা এক লাইনে হবে। 
*/

const number = [10,20,30,40,50];

const mul = number.map((x)=> x*5);
console.log(mul);

/*অনেকগুলা সংখ্যার একটা array থেকে শুধু বিজোড় সংখ্যা বের করে নিয়ে আসার জন্য filter ইউজ করো */
const num1 = [1,2,3,4,5,6,7,8,9,10];
const odd = num1.filter(x => x%2 !==0);
console.log(odd);

/*
একটা array এর মধ্যে অনেকগুলা অবজেক্ট আছে। সেখানে যেই অবজেক্ট এর price আছে ৫০০০ টেক্কা সেই অবজেক্টকে find দিয়ে বের করো। */

const books = [
    {name: "Alo",price:1000},
    {name: "vhalo",price:5000},
    {name: "Kalo",price:5000},
    {name: "Jalo",price:7000},
    {name: "malo",price:8000},
];
const book = books.find(x=> x.price===5000);
console.log((book));
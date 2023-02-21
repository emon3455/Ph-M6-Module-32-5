/*
You have an odd array (array with odd numbers). [ 1, 3, 5, 7, 9 ].
Now convert this array into an even array (array with even numbers).
Output: [ 2, 4, 6, 8, 10 ].
*/
const odd = [ 1, 3, 5, 7, 9 ];

// way-1:
const even = odd.map(x=> x+1);
console.log(even);

// way-2:
const even1=[];
for(let i=0; i<odd.length; i++){
    even1[i] = odd[i]+1;
}
console.log(even1);
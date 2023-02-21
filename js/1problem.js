
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
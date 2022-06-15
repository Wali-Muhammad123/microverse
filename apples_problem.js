let s=7;
let t=10;
let a=4;
let b=12;
var inclusive_array=[];
while (s<=t){
inclusive_array.push(s)
s++;
}
let x=0;
let y=0;
let apples=[2,3,-4];
let oranges=[3,-2,-4];
while (x<apples.length){
    apples[x]=apples[x] + a;
    x++;
}
while (y<oranges.length){
    oranges[y]=oranges[y] +b;
    y++;
}
console.log(apples)
console.log(oranges)
console.log(inclusive_array)
let apple_counter=0;
let orange_counter=0;
for (let i of apples){
    if (inclusive_array.includes(i)){
        apple_counter++;
    }
}
for (let j of oranges){
    if (inclusive_array.includes(j)){
        orange_counter++;
    }
}

console.log(apple_counter);
console.log(orange_counter);
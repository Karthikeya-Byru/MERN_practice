//
let arr=[10,20,30];

//unpacking the elements of an array into an single varaible 
let [a,b,c]=arr;
console.log(a,b,c);
//unpacking objects
let point={
    x:2,
    y:-2,
    z:1
}
//basic for in loop
for(let v in point)
    console.log(point[v]);

//unpacking by 
//unpacking can only be possible if we use same variables as the key such as x y and z
let {x,y,z}=point
console.log(x);
console.log(y);
console.log(z);

// function New(){
//     let arr =[10,20,30]
//     return arr;
// }

// console.log(New());
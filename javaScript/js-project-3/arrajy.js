//array can store non-homogenous elements
let arr=[1,'sai',true,'Hello']
//also array can store homogenous elements
let names=['ravi','shiva','sandeep']

console.log(arr);
console.log(names);
console.log('length of array is',arr.length,'and',names.length)
for(let i=0;i<arr.length;i++){
    console.log(arr[i]);
}
console.log(arr[5])
let j=0
while(j!=names.length){
    console.log(names[j])
    j++;
}
//for of loop
//it is only useful while handling the arrays
let ar1=[10,20,30,40,50,60,70,80,90]
for(let k of ar1){
    console.log(k);
}
let array=[2,4,8]
console.log(array)
//insert elements at the beginning
array.unshift(1,2);
console.log('at beginning',array)
//insert elements at the end
array.push(10,20);
console.log('at end',array)
//index based insertion
array.splice(2,3,'nani','bhanu',0.456)
console.log('insertion of the elememts based on index',array)
//delete from start
let rm1= array.shift();
console.log('removed element',rm1)
console.log('modified array after first element deletion',array)
//delete from end
let rm2=array.pop();
console.log('removed element',rm2)
console.log('modified array after end element deletion',array)
//index based deletion
let rm3=array.splice(1,2)
console.log('removed element',rm3)
console.log('modified array after removing from specific index',array)

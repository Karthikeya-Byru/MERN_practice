let data=[91,87,93,54,75]

let shortList=[];

//the v here represents the data of the array and not the index
for(let v of data){
    if(v>=85)
        shortList.splice(0,0,v)
}
console.log(shortList);

//instead of writing this whole logic we can use filter
//it slects the elements
let shortList1=data.filter((element)=>element>85)
console.log(shortList1);

//modifying elements
let shortList2=data.map(element=>{
    if(element<85)
        return element+10;
    else
        return element
})
console.log(shortList2);
//for iterating the array
data.forEach((element,index)=>console.log('The value at index',index,'is',element))

//finding a needed number
let requiredNumber=data.find(element=>element===91)
if(requiredNumber==undefined)
    console.log('required number not found');
else
    console.log('required number is',requiredNumber);

    //finding index of a number
let index=data.findIndex(element=>element==91)
    if(index===-1)
        console.log('Number not available');
    else
        console.log('The index of the number is',index);

//reduce method used to make an array to a siingle value
let sum = data.reduce((accumulator,element)=>accumulator+element)
console.log('the sum of data is',sum);

//finding small number
let smallNumber = data.reduce((accumulator,element)=>accumulator<element?accumulator:element)
console.log(smallNumber);

//finding large number
let largeNumber = data.reduce((accumulator,element)=>accumulator>element?accumulator:element)
console.log(largeNumber);
//Global Scope
let a=10;
//function scope
function getSum(b){
    let sum=a+b;
    console.log('b is',b);
    console.log('sum is ',sum)
    //block scope
    if(sum>0){

        let x=123;
        console.log('x is ',x)
        return "positive";
    }
    else{
        return "Negative";
    }
}
getSum(20)
console.log('a is',a);

//
var globalScope=123;

function sample(){
    let functionScope=456;
    console.log(globalScope);
    console.log(functionScope);
    
    if(true){
        var blockScope=789;
        console.log(globalScope);
        console.log(functionScope);
        console.log(blockScope);
    }
    console.log(blockScope);//backlog of using var
}
sample();
//function expression
// let result=getSum1(10,20)
// console.log('sum1 is ',result)
let getSum1=function(a,b){
    let sum=a+b;
    return sum;
}
let result=getSum1(10,20)
console.log('sum1 is ',result)
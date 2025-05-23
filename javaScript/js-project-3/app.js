//arrow function 
//they are used when the body of the function contains only one statement
let sum=(a,b)=>a+b;
console.log(sum(12,18))

//but if there are muntiple statements we can also use it by using return statement and floer brackets
let biggerNumber=(a,b)=>{
    if(a>b)
        return 'a is big';
    else if(a===b)
        return 'both are equal';
    else
        return 'b is big';
}
console.log(biggerNumber(12,18))
console.log(typeof biggerNumber)
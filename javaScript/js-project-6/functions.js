//functions can be sent as arguments
function sample(a){
    return a();
}
//sending a function as a parameter to another function
sample(function(){console.log("Hello");})
//this is also known as call back function
//only sample function can call the function mentioned below
let result = sample(function(){return 100});
console.log(result);
//returning a function by an other function
function sample2(){
    return function(){
        return 256;
    }
}
let result1=sample2();
console.log(sample2());//prints the function
console.log(result1());//prints the value residing in the function
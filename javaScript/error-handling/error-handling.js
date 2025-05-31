//if an error occurs in a particular line the code before the error will excecute but the code after th error is not excecuted
console.log('Hello');
console.log("Good Morning");
//error handling
try{
    // let a = 10;
    console.log(a);
}
catch(err){
    console.log(err);
    //prints the error in the console
}

function text(){
    console.log("Namaste");
}
text();
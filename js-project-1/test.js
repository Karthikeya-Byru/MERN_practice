let a;

console.log('value of a ',a);
console.log('type of ',typeof a);

a=12;
console.log('value of a is',a);
console.log('type of ',typeof a);
a='sai'
console.log('value of a is',a);
console.log('type of ',typeof a);
a=false;
console.log('value of a is',a);
console.log('type of ',typeof a);
a=null;
console.log('value of a is',a);
console.log('type of ',typeof a);

const b=123;
console.log('value of b is',b);
console.log('type of ',typeof b);


/*non-primitive dataypes*/
//array
let arr=[10,20,30]
console.log('array is',arr)
console.log('type of',typeof arr)

//object
let person={
    pid:123,
    name:'Raju'
};
console.log('details',person)

//function
let x;
let y;
x=10;
y=2;
function sumoftwonumbers(x,y){
    return x+y;
}
console.log('sum is',sumoftwonumbers)

let z;
z=x**y;
console.log('power',z)

let ab=123;
let ba='123';
console.log(ab==ba)
console.log(ab===ba)

//conditional statement
let num1=10
let num2=20
if(num1>num2)
   console.log('num1 is big')
else if(num1===num2)
   console.log('both are equal')
else
    console.log('num2 is big')
//for loop
for(let i=0;i<3;i++){
    console.log('Hello')
}
//while loop
let c = 0
while(c<3){
    console.log('Hello')
    c++;
}
//switch case
let choice = 3;
switch(choice){
    case 1:
        console.log('First Case');
        break;
    case 2:
        console.log('Second Case');
        break;
    case 3:
        console.log('Third Case');
        break;
    default:
        console.log('Not there'); 
}
let fisrtNumber=document.querySelector('#first')
let secondNumber=document.querySelector('#second')

let addbtn=document.querySelector('.add')
let subbtn=document.querySelector('.sub')

let result=document.querySelector('.result')

let num1,num2;
function getValues(){
    num1 = Number(fisrtNumber.value);

    num2 = Number(secondNumber.value);
}
addbtn.addEventListener('click',()=>{

    getValues();
    let sum = num1 + num2;

    result.textContent=sum;
    result.style.fontSize='100px'
})

subbtn.addEventListener('click',()=>{

    getValues();
    let diff = num1 - num2;

    result.textContent=diff;
    result.style.fontSize='100px'
})
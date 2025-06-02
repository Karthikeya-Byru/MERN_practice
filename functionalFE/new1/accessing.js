// //accesing body or head
// let headElement=document.head;
// console.log(headElement);
// //access body
// let bodyElement=document.body;
// console.log(bodyElement);

// //accesing other elements
// // let heading=document.getElementById('main')
// // console.log(heading);


// let heading=document.querySelector('#main')
// console.log(heading);

// //selecting all elements with same tag
// let sample = document.querySelectorAll('h1')
// console.log(sample);


let heading=document.querySelector('.heading')
let dive= document.querySelector('.main')
let btn1=document.querySelector('.telugu')
let btn2=document.querySelector('.hindi')
let btn3=document.querySelector('.english')
let img=document.querySelector('img')
// let btn4=document.querySelector('.count')
btn1.addEventListener('click',()=>{
    heading.textContent='Namaste'
    //changing styles
    heading.style.color='orange';
    heading.style.backgroundColor='black'
    heading.style.textAlign='center'
    img.src='https://img.freepik.com/premium-vector/hand-drawn-namaste-greeting-background_428817-1409.jpg?semt=ais_items_boosted&w=740'
    img.style.width='300px'
})

btn2.addEventListener('click',()=>{
    heading.textContent='Namaskar'
    //changing styles
    heading.style.color='white';
    heading.style.backgroundColor='black'
    heading.style.textAlign='center'
    
    img.src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTg6QPFFHg6vrsvvUpv_ghN9jRBAeK4DsPowg&s'
    img.style.width='300px'
})

btn3.addEventListener('click',()=>{
    heading.textContent='Hello'
    //changing styles
    heading.style.color='green';
    heading.style.backgroundColor='black'
    heading.style.textAlign='center'
    img.src='https://img.freepik.com/premium-vector/white-background-with-colorful-colorful-text-hello-hello_547536-287.jpg?semt=ais_hybrid&w=740'
    img.style.width='300px'
})

// btn4.addEventListener('click',()=>{
//     for(let i=0;i=click;i++)
//         console.log(i);
// })
//inner html
dive.innerHTML=dive.innerHTML+`<h2>Language Select</h2>`
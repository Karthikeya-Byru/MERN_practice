let input = document.querySelector('#username');
let btn = document.querySelector('button')

btn.addEventListener('click',()=>{

    //reading username
    let username=input.value;
    //create h1 element
    let h1 = document.createElement('h1');
    //add text content
    h1.textContent=username;
    //append
    document.body.appendChild(h1)
})
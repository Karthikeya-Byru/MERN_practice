let divMain = document.querySelector('div');
let para = document.querySelector('p')
let delbtn = document.querySelector('button')

//accessing children
console.log(divMain.children[2]);
console.log(divMain.children[2].children);
console.log(divMain.firstElementChild);
console.log(divMain.lastElementChild);

//accesing parents
console.log(para.parentElement);

//accessing siblings
console.log(para.nextElementSibling);
console.log(para.previousElementSibling);

//hidden element
para.hidden=true;

//creste element
let img = document.createElement('img')
img.src='https://media.istockphoto.com/id/814423752/photo/eye-of-model-with-colorful-art-make-up-close-up.jpg?s=612x612&w=0&k=20&c=l15OdMWjgCKycMMShP8UK94ELVlEGvt7GmB_esHWPYE='
img.style.width='300px'

//adding elements to parent
divMain.prepend(img)

divMain.after(img)

//setting attributes

// img.setAttribute('class','rounded-circle')
img.className='rounded-circle'

let h1 = document.createElement('h1');
h1.textContent='welcome to programming';
h1.setAttribute('class','text-center bg-warning')



divMain.prepend(h1)

//removing a node
delbtn.addEventListener('click',()=>{
    // divMain.remove();
    divMain.removeChild(divMain.lastElementChild)
})
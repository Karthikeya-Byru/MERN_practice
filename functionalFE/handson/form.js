//get elements
let form = document.querySelector('form')
let usernameInput = document.querySelector('#username')
let emailInput = document.querySelector('#email')
let dobInput = document.querySelector('#dob')
let tbody=document.querySelector('tbody')

form.addEventListener("submit",(event)=>{

    //to prevent page reload
    event.preventDefault();
    //read values of inputs
    let username = usernameInput.value;
    let email = emailInput.value;
    let dob = dobInput.value;
    //add new row to table body
    tbody.innerHTML+=`<tr>
     <td>${username}</td>
     <td>${email}</td>
     <td>${dob}</td>
    </tr>`
});


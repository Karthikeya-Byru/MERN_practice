function getUsers(){
    //asynchronous action delay is automatically generated
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response=>response.json())
    .then(data => {
        let user = data.filter(user => user.id < 4); 
        console.log(user); 
    })
    .catch(err=>console.log(err))
}
getUsers()  
console.log('good morning');

function getUsers_1(){
    //asynchronous action delay is automatically generated
    fetch('https://jsonplaceholder.typicode.com/users?name=Leanne Graham&username=Bret')
    .then(response=>response.json())
    .then(data => console.log(data))
    .catch(err=>console.log(err))
}
getUsers_1()
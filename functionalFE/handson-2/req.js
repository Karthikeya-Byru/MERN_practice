let main = document.querySelector('.main')

function getUsers(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res=>res.json())
    .then(userObj=>{
        let users =userObj;
        //display data in grid of card
        for(let user of users){
            main.innerHTML+=`
                <div class="col" >
                    <div class="card h-100 text-center">
                        <h3>${user.id}</h3>
                        <div class= " card-body text-center">
                        <p class="lead">${user.name}</p>
                        <a href="${user.email}">${user.email}</a>
                        <p>City : ${user.address.city}</p>
                    </div>
                    </div> 

                </div>
            `
        }
    })
    .catch(err=>console.log('error :',err))
}
getUsers();
let student=true

let isStudent=new Promise((fulfilled,rejected)=>{
    if(student===true)
        fulfilled('Hi student')
    else
        rejected('Who are you?')
    
})

isStudent
.then((msg)=>msg+' How')//another  promise
.then(msg=>msg+' are you?')
.then(msg=>console.log(msg))
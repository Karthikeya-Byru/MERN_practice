//parent
let obj1={
    college:'SNIST',
    fee:15000
}
//child
let obj2={
    name:'Karthikeyan',
    Branch:'ECE'
}

//setting obj1 as parent of obj2
Object.setPrototypeOf(obj2,obj1)
console.log(obj2);
console.log(obj2.fee);
//parent
let student={
    branch:'ECE',
    year:'III',
    fee:130000,
    getCgpa:function(a){
        return a;
    }
}


//child-1
let student1={
    name:'Karthikeyan',
    age:20
}
//making the inheritance for object literals
Object.setPrototypeOf(student1,student)

//child-2
let student2={
    name:'sandeep',
    age:21
}
//making the inheritance for object literals
Object.setPrototypeOf(student2,student)

console.log(student1)
console.log(student2)
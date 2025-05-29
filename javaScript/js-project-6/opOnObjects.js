let teacher ={
    id:2541,
    name:'sumathi',
    field:'Physics'
}
//return the keys of an object in the form of an array
console.log(Object.keys(teacher));
//returns the values in the object
console.log(Object.values(teacher));

//freeze method prevents any modification to the object
Object.freeze(teacher)
//even though we are trying to modify the teacher ocject we cant do it because of the freeze method
teacher.city='Hyd'
console.log(teacher);
//when we want to join multiple objs we use assign method
let obj1={
    a:120
}
let obj2={
    b:'Sai Ram'
}
let newObj=Object.assign({},obj1,obj2)
console.log(newObj);
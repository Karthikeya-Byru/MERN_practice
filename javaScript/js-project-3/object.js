//student object literal
let student={
    rollNo:42,
    name:'Ravi'
}
// console.log(student)
//accesing properties
    //dot notation
    console.log(student.name);
    console.log(student.sai);
    //bracket notation
    console.log(student['rollNo']);
//iteration can be done using for in loop
console.log('by iteration')
for(let x in student){
    console.log('value of key : ',x,':',student[x])
}
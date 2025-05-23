//complex objects
let student={
    id:232,
    name:'bhanu',
    college:'SNIST',
    address:{
        pinCode:501301,
        area:'Yamnampet'
    },
    skills:['js','DSA','Django'],
    qualify: function(){
        return 'qualified';
    }
}
//adding a value
student.mobile=999999999;
//deleting a value
delete student.skills;
//updating a value 
student.name='sundar';
console.log(student.id)
console.log(student.skills)
console.log(student.address.pinCode)
console.log(student.qualify())
console.log(student)

let employee={
    id:246,
    basic:40,
    totalMarks:function(a){
        let cut=0.8*this.basic;//this keyword usually means that find basic identifier in this object block
        let totalSum=cut+a;
        return totalSum;
    }
}
console.log(employee.totalMarks(50));
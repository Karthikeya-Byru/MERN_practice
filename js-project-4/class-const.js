//student constructor
function Student(name,age,marks){
    this.name=name
    this.age=age
    this.marks=marks
}
//add method to student type
Student.prototype.getAverage=function(){
    //calculate avg marks

}

let std=new Student('raju',20,[97,85,91])
console.log(std);

//class 
class Student1{
    constructor(name,age,marks){
        this.name=name
        this.age=age
        this.marks=marks
    }

    getAverage(){
        //business logic
    }
}
let std1=new Student1('raju',20,[97,85,91])
console.log(std1);
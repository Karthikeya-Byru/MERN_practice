//student constructor
function Student(name,age,marks){
    this.name=name
    this.age=age
    this.marks=marks
}
//add method to student type
Student.prototype.getAverage=function(){
    //calculate avg marks
    let avg = (this.marks[0]+this.marks[1]+this.marks[2])/3
    return avg;
}

let std=new Student('raju',20,[97,85,91])
console.log(std);
console.log(std.getAverage());

//class 
class Student1{
    constructor(name,age,marks){
        this.name=name
        this.age=age
        this.marks=marks
    }

    getAverage(){
        //business logic
        let avg = (this.marks[0]+this.marks[1]+this.marks[2])/3
        return avg;
    }
}
let std1=new Student1('raju',20,[97,85,91])
console.log(std1);
console.log(std1.getAverage());
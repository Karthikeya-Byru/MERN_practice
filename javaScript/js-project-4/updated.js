//without using prototype object
//person class
class person{
    //constructor is always the same it should not be changed with any other name
    constructor(name){
        //obj initilization logic 
        this.name=name;
    }
    //methods can be written here 
    getName(){
        return this.name;
    }
    //the above method will be directly added to the prototype of the person class
}
//create person object
let per1=new person('Ramu')
console.log(per1)
//child of the person
class student extends person{//this is similar to java
    constructor(name,course){
        super(name)//calling super class constructor
        this.course=course;
    }
}
class employee extends person{//both employyee and student is child of person
    constructor(name,salary){
        super(name)
        this.salary=salary;
    }
}
let std1 = new student('Ravi','B.Tech')
let emp1=new employee('Ramu',400000)
console.log(std1.name);
console.log(emp1.salary);
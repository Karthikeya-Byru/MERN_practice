function Person(name){
    this.name=name;
}

function Student(name,course){
    //pass name to the parent
    Person.call(this,name)
    this.course=course;
}

function Teacher(name,field){
    Person.call(this,name)
    this.field=field;
}

//set person as prototype of Student
Student.prototype=Object.create(Person.prototype)
Teacher.prototype=Object.create(Person.prototype)
let std1 = new Student('Ravi','ECE')
let tech1= new Teacher('Tharun','Physics')
console.log(std1)
console.log(tech1)
console.log(std1.course)
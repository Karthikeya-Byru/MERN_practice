function Person(name,mobile){
    this.name=name;
    this.mobile=mobile;
}

function Student(name,mobile,year,marks){
    Person.call(this,name,mobile)
    this.year=year;
    this.marks=marks
}

function Teacher(name,mobile,field,join){
    Person.call(this,name,mobile)
    this.field=field;
    this.join=join;
}

//set person as prototype to student 
Student.prototype=Object.create(Person.prototype)
Teacher.prototype=Object.create(Person.prototype)
let std1=new Student('Karthikeyan',919823104,'III',[80,68,97,77])
let techaer=new Teacher('Sumalatha',929344399,'Physics',2006)
console.log(std1);
console.log(techaer);
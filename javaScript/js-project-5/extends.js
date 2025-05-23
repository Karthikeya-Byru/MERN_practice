class Person{
    constructor(name,mobile){
        this.name=name;
        this.mobile=mobile;
    }
}
class Studnet extends Person{
    constructor(name,mobile,year,fee){
        super(name,mobile)
        this.year=year;
        this.fee=fee;
    }
}

let stud=new Studnet('Kruthik',7758642156,'II',130000)
console.log(stud);
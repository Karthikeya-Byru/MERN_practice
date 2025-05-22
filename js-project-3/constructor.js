//objects using constructor function
//1.create type
let StudentDetails= function(rno,name,year,branch){
    this.rno=rno;
    this.name=name;
    this.year=year;
    this.branch=branch;
}
//2.creating objects of the above type
let student1= new StudentDetails(12,'Dharani','II','ECE')

//how to add a value to the constructor function
StudentDetails.prototype.getData=function(){
    return 'Hello';
}

let student2= new StudentDetails(13,'Chandu','II','CSE')
console.log(student1.getData())
console.log(student2)


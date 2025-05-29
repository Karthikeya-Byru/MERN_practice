let students=[
    {
        rollNo:'4r2',
        name:'Karthikeyan',
        Branch:'ECE',
        age:23,
        fee:130000,
        address:{
            locality:'Urban',
            state:'Telangana'
        }
    },
    {
        rollNo:'4l4',
        name:'Sandeep',
        Branch:'ECE',
        age:24,
        fee:130000,
        address:{
            locality:'Urban',
            state:'others'
        }
    },
    {
        rollNo:'4m4',
        name:'nikhil',
        Branch:'ECE',
        age:24,
        fee:130000,
        address:{
            locality:'rural',
            state:'others'
        }
    }
]
//filter
let studentsAgeAbove22=students.filter(students=>students.age>22)
console.log(studentsAgeAbove22);
//map
let feeDiscount=students.map(students=>{
    if(students.address.locality==='rural' && students.address.state==='others')
        return students.fee=students.fee-40000
    else if(students.address.state==='others')
        
        return students.fee=students.fee-15000
    else
        return students.fee-5000
})
console.log(feeDiscount);
//for each
students.forEach((element,index)=>console.log('the students data is',element,'at',index))
// finding sum of fees of the studetns
let sumOfFee= students.reduce((acc,element)=>{
    if(acc.fee!==undefined)
        return acc.fee+element.fee;
    else
        return acc+element.fee;
})
let summOfFee=students.reduce((acc,element)=>
    acc.fee!==undefined?acc.fee+element.fee:acc+element.fee)
console.log(sumOfFee);
console.log(summOfFee);
//finding students from telangana
//find returns one elemet is returns the frst match only returns a value
let fromTelangana=students.filter(element=>element.address.state==='Telangana')
console.log(fromTelangana);
//find the youngest employee
let youngest = students.reduce((acc,element)=>acc.age<element.age?acc:element)
console.log(youngest);
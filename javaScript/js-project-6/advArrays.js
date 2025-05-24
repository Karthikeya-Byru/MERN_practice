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
        age:22,
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
        return students.fee-40000
    else if(students.address.state==='others')
        return students.fee-15000
    else
        return students.fee-5000
})
console.log(feeDiscount);
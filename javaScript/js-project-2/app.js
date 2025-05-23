//parameterized function
function sumOfTwoNumbers(a,b){
    let sum = a+b;
    return sum;
}
function test(){
    console.log('Good day')
}
//non-parameterized function
let result = sumOfTwoNumbers(10,20)
console.log('result is',result)
test()
function test_1(num){
    console.log('the value is ',num)
}
test_1(10,20)//the function requires only one parameters but sending two parameters also possible and there will be no any compilation error
function test_2(num1=0){//the num1=0 is default because when we have not declared 0 for tbhe value we get NAN as we are not passing any value by test_2
    let x=100;
    let sum = x+num1;
    console.log('the sum is',sum);
}
test_2();
//receive student data
function displayStudentData(student,Branch,college=undefined){
    console.log('Name of the College :',college);
    console.log('Name of the student :',student);
    console.log('Branch :',Branch);
}
displayStudentData("Karthikeyan",'ECE');
displayStudentData("Varun",'ECE','NEHU');

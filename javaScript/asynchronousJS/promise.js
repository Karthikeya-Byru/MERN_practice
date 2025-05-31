//prem should inform if the internal of VLSI lab is conducted today or not
//create promise
let examConducted=false;
console.log("Karthikeyan is asking if the exam is conducted or not?");
let examIsconducted=new Promise((done,undone)=>{
    setTimeout(() => {
        if(examConducted===true)
            done("Yes Ra exam had been conducted");
        else
            undone("No ra exam is cancelled");
    }, 5000);
})
//consumingg the promise
examIsconducted
.then(message=>console.log('prem : ',message))
.catch(message=>console.log('prem : ',message))
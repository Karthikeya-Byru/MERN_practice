let main = document.querySelector('.main');
let data = document.querySelector('.data');
let table = document.querySelector('table')
data.addEventListener('click',()=>{
    //create new element
    let para = document.createElement('p');
    //setting attributes dynamically
    para.setAttribute("class","para")
    
    //add content to p
    para.textContent='paragraph';
    
    //append to main element
    main.appendChild(para)
})


//array of students
let studentsData=[
    {rollno:21,name:'sudheer',branch:'ECE'},
    {rollno:85,name:'nikhil',branch:'CSE'},
    {rollno:10,name:'karthik',branch:'EEE'},
    {rollno:109,name:'samuel',branch:'ECE'},
    {rollno:201,name:'sudha',branch:'CSC'},
    {rollno:291,name:'ranveer',branch:'IT'}
]

//get tbody

let tableBody=document.querySelector('tbody')
for(let stdObj of studentsData){
    tableBody.innerHTML+=`
    <tr>
        <td>${stdObj.rollno}</td>
        <td>${stdObj.name}</td>
        <td>${stdObj.branch}</td>
    </tr>`
}

//toggle action
let taggbtn=document.querySelector('.tagg')

taggbtn.addEventListener('click',()=>{
    if(table.hidden===true){
        taggbtn.textContent='Hide Table'
        table.hidden=false;
    }
    else{
        taggbtn.textContent='Show Table'
        table.hidden=true;
    }
        
})
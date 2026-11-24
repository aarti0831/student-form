const cl = console.log;

const stdForm = document.getElementById('stdForm');
const fnameControl= document.getElementById('fname');
const lnameControl = document.getElementById('lname');
const ageControl = document.getElementById('age');
const emailControl = document.getElementById('email');
const contactControl = document.getElementById('contact');
const student = document.getElementById("Student");
const submitbtn = document.getElementById("submitbtn")

let stdArr = [
    {
        fname:"Aartii",
        lname:"karbhari",
        age:"20",
        email:"aartii08@gmail.com",
        contact:7994785489,
        
    },

    {
        fname:"Siyaa",
        lname:"Patil",
        age:"21",
        email:"siyaaa08@gmail.com",
        contact:6879243893,

    }
];

function createTable (arr){
    let result = "";
    arr.forEach((std,i)=>{
        result +=`
        
                <tr>
                <td>${i+1}</td>
                <td>${std.fname}</td>
                <td>${std.lname}</td>
                <td>${std.age}</td>
                <td>${std.email}</td>
                <td>${std.contact}</td>

                <td>
                <button class="btn btn-lg btn-primary">
                <i class="fa-solid fa-pen-to-square"></i>
                </button>
                </td>

                <td>
                <button class="btn btn-lg btn-danger">
                <i class="fa-solid fa-trash"></i>
                </button>
                </td>
                </tr>`
    })

    student.innerHTML=result;

}

createTable(stdArr);
function onStdAdd(eve){
    eve.preventDefault();
    let stdobj = {
        fname: fnameControl.value,
        lname: lnameControl.value,
        age: ageControl.value,
        email: emailControl.value,
        contact: contactControl.value
        
    }

    stdArr.push(stdobj);
    createTable(stdArr);
    stdForm.reset();
}
stdForm.addEventListener('submit',onStdAdd);



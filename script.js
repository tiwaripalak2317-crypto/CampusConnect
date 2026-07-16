
console.log("js connected");
alert("javascript connected!");
// image slider
const slide = document.querySelectorAll(".slide");
let currentslide = 0;
function showslide() {
    slide.forEach(function (slide) { //har slide k lie
        slide.style.display = "none"; //hide kr do
    });
    slide[currentslide].style.display = "block";  //agr slide current slide k equal hai to show kr do    
}
showslide(
    // console.log(slide.length)
);

//next work
const nextbtn = document.querySelector(".btnnext");
nextbtn.addEventListener("click", function () {
    currentslide++; //slides + ho
    if (currentslide >= slide.length) {   //// length bs 7 hai agr 8 aaye to wps kr do 0
        currentslide = 0;
    }
    showslide();
});

//previous button
const prevbtn = document.querySelector(".btnprev");
prevbtn.addEventListener("click", function () {
    currentslide--;
    if (currentslide < 0) {
        currentslide = slides.length - 1;
    }
    showslide();
});

//automatic slide changer
setInterval(function () {
    currentslide++;
    if (currentslide >= slide.length) {
        currentslide = 0;
    }
    showslide();
}, 3000);

// //dots
// let dots = document.querySelectorAll(".dot");
// function updatedots(index){
//     dots.forEach((dots) => {
//         dots.classList.remove("active");
//     });
//     dots[index].classList.add("active");s
// }
//DATA TABLE ME LANA
let students=JSON.parse(localStorage.getItem("students")) || [];
function displayStudents(){
let tbody = document.querySelector("#tbody");

tbody.innerHTML="";
students.forEach(function(student,i){
    let row=document.createElement("tr");
     row.innerHTML = `
    <td>${i+1}</td>
<td>${student.name}</td>
<td>${student.roll}</td>
<td>${student.course}</td>
<td>${student.email}</td>
<td>${student.phone}</td>;`
// <td><button>delete</button>   <button>edit</button></td>;

tbody.appendChild(row);
});
}
displayStudents();
// student manager section html accesss
let nameinput = document.getElementById("naam");
let rollinput = document.getElementById("roll");
let courseinput = document.getElementById("course");
let emailinput = document.getElementById("email");
let phoneinput = document.getElementById("phone");
let btn = document.querySelector(".btn1");
let table = document.getElementById("tbody");
//buttons
btn.addEventListener("click", function () {
    let sno = table.rows.length + 1;
    let studentName = nameinput.value;
    let roll = rollinput.value;
    let course = courseinput.value;
    let email = emailinput.value;
    let phone = phoneinput.value;
    if (studentName == "" || roll == "" || course == "" || email == "" || phone == "") {
        alert("please fill all necessary details. !");
        return;
    }

    let row = document.createElement("tr");
    row.innerHTML = `
    <td>${sno}</td>
<td>${studentName}</td>
<td>${roll}</td>
<td>${course}</td>
<td>${email}</td>
<td>${phone}</td>;`
// <td><button>delete</button>   <button>edit</button></td>;

    table.appendChild(row);

    //  KHALI INPUT
    nameinput.value = "";
    rollinput.value = "";
    courseinput.value = "";
    emailinput.value = "";
    phoneinput.value = "";

// local storage
let newstudent={
    name:studentName,
    roll:roll,
    course:course,
    email:email,
    phone:phone
};
students.push(newstudent);
localStorage.setItem("students",JSON.stringify(students));
displayStudents();
});


//DARK MODE
// let darkbtn = document.getElementById("dark");
// dkrbtn.addEventListener("click",function(){
//     alert("button dabya");
//     document.body.classList.toggle("dark");
// if(document.body.classList.contains("dark")){
//     darkbtn.innerText ="light mode";
// }else{
//     darkbtn.innerText="dark mode";
// }
// });
// console.log("button find",document.getElementById("dark"));

//dark mode
// document.getElementById("dark").onclick =()=>{
//     document.body.classList.toggle("dark");
// //     document.getElementById("dark").innerText = 
// //     document.body.classList.contains("dark")?"light mode":"light mode";
// }

//login === student manager
let loginbtn= document.getElementById("login");
loginbtn.addEventListener("click",function(){
    document.getElementById("student-manager")
    .scrollIntoView({behavior:"smooth"});
});



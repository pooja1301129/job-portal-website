let jobs = [

{
title:"Data Analyst",
company:"ABC Technologies",
location:"Hyderabad",
salary:"6 LPA",
experience:"1 Year",
type:"Full-Time",
applicants:0
},

{
title:"Machine Learning Intern",
company:"Tech Innovations",
location:"Bangalore",
salary:"25,000/month",
experience:"Fresher",
type:"Internship",
applicants:0
},

{
title:"Frontend Developer",
company:"Infosys",
location:"Chennai",
salary:"5 LPA",
experience:"1 Year",
type:"Full-Time",
applicants:0
},

{
title:"Data Scientist",
company:"TCS",
location:"Hyderabad",
salary:"8 LPA",
experience:"2 Years",
type:"Full-Time",
applicants:0
},

{
title:"AI Engineer",
company:"Wipro",
location:"Bangalore",
salary:"10 LPA",
experience:"2 Years",
type:"Internship",
applicants:0
}

];

displayJobs();

function updateDashboard(){

document.getElementById("totalJobs").innerText =
jobs.length;

let totalApplicants = 0;

jobs.forEach(job=>{

totalApplicants += job.applicants;

});

document.getElementById("totalApplicants").innerText =
totalApplicants;

}

function displayJobs(){

let jobList =
document.getElementById("jobList");

jobList.innerHTML = "";

jobs.forEach((job,index)=>{

jobList.innerHTML += `

<div class="job-card">

<h2>${job.title}</h2>

<p><strong>Company:</strong> ${job.company}</p>

<p><strong>Location:</strong> ${job.location}</p>

<p><strong>Salary:</strong> ${job.salary}</p>

<p><strong>Experience:</strong> ${job.experience}</p>

<p><strong>Type:</strong> ${job.type}</p>

<p><strong>Applicants:</strong> ${job.applicants}</p>

<button onclick="applyJob(${index})">
Apply
</button>

<button onclick="deleteJob(${index})">
Delete
</button>

</div>

`;

});

updateDashboard();

}

function addJob(){

let title =
document.getElementById("jobTitle").value;

let company =
document.getElementById("company").value;

let location =
document.getElementById("location").value;

let salary =
document.getElementById("salary").value;

let experience =
document.getElementById("experience").value;

let type =
document.getElementById("jobType").value;

if(
title==="" ||
company==="" ||
location==="" ||
salary==="" ||
experience==="")
{
alert("Please fill all fields");
return;
}

jobs.push({

title,
company,
location,
salary,
experience,
type,
applicants:0

});

displayJobs();

document.getElementById("jobTitle").value="";
document.getElementById("company").value="";
document.getElementById("location").value="";
document.getElementById("salary").value="";
document.getElementById("experience").value="";

}

function deleteJob(index){

jobs.splice(index,1);

displayJobs();

}

function applyJob(index){

let name =
prompt("Enter Your Name");

let email =
prompt("Enter Your Email");

if(name && email){

jobs[index].applicants++;

alert(
"Application Submitted Successfully!"
);

displayJobs();

}

}

function searchJobs(){

let search =
document.getElementById("search")
.value
.toLowerCase();

let cards =
document.getElementsByClassName("job-card");

for(let i=0;i<cards.length;i++){

let text =
cards[i].textContent.toLowerCase();

if(text.includes(search)){
cards[i].style.display="";
}
else{
cards[i].style.display="none";
}

}

}
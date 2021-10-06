/**Created a variable called inputs that contains all the inputs of data in the table tag name 
 * 
 */

// document.getElementById("active_user").innerHTML = localStorage.getItem("active_user");

// if(localStorage.getItem("active_user") == null){
 
// }

  

//  document.getElementById("logout").addEventListener("click" ,()=>{
//    localStorage.removeItem("active_user");
//    location.href = "logout.html";
//  })

// /**add Job details in to the table */

// /**create jobs class */
// class Jobs{
//   constructor(start,end,details,notes,id){
//     this.id= id;
//     this.start = start;
//     this.end = end ;
//     this.details = details;
//     this.notes = notes;
//   }
// }

// /**UI Class 
//  * store relates to local storage
// */
// class UI{
//   static displayJobs(){
//     const jobs = Store.getJobs();
//     jobs.forEach(job => UI.addJobsToList(job))
//   }
// /**A function to add jobs to the list  */
//   static addJobsToList(job){
//     const list = document.getElementById("jobs_list");
//     const row = document.createElement("tr");
// console.log(job.start);
// console.log(job.end);
// const start_time = job.start.split(":");
// const end_time = job.end.split(":");
// console.log(start_time);

// console.log(end_time);
// /**created a variable called time_diff and created an if condtion so we can get the sum of the hours worked  */
// let time_diff ;
// if((end_time[1] - start_time[1]) < 0){
//   time_diff =` ${ end_time[0] - start_time[0] - 1} : ${60 + (end_time[1] - start_time[1])}`;
// }
// else{
//   time_diff =` ${ end_time[0] - start_time[0]} : ${(end_time[1] - start_time[1])}`;
// }
// /**Below is the inforation that will be placed in the bottom of the page as the job information stored it can also be deleted */
//     row.innerHTML=`
//     <td>${job.id}</td>
//     <td> ${job.start} </td>
//     <td> ${job.end} </td>
//     <td> ${time_diff} </td>
//     <td> ${job.details} </td>
//     <td> ${job.notes} </td>
//     <td><a href = "#" class="btn  btn-danger btn-sm delete text-white fw-bold">X</a></td>
//     `;
//   console.log(row);
// /**this allows the data to be appended at the end of the parent node */
//     list.appendChild(row);
//   }

//   /**Delete job from the UI */
//   static deleteJobs(element){
//     if(element.classList.contains("delete")){
//       element.parentElement.parentElement.remove();
//     }
//   }
// }

// /**Store Class */
// class Store {
//   static getJobs(){
//     let jobs;
//     if (localStorage.getItem("jobs") === null){
//       jobs =[];
//     }
//     else {
//       jobs=JSON.parse(localStorage.getItem("jobs"))
//     }

//     return jobs;
//   }
// /**To add the job into the jobs array */
//   static addJobs(job){
//     const jobs = Store.getJobs();
//     jobs.push(job);
//     localStorage.setItem("jobs",JSON.stringify(jobs));
//   }
// /**A function to delete the jobs from the local storage */
//   static removeJob(id){
//     const jobs=Store.getJobs();
// /**gives the job an ID so it can be deleted */
//     jobs.forEach((job, index) =>{
// if(job.id == id){
//   jobs.splice(index, 1);
// }
//  }) ;
//   localStorage.setItem("jobs", JSON.stringify(jobs));
//   }
// }


// /**event to display jobs */
// document.addEventListener("DOMContentLoaded" , UI.displayJobs);

/**const validation = async (token) => {
  const status = await axios.get("http://localhost:8080/verify/"+token);
  if(status.validation){
    console.log(status)
  }else{
  // location.href = "login.html";
  }
}

if(localStorage.getItem("jobs-data"))
{
  let token = JSON.parse(localStorage.getItem("jobs-data")).token;
  validation(token)
}else{
  /*causing issue with token/** */
 // location.href = "login.html";
//}

document.getElementById("user-form").addEventListener("submit" ,(e)=>{
  e.preventDefault()
  const id = Math.ceil(new Date().getTime()/10000000);
  const start = document.getElementById("start").value;
  const end = document.getElementById("end").value;
  const details = document.getElementById("details").value;
  const notes = document.getElementById("notes").value;

  if (start == "" || end == "" || details == "" || notes == "" )
  {
    console.log("all columns are required")
  }
  else{
   const job = new Jobs(start,end,details,notes,id);

   UI.addJobsToList(job);

   Store.addJobs(job);
  }
  
})




 

/**event to remove a job */
document.getElementById("jobs_list").addEventListener("click", (e)=>{
  /**delete jobs from the UI */
  UI.deleteJobs(e.target);

console.log(e.target.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.textContent);
  /**delete jobs from the local storage */
  Store.removeJob(e.target.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.textContent);
})
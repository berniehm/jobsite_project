/**Created a variable called inputs that contains all the inputs of data in the table tag name 
 * 
 */
document.getElementById("active_user").innerHTML = localStorage.getItem("active_user");

if(localStorage.getItem("active_user") == null){
  location.href="login.html";
}

  

 document.getElementById("logout").addEventListener("click" ,()=>{
   localStorage.removeItem("active_user");
   location.href = "logout.html";
 })

/**add Job details in to the table */

/**create jobs class */
class Jobs{
  constructor(start,end,details,notes){
    this.start = start;
    this.end = end ;
    this.details = details;
    this.notes = notes;
  }
}

/**UI Class 
 * store relates to local storage
*/
class UI{
  static displayJobs(){
    const jobs = Store.getJobs();
    jobs.forEach(job => UI.addJobsToList(job))
  }

  static addJobsToList(job){
    const list = document.getElementById("jobs_list");
    const row = document.createElement("tr");

    row.innerHTML=`
    <td> ${job.start} </td>
    <td> ${job.end} </td>
    <td> ${job.end - job.start} </td>
    <td> ${job.details} </td>
    <td> ${job.notes} </td>
    
    `;
  console.log(row);

    list.appendChild(row);
  }
}

/**Store Class */
class Store {
  static getJobs(){
    let jobs;
    if (localStorage.getItem("jobs") === null){
      jobs =[];
    }
    else {
      jobs=JSON.parse(localStorage.getItem("jobs"))
    }

    return jobs;
  }
/**To add the job into the jobs array */
  static addJobs(job){
    const jobs = Store.getJobs();
    jobs.push(job);
    localStorage.setItem("jobs",JSON.stringify(jobs));
  }
}


/**event to display jobs */
document.addEventListener("DOMContentLoaded" , UI.displayJobs);


document.getElementById("user-form").addEventListener("submit" ,(e)=>{
  e.preventDefault()
  const start = document.getElementById("start").value;
  const end = document.getElementById("end").value;
  const details = document.getElementById("details").value;
  const notes = document.getElementById("notes").value;

  if (start == "" || end == "" || details == "" || notes == "" )
  {
    console.log("all columns are required")
  }
  else{
   const job = new Jobs(start,end,details,notes);

   UI.addJobsToList(job);

   Store.addJobs(job);
  }
  
})

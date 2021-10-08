/** This allows for the functionality of the timesheet.html*/
 

class UI{
  static clearFields(){
     document.getElementById("start").value="";
     document.getElementById("end").value="";
     document.getElementById("details").value="";
    document.getElementById("notes").value="";
  }
}

/**this sets the event listner for the jobs to be submitted and displayed */
document.getElementById("job-form").addEventListener("submit" ,async (e)=>{
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
   const job = {start,end,details,notes};
   const response = await axios.post("http://localhost:8080/job/addJob",job);

   if(response.data.error){
   console.log(response.data.error)
   }
   else{
     UI.clearFields();
     console.log(response.data)
     displayJobs();
   }
  }
  });

/**This function allows the jobs to be displayed at the end of the time.html */
  async function displayJobs(){
    const response = await axios.get("http://localhost:8080/job/list");
    if(response.data.error){
      console.log(response.data.error)
      }
      else{
        console.log(response.data)
        let rows = "";
        response.data.jobs.forEach(job =>{
          const start_time = job.start.split(":");
const end_time = job.end.split(":");
          let time_diff ;
 if((end_time[1] -start_time [1]) < 0){
   time_diff =` ${ end_time[0] - start_time[0] - 1} : ${60 + (end_time[1] - start_time[1])}`;
 }
 else{
  time_diff =` ${ end_time[0] - start_time[0]} : ${(end_time[1] - start_time[1])}`;
 }
          let row = `
          <tr>
          <td>${job.createdAt} </td>
          <td>${job.start} </td>
          <td>${job.end} </td>
          <td>${time_diff} </td>
          <td>${job.details} </td>
          <td>${job.notes} </td>
          <td><button class="btn btn-danger" onclick="deleteJob('${job._id.toString()}')"> Delete</button></td>
          </tr>
          `;

          rows += row;
        });
          
       document.getElementById("jobs_list").innerHTML = rows;
      }

  }


 displayJobs();

/**event to remove a job */
async function deleteJob(id){
  console.log("job deleted",id)
  const response = await axios.delete("http://localhost:8080/job/"+id);

  if(response.data.error){
    console.log(response.data.error)
    }
    else{
      
      console.log(response.data)
      displayJobs();
    }
   }
  



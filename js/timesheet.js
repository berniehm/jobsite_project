/**Created a variable called inputs that contains all the inputs of data in the table tag name 
 * There is only one table therefor the element is 0
 *The Function below will allow a user to use the submit button to place the notes and jobs in the below table
 */
document.getElementById("active_user").innerHTML = localStorage.getItem("active_user");

if(localStorage.getItem("active_user") == null){
  //location.href="login.html";
}

  function submitNotes(){
    let inputs = document.getElementsByTagName("table")[0].querySelectorAll('input')
    let submit_data = "";
    let hoursTable = document.getElementById("hoursTable")
    let start = 0;
    let sum = 0;
    for(let data of inputs){
     /* * The switch will allow the data name to idenify the attributes 
      * store inputs and declare variables aswell
      * calucate the hours */
      switch(data.name){
        case "start" : console.log("start ",data.value)
        start = data.value;

        break;
        case "end" : console.log("end ",data.value)
        sum = data.value-start;
        submit_data += `<tr> <td> ${sum} </td>`;
        start=0;
        sum=0;
        break;
        case "job" : console.log("job ",data.value)
        submit_data += ` <td> ${data.value}  </td>`;
        break;
      case "notes" : console.log("notes ",data.value)
      submit_data += ` <td> ${data.value}  </td></tr>`;
        break;
      }
    }
    hoursTable.innerHTML=submit_data;

  }

/**This function will allow the user to add a row to the table*  */
  function addRows(){
    
    let table_row=`                     <tr>
    <td><input  class="start" name="start" type="text" placeholder="HH:MM">></td>
    <td><input  class="start" name="end" type="text" placeholder="HH:MM">></td>
    <td class="tastTD"> <input class="taskInput" name="job" type="test" placeholder= "Enter Job"></td>
    <td class="tastTD"> <input class="taskInput" name="notes" type="test" placeholder= "Enter Notes"></td>
</tr>`

document.getElementById("hoursBody").innerHTML += table_row;
  }

 document.getElementById("logout").addEventListener("click" ,()=>{
   localStorage.removeItem("active_user");
   location.href = "logout.html";
 })


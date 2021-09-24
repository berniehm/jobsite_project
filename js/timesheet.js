/**Created a variable called inputs that contains all the inputs of data in the table tag name 
 * There is only one table therefor the element is 0
 * The switch will allow the data name to idenify the attributes 
 */
let inputs = document.getElementsByTagName("table")[0].querySelectorAll('input')
  function submitNotes(){
    for(let data of inputs){
      switch(data.name){
        case "start" : console.log("start ",data.value)
        break;
        case "end" : console.log("end ",data.value)
        break;
        case "job" : console.log("job ",data.value)
        break;
        case "notes" : console.log("notes ",data.value)
        break;
      }
    }

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
/**Allows the registerform take in the atributes for a user 
 * So below we are stating the variables for the register form amd setting an event listner 
  */
 

document.getElementById("registerform") && document.getElementById("registerform").addEventListener("submit",(e)=>{
  e.preventDefault();
  let fname=document.getElementById("firstName").value;
  let lname=document.getElementById("lastName").value;
  let email=document.getElementById("email").value;
  let password=document.getElementById("password").value;
  

  console.log(fname);
  console.log(lname);
  console.log(email);
  console.log(password);
/**Creating a variable called users 
 *  Push the attribustes fname,lname,email,password
  */
 let users ;

 if (localStorage.getItem("users")==null){
   users = [];
 }
 else {
   users = JSON.parse(localStorage.getItem("users"));
 }

users.push({
    fname,
    lname,
    email,
    password

  })


/**Allows the users to be stored in the website local storage
 * also allows the users to go to the page where they can log their time
  */
  localStorage.setItem("users",JSON.stringify(users));
  localStorage.setItem("active_user", fname);

  fname = "";
  lname = "";
  email = "";
  password ="";

  location.href="time.html";
});

/**Allows the login form to take in the atributes email and password  */
document.getElementById("loginForm") && document.getElementById("loginForm").addEventListener("submit",(e)=>{
  e.preventDefault();
  /**Set vairables for the loginForm 
 * 
  */
  let email=document.getElementById("email").value;
  let password=document.getElementById("password").value;
  

  
  console.log(email);
  console.log(password);

  
/**lets the users be stored in local storage  */
  let getusers=localStorage.getItem("users");
  let users=JSON.parse(getusers);
  /**if the user enters a password and email correctly than they are loggin due to the if statment 
   * else they will get incorrect details appering in the concole.log
  */

  let user=users.filter(user => user.email == email && user.password == password);
  if(user.length){
    console.log("you are logged in");
    localStorage.setItem("active_user", user[0].fname);
 location.href="time.html";

  }
  else{
    console.log("incorrect details");
  }


});
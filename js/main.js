/**Allows the register form take in the atributes for a user 
 * So below we are stating the variables for the register form amd setting an event listner 
  */
 



document.getElementById("registerform") && document.getElementById("registerform").addEventListener("submit",async (e)=>{
  e.preventDefault();
  let fname=document.getElementById("firstName").value;
  let lname=document.getElementById("lastName").value;
  let email=document.getElementById("email").value;
  let password=document.getElementById("password").value;
  
const newUser = {fname,lname,email,password};

  console.log(fname);
  console.log(lname);
  console.log(email);
  console.log(password);

 const response = await axios.post("http://localhost:8080/user/register",newUser);

 /**Creating a variable called users 
 *  Push the attributes fname,lname,email,password in to users
  */
 console.log(response.data)
 if(!response.data.error){
  localStorage.setItem("jobs-data",JSON.stringify(response.data))
  location.href = "time.html";
 }else{
   console.log("something went wrong")
 }
 


 /**let users ;

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
  
  localStorage.setItem("users",JSON.stringify(users));
  localStorage.setItem("active_user", fname);

  fname = "";
  lname = "";
  email = "";
  password ="";
/** */
  //location.href="time.html";
});

/**Allows the login form to take in the atributes email and password  */
document.getElementById("loginForm") && document.getElementById("loginForm").addEventListener("submit",async (e)=>{
  e.preventDefault();
  /**Set vairables for the loginForm 
 * 
  */
  let email=document.getElementById("email").value;
  let password=document.getElementById("password").value;

  let credential ={email,password};
  
  const response = await axios.post("http://localhost:8080/user/login",credential);
  
  console.log(email);
  console.log(password);
  

  if(response.data.error){
    console.log("something went wrong")
  }
  else{
console.log(response.data)
localStorage.setItem("jobs-data",JSON.stringify(response.data))
location.href = "time.html";
}
});

/**admin panel  */
let openNav = document.querySelector(".openNav");
let sidebar = document.querySelector("#sidebar");
let navbar = document.querySelector("#navbar-container");

let li = document.querySelectorAll("li");

openNav && openNav.addEventListener("click", ()=>{
    if(openNav.classList == "openNav"){
        sidebar.style.left = "300px";
        navbar.style.display = "block";
        navbar.style.transition = "0.5s";
        navbar.style.left = "0px";
        openNav.innerHTML = '<i class="fas fa-times"></i>';
        openNav.classList = "closeNav";
    }else{
        sidebar.style.left = "0px";
        navbar.style.display = "none";
        navbar.style.transition = "0.5s";
        navbar.style.left = "-300px";
        openNav.innerHTML = '<span></span><span></span><span></span>';
        openNav.classList = "openNav";
    }
});

li.forEach(items =>{
    items.addEventListener("click", ()=>{
        li.forEach(remove =>{
            remove.classList.remove("active");
        })
        items.classList.add("active");
    });
});

  
/**lets the users be stored in local storage  
  let getusers=localStorage.getItem("users");
  let users=JSON.parse(getusers);
  /**if the user enters a password and email correctly than they are loggin due to the if statment 
   * else they will get incorrect details appering in the concole.log
  

  let user=users.filter(user => user.email == email && user.password == password);
  if(user.length){
    console.log("you are logged in");
    localStorage.setItem("active_user", user[0].fname);
 location.href="time.html";

  }
  else{
    console.log("incorrect details");
  }

/** */

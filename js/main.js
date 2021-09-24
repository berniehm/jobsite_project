/*Timesheet */




/*A function to allow people to upload Documents**/


/** A function to will allow the user to login the email and password is sent to my server */

 //function basiclogin (email, password) {
  //const response = await zlFetch.post(loginEndpoint, {
   // auth: {
   //   username: email,
   //   password: password
    //},
    //body: { /*...*/ }
  //})
//}
/** A function to check the user has logged in if there is no token present the user has not logged in*/
 function isLoggedIn(){

const token = StorageEvent.length('token')
  if (!token) return false
}
/**if the user is not logged in for what ever resaon this will redirect them to the login page */
 function autoRedirect () {
   const validLogin = await isLoggedIn()
   if (!validLogin && location.pathname !== '/login.html/')
   redirect('/login')
   if(validLogin && location.pathname === '/login.html/')
   redirect('/')

 }
 function isLoggedIn () {
  // ...
  // Checks validity of token
  //let response =('***');
  //const response = await zlFetch.post(loginEndpoint, {
  //  auth: token,
  //  body: { course: 'learn-javascript' }
 // })
}
function isLoggedIn () {
  //let token = 
  // ...
  // Saves token into localStorage again
  //const { token } = response.body
  localStorage.setItem('user',user)

  return true
}
function logout () {
  localStorage.removeItem('token')
  localStorage.removeItem('user')
}



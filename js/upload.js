
/** A function to will allow the user to download a file that has been uploaded so they can fill it sign and upload it again */
/** we will list our elements to match our huplaod html page */

const realFileBtn = document.getElementById("real-file");
const customBtn = document.getElementById("custom-button");
const customTxt = document.getElementById("custom-file");

customBtn.addEventListener("click", function(){
realFileBtn.click();
});




/** A function to will allow the user to download a file that has been uploaded so they can fill it sign and upload it again */
/** we will list our elements to match our uplaod html page */

const { application } = require("express");

const realFileBtn = document.getElementById("real-file");
const customBtn = document.getElementById("custom-button");
const customTxt = document.getElementById("custom-file");

customBtn.addEventListener("click", function(){
realFileBtn.click();
});

/**an api to store the documents in the database 

app.post("//", async (req,res)=>{
    const new document= newDoc (req.body);

    const document  = await newDoc.save(); //save method is used to store the data in to the database 

    if(!document){
        res.send({
            error:"the document is not stored in the database"
        })
    }else{
        res.send({
            sucess:"your document is sucessfully stored"

        })
    }

})
**/

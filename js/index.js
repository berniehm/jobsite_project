const express = require( "express");
const mongoose = require("mongoose");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const bodyParser = require("body-parser");



const app = express();

const port = 8080;
const uri = "mongodb+srv://job-site:Peak.oil1@cluster0.et3zk.mongodb.net/job-site?retryWrites=true&w=majority";


/**connects the website to the mongo db */

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true },(err)=>{
    if(!err){
        console.log("Your application is connected to mongodb sucessfully");

    }
    
})

app.use(express.json());

app.use(express.urlencoded({extended: true}))
app.use(cors())
/**create schema for users  */ 
const userSchema = mongoose.Schema({
    fname :{
        type:String,
        required:true
    },
    lname :{
        type:String,
        required:true
    },
    email :{
        type:String,
        required:true
    },
    password :{
        type:String,
        required:true
    },
    role :{
        type:String,
        required:true
    }

},{
    timestamps:true
})

const User = mongoose.model("User",userSchema);

/**create a Schema for the jobs */
const jobSchema = mongoose.Schema({
    start :{
        type:String,
        required:true
    },
    end :{
        type:String,
        required:true
    },
    details :{
        type:String,
        required:true
    },
    notes :{
        type:String,
        required:true
    }
},{
    timestamps:true
})

const Job = mongoose.model("Job",jobSchema);


app.get("/index",(req,res)=>{
    res.send("index");
})

app.post("/user/register",async (req,res)=>{
    console.log(req.body)
    const newUser = new User({...req.body, role:"employee"});

    const user = await newUser.save();

    if(!user){
        res.send({error :"data is not stored sucessfully"})
}else{
    const token = await jwt.sign({
        _id:user._id.toString()
    }, "LJHnoPK@MNop@L@KLmnPoLGFRvHujMLKYTRwa%@LihytRGFREDVvcX@#opiN");
    res.send({user:user.fname, token})

}

})
/**the api that allows you to log in  */

app.post("/user/login", async function(req,res){
    const user = await User.findOne(req.body);

    if(!user){
        res.send({error :"username or password is incorrect"})
}else{
    const token = await jwt.sign({
        _id:user._id.toString()
    }, "LJHnoPK@MNop@L@KLmnPoLGFRvHujMLKYTRwa%@LihytRGFREDVvcX@#opiN");
    res.send({user:user.fname, token})
}
})

/**provides a token for loging in  */


app.get("/verify/:token",async (req,res)=>{
    const id = await jwt.verify(req.params.token,
    "LJHnoPK@MNop@L@KLmnPoLGFRvHujMLKYTRwa%@LihytRGFREDVvcX@#opiN");
    
    if (id){
        res.send({
            id
            })
    }else{
        res.send({
            error:"the token is incorrect"
        })
    }
})

/**create api for a job */

app.post("/job/addJob", async (req,res)=>{
    const newJob = new Job(req.body);

    const job = await newJob.save(); //save method is used to store the data in to the database 

    if(!job){
        res.send({
            error:"the job is not stored in the database"
        })
    }else{
        res.send({
            sucess:"your job is sucessfully stored"

        })
    }

})

/**get the job data */
app.get("/job/list", async (req,res)=>{
    const jobs = await Job.find({});
    if(!jobs){
        res.send({
            error:"the job is not stored in the database"
        })
    }else{
        res.send({
            jobs

        })
    }

})
/**deleted the jobs from the database  */

app.delete("/job/:id",async (req,res)=> {
const job = await Job.findByIdAndRemove(req.params.id);
if(!job){
    res.send({
        error:"the job is not deleted in the database"
    })
}else{
    res.send({
        job

    })
}
 })

 /**Listening at a port 8080 */

app.listen(port,()=>{
    console.log(`This application is listening on ${port}`);
})


/**const newPermission = this.els.newPermission.value.trim();
if(!newPermission){
    return;

}
const updatedPermissons = this.state.permissons;
updatedPermissons[new permissons]= true;
this.setState({
   permissons:updatedPermissons,
      newPermission: ''


})**/
/**Admin
 * have to be have the ability to be able to do the following
 * View reports of  the workers hours 
 * upload documents to anybodys account
 * view how many people are using the website
 * view whether a user is online of offine
 * also be able to edit people time if necessary 
 * 
 * 
 * 
 *  async function viewReports(){
    
 * 

* async function viewUsers(){
        

    }
    *async function uploadDocuments(){
        const
    }
    async function viewStatus(){

    }
    *
*/

const express = require( "express");
const mongoose = require("mongoose");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const bodyParser = require("body-parser");


const app = express();

const port = 8080;
const uri = "mongodb+srv://job-site:Peak.oil1@cluster0.et3zk.mongodb.net/job-site?retryWrites=true&w=majority";

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true },(err)=>{
    if(!err){
        console.log("Your application is connected to mongodb sucessfully");

    }
    
})

app.use(express.json());

app.use(express.urlencoded({extended: true}))
app.use(cors())
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
    const newUser = new User(req.body);

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

app.listen(port,()=>{
    console.log(`This application is listening on ${port}`);
})

 



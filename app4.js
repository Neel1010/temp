let mongoose=require('mongoose')
let validator=require('validator')
mongoose.connect("mongodb://127.0.0.1:27017/NeelCart4")
.then(()=>{console.log("Connection Established")})
.catch((error)=>{console.log(error)})

let schema=new mongoose.Schema({
    userName:{
        type:String,
        required:true,
        unique:true
    },
    email:{
        type:String,
        validate(value)
        {
            if(!validator.isEmail(value))
            {
                throw new Error("Invalid Email id")
            }

        },
        unique:true
    }
})
let User=new mongoose.model("User",schema);
let user1=new User({
    userName:"raj23",
    email:"20bce265@nirmauni.ac.in"
})
User.insertMany([user1]).then(()=>{console.log("Data sucessfully inserted")})
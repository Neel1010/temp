let mongoose=require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/NeelCart4")
.then(()=>{console.log("Connection Established")})
.catch((error)=>{console.log(error)})
let schema=mongoose.Schema({
    name:{
        type:String,
        required:true,
        unique:true,
        lowercase:true
    }
})
let Item=mongoose.model("Item",schema)

let item1=new Item({
    name:"Grapes"
})

Item.insertMany([item1]);
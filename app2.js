let mongoose=require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/NeelCart3")
.then(()=>{console.log("Conncetion establised")})
.catch((error)=>console.log(error));

let schema =new mongoose.Schema({
    number:Number,
    name:String,
    type:String
})

let Item=new mongoose.model("Item",schema);

let item1=new Item({
    number:104,
    name:"keyboard",
    type:"wireless"

})

let item2=new Item({
    number:105,
    name:"monitor",
    type:"Wired"

})
let item3=new Item({
    number:106,
    name:"Keyboard",
    type:"Wired"

})

Item.insertMany([{item1,item2,item3}])
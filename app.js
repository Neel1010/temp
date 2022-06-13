let mongoose=require("mongoose");
mongoose.connect("mongodb://localhost:27017/NeelCart2")
.then(()=>{console.log("Connection established")})
.catch((error)=>console.log(error));
console.log("Heelo")

let schema=new mongoose.Schema({
    name:{
        type:String,
        default:"user123"
    },
    age:Number,
    bday:Date,
    isMale:Boolean,
    isFemale:Boolean
})
let data=new mongoose.model("data",schema);

async function func()
{
    let res=await data.deleteMany({age:20});
}
func();
// let doc1=new data({
//     name:"Neel",
//     age:19,
//     bday:Date.now(),
//     isMale:true,
//     isFemale:false
// });
// let doc2=new data({
//     name:"Neel2",
//     age:19,
//     bday:Date.now(),
//     isMale:true,
//     isFemale:false
// });
// let doc3=new data({
//     name:"Neel3",
//     age:19,
//     bday:Date.now(),
//     isMale:true,
//     isFemale:false
// });
// data.insertMany([doc1,doc2,doc3])


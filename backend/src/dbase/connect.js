const mongo=require("mongoose")
mongo.connect("mongodb://localhost:27017/user",{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useCreateIndex:true
}).then(()=>{
    console.log(`successful`);
}).catch((err)=>{
console.log(`${port} abort`);
})
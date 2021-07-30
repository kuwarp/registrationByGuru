const mongoose=require("mongoose")


const userSchema= new mongoose.Schema({
  uname:{
      type:String,
      required:true
  },

email:{
    type:String,
    required:true,
    unique:true
},
username:{
    type:String,
    required:true,
    unique:true
},
password:{
    type:String,
    required:true,
    // unique:true
},
confirm:{
    type:String,
    required:true,
}
})


// Data Collection

const User=new mongoose.model("Userdata",userSchema)

module.exports=User
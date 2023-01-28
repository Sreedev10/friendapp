const Mongoose=require("mongoose")


let fSchema=Mongoose.Schema({

friendName:String,
Nickname:String,
describeFriend:String,
ContactNo:String,
email:String

}
)
module.exports=Mongoose.model("app",fSchema)
var mongoose= require("mongoose");
var messageschema=new mongoose.Schema({
		id: {
		type:mongoose.Schema.Types.ObjectId,
		ref:"user"
	},
	email:String,
	name:String,
	subject:String,
	message:String,
});

var message=mongoose.model("message",messageschema);
module.exports=message;
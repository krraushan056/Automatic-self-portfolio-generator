var mongoose= require("mongoose");
var contactschema=new mongoose.Schema({
		id: {
		type:mongoose.Schema.Types.ObjectId,
		ref:"user"
	},
	email:String,
	facebook:String,
	twitter:String,
	image:String,
	imageid:String,
	linkden:String,
	github:String,
	phone:Number,
	instagram:String,
	youtube:String
	
	
});

var Contact=mongoose.model("Contact",contactschema);
module.exports=Contact;
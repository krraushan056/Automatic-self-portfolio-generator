var mongoose=require("mongoose");
var ownerSchema=new mongoose.Schema({
	secretkey:Number,
		id: {
		type:mongoose.Schema.Types.ObjectId,
		ref:"user"
	},
	firstname:String,
	address:String,
	lastname:String,
	image:String,
	imageid:String,
	tagline:String,
	headingdescription:String,
	description:String
	
	});

var owner=mongoose.model("owner",ownerSchema);
module.exports=owner;
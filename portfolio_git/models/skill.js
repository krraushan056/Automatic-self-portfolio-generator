var mongoose= require("mongoose");
var skillSchema=new mongoose.Schema({
		id: {
		type:mongoose.Schema.Types.ObjectId,
		ref:"user"
	},
	title:String,
	image:String,
	imageid:String,
	body:String,
	created:{type:Date,default:Date.now},
	author:{
		id: {
		type:mongoose.Schema.Types.ObjectId,
		ref:"user"
	},
		username:String
	}
});
var skill=mongoose.model("skill",skillSchema);
module.exports=skill;
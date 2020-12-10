var mongoose= require("mongoose");
var AchievementSchema=new mongoose.Schema({
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
var achievement=mongoose.model("achievement",AchievementSchema);
module.exports=achievement;
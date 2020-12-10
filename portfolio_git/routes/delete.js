var express=require("express");
var router=express.Router();
var owner=require("../models/owner");
var contact=require("../models/contact");
var project=require("../models/project");
var achievement=require("../models/achievement");
var education=require("../models/education");
var skill=require("../models/skill");
var message=require("../models/message");
var middleware=require("../middleware");


router.delete("/showskill/:id",middleware.isLoggedIn,function(req,res){
	skill.findByIdAndRemove(req.params.id,function(err){
		if(err){
			res.redirect("/owner");
		}else
			{
				res.redirect("/owner");
			}
	})
})


router.delete("/showachievement/:id",middleware.isLoggedIn,function(req,res){
	achievement.findByIdAndRemove(req.params.id,function(err){
		if(err){
			res.redirect("/owner");
		}else
			{
				res.redirect("/owner");
			}
	})
})






router.delete("/showeducation/:id",middleware.isLoggedIn,function(req,res){
   education.findByIdAndRemove(req.params.id,function(err){
		if(err){
			res.redirect("/owner");
		}else
			{
				res.redirect("/owner");
			}
	})
})


router.delete("/showproject/:id",middleware.isLoggedIn,function(req,res){
	project.findByIdAndRemove(req.params.id,function(err){
		if(err){
			res.redirect("/owner");
		}else
			{
				res.redirect("/owner");
			}
	})
})

router.delete("/message/:id",middleware.isLoggedIn,function(req,res){
   message.findByIdAndRemove(req.params.id,function(err){
		if(err){
			res.redirect("/owner");
		}else
			{
				res.redirect("/owner");
			}
	})
})

module.exports=router;
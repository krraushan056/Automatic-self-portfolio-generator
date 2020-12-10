var express=require("express");
var router=express.Router();
var owner=require("../models/owner");
var contact=require("../models/contact");
var project=require("../models/project");
var achievement=require("../models/achievement");
var education=require("../models/education");
var skill=require("../models/skill");



router.get("/showskill/:id",function(req,res){
	skill.findById(req.params.id,function(err,foundskill){
		if(err){
			res.redirect("/owner");
		}else{
			res.render("showskill",{skill:foundskill});
		}
	})
})
router.get("/showeducation/:id",function(req,res){
	education.findById(req.params.id,function(err,foundeducation){
		if(err){
			res.redirect("/owner");
		}else{
			res.render("showeducation",{education:foundeducation});
		}
	})
})
router.get("/showproject/:id",function(req,res){
	project.findById(req.params.id,function(err,foundproject){
		if(err){
			res.redirect("/owner");
		}else{
			res.render("showproject",{project:foundproject});
		}
	})
})
router.get("/showachievement/:id",function(req,res){
	achievement.findById(req.params.id,function(err,foundachievement){
		if(err){
			res.redirect("/owner");
		}else{
			res.render("showachievement",{achievement:foundachievement});
		}
	})
})

module.exports=router;
var express=require("express");
var router=express.Router();
var passport =require("passport");
var user=require("../models/user");
var owner=require("../models/owner");


//////////////////////////////////////////////////////////////////////////////////////////
//=======================================================================
///////auth routes

///////////////////////////////////////////////////////////

router.get("/",function(req,res){
	
	user.find({},function(err,user){
		if(err){
			console.log(err);
			res.render("back")
		}else{
			if(user[0]){
			res.redirect("/owner")
		}else{
		res.render("landingpage");
		}
		}
	});
	

});


router.get("/register",function(req,res){
	res.render("register");
})
/////sign up submiit
router.post("/register",function(req,res){
	var secretkey=JSON.stringify(req.body.secretkey);
	console.log(secretkey);
	if(secretkey===JSON.stringify("MNBVCXZ")){
	   	var newuser=new user({username:req.body.username});
	user.register(newuser,req.body.password,function(err,user){
		if(err){
			
			 req.flash("error",err.message);
			return res.redirect("back");
		}
	
			passport.authenticate("local")(req,res,function(){
		
			 req.flash("success","Welcome to create your Portolio" +user.username);
			res.redirect("/form");
		});
			
	});
	}else{
		req.flash("error","please enter correct secret key");
		res.redirect("back");	
	}
			
});
///////////////////////////////////////////////////////////show login form
router.get("/login",function(req,res)
{
	res.render("login");
});
router.post("/login",passport.authenticate("local",{
	successRedirect:"/form",
	failureRedirect:"/login"}),
	function(req,res){})

router.get("/logout",function(req,res){
	req.logout();
	req.flash("success","Logged you out!");
	res.redirect("/");
})
router.get("/form",function(req,res)
{	owner.find({},function(err,owner){
		if(err){
		
			console.log(err);
			return res.redirect("back");
		}
		console.log(owner[0]);
		if(owner[0]){
		
			res.redirect("/owner");
		}else{
	res.render("form");
		}
});
});
 
 

function isLoggedIn(req,res,next){
	if(req.isAuthenticated()){
		return next();
	}
	res.redirect("login");
}

module.exports=router;
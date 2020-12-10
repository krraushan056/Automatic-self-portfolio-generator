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
/////////////////image///////////////
var multer = require('multer');
var storage = multer.diskStorage({
  filename: function(req, file, callback) {
    callback(null, Date.now() + file.originalname);
  }
});
var imageFilter = function (req, file, cb) {
    // accept image files only
    if (!file.originalname.match(/\.(jpg|jpeg|png|gif|)$/i)) {
        return cb(new Error('Only image files are allowed!'), false);
    }
    cb(null, true);
};
var upload = multer({ storage: storage, fileFilter: imageFilter})

var cloudinary = require('cloudinary');
cloudinary.config({ 
  cloud_name: 'dbbkmmy1m', 
  api_key: '831612496918632', 
  api_secret:'Fv4h9dgn1rBUX6gux92eiSA5j7Q'
});

//get all details of user from db
///////////////////////////////////////////////////////////////////////////////////////


router.get("/form1",function(req,res){
	owner.find({},function(err,owner){
		if(err){
			
			console.log(err);
			return res.redirect("back");
		}
		res.render("form1");
	});
	});
		

//////CTREATE ROUTES
router.post("/form1",middleware.isLoggedIn,upload.single('image'),function(req,res){
	if(req.file){
	cloudinary.uploader.upload(req.file.path, function(result) {
		 var image=req.body.image = result.secure_url;
		 var imageid=req.body.imageid=result.public_id;
  // add cloudinary url for the image to the campground object under image property
	/////////////owner///////////////////////
	var firstname=req.body.firstname;
	var lastname=req.body.lastname;
	 
	var description=req.body.description;
	var headingdescription=req.body.headingdescription;
	var tagline=req.body.tagline;
	var address=req.body.address;
	var newowner={firstname:firstname,image:image,imageid:imageid,description: description,lastname:lastname,tagline:tagline,address:address,headingdescription:headingdescription};
		
	owner.create(newowner,function(err,newlycreated){
		if(err){
			console.log(err)
		}else
			{
				res.redirect("/form1");
				
			}
	});
});
	}
});





		router.post("/form2",middleware.isLoggedIn,upload.single('image'),function(req,res){
			if(req.file){
	cloudinary.uploader.upload(req.file.path, function(result) {
		 var image=req.body.image = result.secure_url;
		 var imageid=req.body.imageid=result.public_id;
		///////////////////////////////////////////////////
	var email=req.body.email;
	var facebook=req.body.facebook;
	var twitter=req.body.twitter;
	var linkden=req.body.linkden;
var github=req.body.github;
var phone=req.body.phone;
var instagram=req.body.instagram;
	var youtube=req.body.youtube;
	var newcontact={email:email,image:image,imageid:imageid,facebook:facebook,twitter:twitter,linkden:linkden,github:github,phone:phone,instagram:instagram,youtube:youtube};
			contact.create(newcontact,function(err,newlycreated2){
		if(err){
			console.log(err)
		}else{
				res.redirect("/owner");
			}
		
		});	
	});
	}
			});

router.get("/form3",function(req,res){
		res.render("form3");
	})


	router.post("/form5",middleware.isLoggedIn,upload.single('image'),function(req,res){
		if(req.file){
		cloudinary.uploader.upload(req.file.path, function(result) {
		 var image=req.body.image = result.secure_url;
		 var imageid=req.body.imageid=result.public_id;
	var title=req.body.title;
	
	var body=req.body.body;
	var author={
		id: req.user._id,
		username:req.user.username
	}
	var newproject={title:title,image:image,imageid:imageid,body:body,author:author};
	project.create(newproject,function(err,newlycreated3){
		if(err){
			console.log(err)
		}else{
				console.log(project);
				res.redirect("/owner");
			}
		
		});	
	});
		}	
	});


	/////////////////////acheviement////////////////////
	
router.get("/form2",function(req,res){
		res.render("form2");
	})	

router.post("/skill",middleware.isLoggedIn,upload.single('image'),function(req,res){
if(req.file){
	cloudinary.uploader.upload(req.file.path, function(result) {
		 var image=req.body.image = result.secure_url;
		 var imageid=req.body.imageid=result.public_id;
	var title=req.body.title;

	var body=req.body.body;
	var author={
		id: req.user._id,
		username:req.user.username
	};
		
	var newachievement={title:title,image:image,imageid:imageid,body:body,author:author};
		achievement.create(newachievement,function(err,newlycreated1){
		if(err){
			console.log(err)
		}else{
				res.redirect("/owner");
			}
		
		});
	});
}
});


	router.get("/skill",function(req,res){
		res.render("skill");
	})	
router.post("/education",middleware.isLoggedIn,upload.single('image'),function(req,res){
if(req.file){
	cloudinary.uploader.upload(req.file.path, function(result) {
		 var image=req.body.image = result.secure_url;
		 var imageid=req.body.imageid=result.public_id;
	var title=req.body.title;

	var body=req.body.body;
	var author={
		id: req.user._id,
		username:req.user.username
	};
		
	var newskill={title:title,image:image,imageid:imageid,body:body,author:author};
		skill.create(newskill,function(err,newlycreated111){
		if(err){
			console.log(err)
		}else{
				res.redirect("/owner");
			}
		
		});
	});
}
});



	router.get("/education",function(req,res){
		res.render("education");
	});

router.post("/owner",middleware.isLoggedIn,upload.single('image'),function(req,res){
if(req.file){
	cloudinary.uploader.upload(req.file.path, function(result) {
		 var image=req.body.image = result.secure_url;
		 var imageid=req.body.imageid=result.public_id;
	var title=req.body.title;

	var body=req.body.body;
	var author={
		id: req.user._id,
		username:req.user.username
	};
		
	var neweducation={title:title,image:image,imageid:imageid,body:body,author:author};
		education.create(neweducation,function(err,newlycreated112){
		if(err){
			console.log(err)
		}else{
				res.redirect("/owner");
			}
		
		});
	});
}
});


router.get("/message",function(req,res){
	message.find({},function(err,mess){
		if(err){
			
			console.log(err);
			return res.redirect("back");
			
		}
		else{
			
			res.render("message",{message:mess});
		}
	});
});


	router.post("/message",function(req,res){
		
	var name=req.body.name;
	var email=req.body.email;
	var message1=req.body.message;
	var subject=req.body.subject;
	var newmessage={name:name,email:email,message:message1,subject:subject};
		
		message.create(newmessage,function(err,newlycreated4){
		if(err){
			console.log(err)
		}else{
			
				res.redirect("/message");
			}
		
		});	
	});
		
	


	//////////////////////////////////////////////////////////////////////////////
	
	//////////////////////contact////////////////////////////////


	////////////////////projects////////////////////
router.get("/owner",function(req,res){
	var currentUser=req.user;
	owner.find({},function(err,owner){
		if(err){
		
			console.log(err);
			return res.redirect("back");
		}

	achievement.find({},function(err,achievement){
		if(err){
				
			console.log(err);
				return res.redirect("back");
		}

	contact.find({},function(err,contact){
		if(err){
			
			console.log(err);
			return res.redirect("back");
			
		}

	project.find({},function(err,project){
		if(err){
			
			console.log(err);
			return res.redirect("back");
		}
	skill.find({},function(err,skill){
		if(err){
			
			console.log(err);
			return res.redirect("back");
		}
	education.find({},function(err,education){
		if(err){
			
			console.log(err);
			return res.redirect("back");
		}
		else
		{
			
			res.render("test",{
			owner:owner,achievement:achievement,contact:contact,project:project,skill:skill,education:education,currentUser:currentUser});
                          }  
	});
	});
		
	});
	});
	});
	});
	});
module.exports=router;
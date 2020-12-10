var express=require("express");
var router=express.Router();
var owner=require("../models/owner");
var contact=require("../models/contact");
var project=require("../models/project");
var achievement=require("../models/achievement");
var education=require("../models/education");
var skill=require("../models/skill");
var middleware=require("../middleware");
var multer = require('multer');
var storage = multer.diskStorage({
  filename: function(req, file, callback) {
    callback(null, Date.now() + file.originalname);
  }
});
var imageFilter = function (req, file, cb) {
    // accept image files only
    if (!file.originalname.match(/\.(jpg|jpeg|png|gif)$/i)) {
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




router.get("/achievement/:id/editachievement",middleware.isLoggedIn,function(req,res){
	
	   	achievement.findById(req.params.id,function(err,foundachievement){
			
				res.render("editachievement",{achievement:foundachievement});
			
	});
		});
	

	//otherwise redirect
	//if not,redirect
	////

	


/////////update
router.put("/showachievement/:id",upload.single('image'),function(req,res){
	///find and update the current campground///
	////redirect somewhere

	 achievement.findById(req.params.id,function(err,achievement){
		  if (req.file) {
			   cloudinary.v2.uploader.destroy(achievement.imageid,function(err1){
				   if(err1){
            req.flash("error", err.message);
            res.redirect("back"); 
				   }else{
					   cloudinary.v2.uploader.upload(req.file.path,function(err,result){
						   if(err){
							   req.flash("error", err.message);
            res.redirect("back");
						   }else{
							  achievement.imageid = result.public_id;
                  achievement.image = result.secure_url;
				  achievement.title = req.body.achievement.title;
            achievement.body = req.body.achievement.body;
            achievement.save();
            req.flash("success","Successfully Updated!");
            res.redirect("/owner");  
						   }
					   });
				   }
			   });
		  }
		 else{
				  achievement.title = req.body.achievement.title;
            achievement.body = req.body.achievement.body;
            achievement.save();
            req.flash("success","Successfully Updated!");
            res.redirect("/owner");
              }
            
        
    });
});

	
           
///////////////////////////destroy campground router


router.get("/education/:id/editeducation",middleware.isLoggedIn,function(req,res){
	
	   	education.findById(req.params.id,function(err,foundeducation){
			
				res.render("editeducation",{education:foundeducation});
			
	});
		});
	

	//otherwise redirect
	//if not,redirect
	////

	


/////////update
router.put("/showeducation/:id",upload.single('image'),function(req,res){
	///find and update the current campground///
	////redirect somewhere

	 education.findById(req.params.id,function(err,education){
		  if (req.file) {
			   cloudinary.v2.uploader.destroy(education.imageid,function(err1){
				   if(err1){
            req.flash("error", err.message);
            res.redirect("back"); 
				   }else{
					   cloudinary.v2.uploader.upload(req.file.path,function(err,result){
						   if(err){
							   req.flash("error", err.message);
            res.redirect("back");
						   }else{
							  education.imageid = result.public_id;
                  education.image = result.secure_url;
				  education.title = req.body.education.title;
        	education.body = req.body.education.body;
            education.save();
            req.flash("success","Successfully Updated!");
            res.redirect("/owner");  
						   }
					   });
				   }
			   });
		  }
		 else{
				  education.title = req.body.education.title;
            education.body = req.body.education.body;
            education.save();
            req.flash("success","Successfully Updated!");
            res.redirect("/owner");
              }
            
        
    });
});

	
	 /////destroy campground router


	
////////////


router.get("/skill/:id/editskill",middleware.isLoggedIn,function(req,res){
	
	   	skill.findById(req.params.id,function(err,foundskill){
			
				res.render("editskill",{skill:foundskill});
			
	});
		});
	

	//otherwise redirect
	//if not,redirect
	////

	


/////////update
router.put("/showskill/:id",upload.single('image'),function(req,res){
	///find and update the current campground///
	////redirect somewhere

	 
	 skill.findById(req.params.id,function(err,skill){
		  if (req.file) {
			   cloudinary.v2.uploader.destroy(skill.imageid,function(err1){
				   if(err1){
            req.flash("error", err.message);
            res.redirect("back"); 
				   }else{
					   cloudinary.v2.uploader.upload(req.file.path,function(err,result){
						   if(err){
							   req.flash("error", err.message);
            res.redirect("back");
						   }else{
							  skill.imageid = result.public_id;
                  skill.image = result.secure_url;
				  skill.title = req.body.skill.title;
            skill.body = req.body.skill.body;
            skill.save();
            req.flash("success","Successfully Updated!");
            res.redirect("/owner");  
						   }
					   });
				   }
			   });
		  }
		 else{
				  skill.title = req.body.skill.title;
            skill.body = req.body.skill.body;
            skill.save();
            req.flash("success","Successfully Updated!");
            res.redirect("/owner");
              }
            
        
    });
});
	
///////////////////////////destroy campground router



	
////////////

router.get("/project/:id/editproject",middleware.isLoggedIn,function(req,res){
	
	   	project.findById(req.params.id,function(err,foundproject){
			
				res.render("editproject",{project:foundproject});
			
	});
		});
	

	//otherwise redirect
	//if not,redirect
	////

	


/////////update
router.put("/showproject/:id",upload.single('image'),function(req,res){
	///find and update the current campground///
	////redirect somewhere
 
	 project.findById(req.params.id,function(err,project){
		  if (req.file) {
			   cloudinary.v2.uploader.destroy(project.imageid,function(err1){
				   if(err1){
            req.flash("error", err.message);
            res.redirect("back"); 
				   }else{
					   cloudinary.v2.uploader.upload(req.file.path,function(err,result){
						   if(err){
							   req.flash("error", err.message);
            res.redirect("back");
						   }else{
							  project.imageid = result.public_id;
                  project.image = result.secure_url;
				  project.title = req.body.project.title;
            project.body = req.body.project.body;
            project.save();
            req.flash("success","Successfully Updated!");
            res.redirect("/owner");  
						   }
					   });
				   }
			   });
		  }
		 else{
				  project.title = req.body.project.title;
            project.body = req.body.project.body;
            project.save();
            req.flash("success","Successfully Updated!");
            res.redirect("/owner");
              }
            
        
    });
});
///////////////////////////destroy campground router


	
////////////


router.get("/owner/:id/editowner",middleware.isLoggedIn,function(req,res){
	
	   	owner.find({},function(err,foundowner){
			console.log(owner);
			
				res.render("editowner",{owner:foundowner});
			
	});
		});
	

	//otherwise redirect
	//if not,redirect
	////

	


/////////update
router.put("/form1/:id",upload.single('image'),function(req,res){
	///find and update the current campground///
	////redirect somewhere
owner.find({},function(err,owner){
	if(req.file){
		 cloudinary.v2.uploader.destroy(owner[0].imageid,function(err1){
			 if(err1){
			  req.flash("error", err.message);
            res.redirect("back");
		 }else{
			cloudinary.v2.uploader.upload(req.file.path,function(err,result){
			 if(err){
				  req.flash("error", err.message);
            res.redirect("back");
			 }else{
				 owner[0].imageid = result.public_id;
				   owner[0].image = result.secure_url;
				  owner[0].firstname=req.body.owner.firstname;
			owner[0].lastname=req.body.owner.lastname;
			owner[0].address=req.body.owner.address;
			owner[0].tagline=req.body.owner.tagline;
			owner[0].headingdescription=req.body.owner.headingdescription;
			owner[0].description=req.body.owner.description;
            owner[0].save();
            req.flash("success","Successfully Updated!");
            res.redirect("/owner");
			 }
		 });
	}
});
}
		   else{
		     owner[0].firstname=req.body.owner.firstname;
			owner[0].lastname=req.body.owner.lastname;
			owner[0].address=req.body.owner.address;
			owner[0].tagline=req.body.owner.tagline;
			owner[0].headingdescription=req.body.owner.headingdescription;
			owner[0].description=req.body.owner.description;
            owner[0].save();
            req.flash("success","Successfully Updated!");
            res.redirect("/owner");
		   }
});
});
		



router.get("/contact/:id/editcontact",middleware.isLoggedIn,function(req,res){
	
	   	contact.find({},function(err,foundcontact){
			
				res.render("editcontact",{contact:foundcontact});
			
	});
		});
	

	//otherwise redirect
	//if not,redirect
	////

	


/////////update
router.put("/contact/:id",upload.single('image'),function(req,res){
	///find and update the current campground///
	////redirect somewhere
 contact.find({},function(err,contact){
	 if(req.file){
		  cloudinary.v2.uploader.destroy(contact[0].imageid,function(err1){
			  if(err1){
            res.redirect("back");  
			  }else{
				      cloudinary.v2.uploader.upload(req.file.path,function(err,result){
						  if(err){
							 
            res.redirect("back");
						  }
						  else{
							 contact[0].imageid = result.public_id;
                 contact[0].image = result.secure_url;
				
          
	contact[0].email=req.body.contact.email;
				contact[0].facebook=req.body.contact.facebook;
				 contact[0].youtube=req.body.contact.youtube;
				contact[0].phone=req.body.contact.phone;
				contact[0].instagram=req.body.contact.instagram;
				contact[0].github=req.body.contact.github;
				contact[0].twitter=req.body.contact.twitter;
				contact[0].linkden=req.body.contact.linkden;
				
            contact[0].save();
            req.flash("success","Successfully Updated!");
            res.redirect("/owner"); 
						  }
					  });    
			  }
		  });
	 }
        else{
			contact[0].email=req.body.contact.email;
			contact[0].youtube=req.body.contact.youtube;
				contact[0].facebook=req.body.contact.facebook;
				contact[0].phone=req.body.contact.phone;
				contact[0].instagram=req.body.contact.instagram;
				contact[0].github=req.body.contact.github;
				contact[0].twitter=req.body.contact.twitter;
				contact[0].linkden=req.body.contact.linkden;
				
            contact[0].save();
            req.flash("success","Successfully Updated!");
            res.redirect("/owner");
		}
				
 });
});
	////////
///////
module.exports=router;
var express=require("express");
var app=express();
var bodyparser=require("body-parser"),
	achievement=require("./models/achievement"),
	contact    =require("./models/contact"),
	owner    =require("./models/owner"),
	education    =require("./models/education"),
	skill    =require("./models/skill"),
	message1  =require("./models/message"),
	project    =require("./models/project"),
	flash     =require("connect-flash"),
	mongoose = require('mongoose'),
	methodoverride=require("method-override"),
	passport  =require("passport"),
	localstrategy=require("passport-local"),
	user        =require("./models/user");
		
var ownerRoutes=require("./routes/form");
	//commentRoutes	=require("./routes/comment"),*/
 var indexRoutes		=require("./routes/index");
var deleteRoutes        =require("./routes/delete");
var showRoutes          =require("./routes/show");
var editRoutes          =require("./routes/edit");



mongoose.connect("mongodb+srv://salilshrivastava:fillpasswordhere@cluster0.zpuk6.mongodb.net/portfoloi_jiju?retryWrites=true&w=majority",{
	useNewUrlParser :true,
	useCreateIndex:true,
	useUnifiedTopology:true
}).then(()=>{
	console.log("Connected to DB!");
}).catch(err=>{
	console.log("Error : ",err.message);
});


///passport configuration

app.use(require("express-session")({
	secret:"ONCES AGAIN RUSTY WINS CUTEST DOG",
	resave:false,
	saveUninitialized:false
}));
app.use(methodoverride("_method"));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());
passport.use(new localstrategy(user.authenticate()));
passport.serializeUser(user.serializeUser());
passport.deserializeUser(user.deserializeUser());





//schema setup



app.use(bodyparser.urlencoded({extended:true}));
//app.use(express.static("public"));// for style adding to all templets
app.set("view engine","ejs");// for not using alwys  .ejs in every file...
app.use(express.static(__dirname + "/public"));



app.use(function(req,res,next){
	res.locals.currentUser=req.user;
	res.locals.error=req.flash("error");
	res.locals.success=req.flash("success");
	next();
});



app.use("/",indexRoutes);
app.use("/",ownerRoutes);
app.use("/",deleteRoutes);
app.use("/",showRoutes);
app.use("/",editRoutes);
//app.use("/campground/:id/comments",commentRoutes);
//*/


/*app.get("/",function(req,res){
  res.render("test/test");
 })*/
app.listen(process.env.PORT,process.env.IP,function(){
	console.log(" SERVER STARTED");
})
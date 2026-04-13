import express from "express";

const app = express();


// take JSON request body → convert to JavaScript object
app.use(express.json());


// parse URL-encoded form data
app.use(express.urlencoded({extended:true}));


// setup EJS as view engine
app.set('view engine', 'ejs'); 


app.get("/",function(req,res,next)
{
    // res.send("Its working bro your doing a great job ,stay consistent");
    res.render("home");
});
app.listen(3000,()=>{
    console.log("Server is running on the link http://localhost:3000");
})

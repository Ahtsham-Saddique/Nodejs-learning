import express from 'express'

const app = express();

app.use(function(req,res,next)
{
  console.log("Request received");
 next();
})
app.use(function(req,res,next)
{
  console.log("Request received confirmation");
 next();
})

app.get('/', (req, res,next) => {
  res.send('Hello World')
  next();
})

app.get("/sham",(req,res,next)=>
{
  res.send("THis is the sham tech '/n' howw e can help you please");
  
  next();
})
;

app.use(function(req,res,next)
{
  console.log("Response received!!!!!!!!!!");
 
})
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000')
})
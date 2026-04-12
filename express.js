import express from "express";
const app =express();

app.use((req,res,next)=>{
  console.log("Request received");
  console.log(req.body);
  next();
});


/* Global middleware 2 */
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use((req, res, next) => {
  console.log("Request received confirmation");
  console.log(req.body);
  next();
});

/* ;Route: Home */
app.get("/", (req, res) => {
  
  console.log(req.body);
  res.send("Hello World");
});

/* Route: Sham */
app.get("/sham", (req, res) => {
  res.send("This is the sham tech how we can help you");
});
app.post("/data", (req, res) => {
  console.log(req.body);
  res.send("Data received");
});

/* Final middleware (runs only if no route matched) */

app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).send('Something broke!')
})


/* Start server */
app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
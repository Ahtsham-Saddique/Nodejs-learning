import express from "express";

const app = express();

/* Global middleware 1 */
app.use((req, res, next) => {
  console.log("Request received");
  next();
});

/* Global middleware 2 */
app.use((req, res, next) => {
  console.log("Request received confirmation");
  next();
});

/* Route: Home */
app.get("/", (req, res) => {
  res.send("Hello World");
});

/* Route: Sham */
app.get("/sham", (req, res) => {
  res.send("This is the sham tech how we can help you");
});

/* Final middleware (runs only if no route matched) */
app.use((req, res) => {
  console.log("Response cycle completed / route not found");
  res.status(404).send("Route not found");
});

/* Start server */
app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
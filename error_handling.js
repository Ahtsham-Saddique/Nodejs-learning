import express from "express";

const app = express();

/* Global middleware */
app.use((req, res, next) => {
  console.log("User requested");
  next();
});

/* Routes */
app.get("/", (req, res) => {
  res.send("Welcome to the Home page of Sham Tech");
});

app.get("/contact", (req, res) => {
  res.send("Contact page of Sham Tech");
});

app.get("/help", (req, res) => {
//   res.send("Help page of Sham Tech");

});

/* Error-handling middleware */
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

/* Server start */
app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
import express from 'express'

const app = express()

app.get('/', (req, res) => {
  res.send('Hello World')
})

app.get("/sham",(req,res)=>
{
  res.send("THis is the sham tech '/n' howw e can help you please");
  res.send(req);
})
;
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000')
})
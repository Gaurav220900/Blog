const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 4000;
const blogRoute = require('./Routes/Blog');
const cors = require('cors');

app.get('/', (req, res) => {
    res.send('request received successfully');
});

mongoose
  .connect("mongodb://localhost:27017/blog-app",{
  }).then(() => {
    console.log("DB Connected");
  })
  .catch((err) => {
    console.log(err);
  });
app.use(express.json());
app.use(blogRoute);

app.use(
   cors({
   origin: ["http://localhost:3000"],
 })
)

app.listen(port, () => {
    console.log(`server is listening on the port ${port}`);
});

const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 4000;
const blogRoute = require('./Routes/Blog');
const cors = require('cors');

app.get('/', (req, res) => {
    res.send('request received successfully');
});



const corsOptions ={
  origin:'http://localhost:3000', 
  credentials:true,            //access-control-allow-credentials:true
  optionSuccessStatus:200
}
app.use(cors(corsOptions));

app.use(express.json());
app.use(blogRoute);



app.listen(port, () => {
    console.log(`server is listening on the port ${port}`);
});

mongoose
  .connect("mongodb://127.0.0.1:27017/blog-app",{
  }).then(() => {
    console.log("DB Connected");
  })
  .catch((err) => {
    console.log(err);
  });

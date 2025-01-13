const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 3000;

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

app.listen(port, () => {
    console.log(`server is listening on the port ${port}`);
});

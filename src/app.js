const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
require("./db/conn");
const Student = require("./models/students");
const studentRouter = require("./routers/student");


// get req body from postman to console
app.use(express.json());
// register router
app.use(studentRouter);



app.listen(port, () => {
  console.log(`Connection is setup at ${port}`);
});

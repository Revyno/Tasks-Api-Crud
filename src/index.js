const express = require("express");
const tasksRouter = require("./tasks/tasks.router.js");
const {mongose} = require ("mongoose");

const app = express();
const port = 3001;
// mongose.connect("mongodb://localhost:27017/cafe", {useNewUrlParser: true, useUnifiedTopology: true});
//  Defining Routes
app.use("/", tasksRouter);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.get("/tasks", (req, res) => {
  res.send("Welcome to the Back End Cafe!");
});


const middleware = (req, res, next) => {
  req.info = { appName: "This Back End  Cafe", author: "Revellio" };
}

app.use(middleware);

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
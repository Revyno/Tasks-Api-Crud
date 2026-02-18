const express = require("express");

/*Fire the router function*/
const tasksRouter = express.Router();

// Get All Tasks
tasksRouter.get("/tasks", (req, res) => res.send("All Tasks ma men"));

// POST Create a task
tasksRouter.post("/tasks", (req, res) => {
    console.log(req.body);
    return res.send("Task created successfully");
});

// export the task router
module.exports = tasksRouter;
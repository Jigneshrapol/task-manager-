const { createtask, fetchalltask, UpadteById, DeleteById } = require("../Controllers/TaskController");

const TaskRoute=require("express").Router();

//CRUD - OPERATIONS

TaskRoute.get("/",fetchalltask)
TaskRoute.post("/",createtask)
TaskRoute.put("/:id",UpadteById)
TaskRoute.delete("/:id",DeleteById)
module.exports=TaskRoute;

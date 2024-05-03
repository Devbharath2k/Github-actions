const express = require("express");
const router = express.Router();
const TaskModule =require("../TaskControl/Control.js");

router.post("/api/post", TaskModule.createTask)
router.get("/api/get", TaskModule.getTask)


module.exports = router
const express = require("express");
const router = express.Router();
const TaskModule =require("../TaskControl/Control.js");

router.post("/api/post", TaskModule.CreateMethod)
router.get("/api/get", TaskModule.gettingMethod)


module.exports = router
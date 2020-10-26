let express = require("express");

let router = express.Router();

let mongoose = require("mongoose");

//connect to contact model

let Contact = require("../models/contact");
let contactController = require("../controllers/contact");
//get route for Contact List Page -READ opeartion
router.get("/", contactController.displayContactList);

//get route for displaying Contact ADD Page -CREATE opeartion
router.get("/add", contactController.displayAddPage);

//POST route for processing Contact List Page -create opeartion
router.post("/add", contactController.processAddPage);

//get route for displaying Contact EDIT Page -update opeartion
router.get("/edit/:id", contactController.displayEditPage);

//POST route for processing Contact EDIT Page -update opeartion
router.post("/edit/:id", contactController.processEditPage);

//get route to perform Contact deletion opeartion
router.get("/delete/:id", contactController.performDelete);

module.exports = router;

let express = require("express");

let router = express.Router();

let mongoose = require("mongoose");

//connect to contact model

let Contact = require("../models/contact");

//get route for Contact List Page -READ opeartion
router.get("/", (req, res, next) => {
  Contact.find((err, contactList) => {
    if (err) {
      return console.error(err);
    } else {
      //console.log(ContactList);
      res.render("contact", {
        title: "contact-list",
        ContactList: contactList,
      });
    }
  });
});

module.exports = router;

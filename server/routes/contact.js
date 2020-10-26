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
      res.render("contact/list", {
        title: "contact-list",
        ContactList: contactList,
      });
    }
  });
});

//get route for displaying Contact ADD Page -CREATE opeartion
router.get("/add", (req, res, next) => {
  res.render("contact/add", {
    title: "contact-list",
  });
});

//POST route for processing Contact List Page -create opeartion
router.post("/add", (req, res, next) => {
  let newContact = Contact({
    name: req.body.name,
    number: req.body.number,
    email: req.body.email,
  });
  Contact.create(newContact, (err, Contact) => {
    if (err) {
      console.log(err);
      res.end(err);
    } else {
      res.redirect("/contact-list");
    }
  });
});

//get route for displaying Contact EDIT Page -update opeartion
router.get("/edit/:id", (req, res, next) => {
  let id = req.params.id;

  Contact.findById(id, (err, contactToEdit) => {
    if (err) {
      console.log(err);
      res.end(err);
    } else {
      res.render("contact/edit", {
        title: "Edit Contact",
        Contact: contactToEdit,
      });
    }
  });
});

//POST route for processing Contact EDIT Page -update opeartion
router.post("/edit/:id", (req, res, next) => {
  let id = req.params.id;

  let updatedContact = Contact({
    _id: id,
    name: req.body.name,
    number: req.body.number,
    email: req.body.email,
  });
  Contact.updateOne({ _id: id }, updatedContact, (err) => {
    if (err) {
      console.log(err);
      res.end(err);
    } else {
      res.redirect("/contact-list");
    }
  });
});

//get route to perform Contact deletion opeartion
router.get("/delete/:id", (req, res, next) => {
  let id = req.params.id;

  Contact.remove({ _id: id }, (err) => {
    if (err) {
      console.log(err);
      res.end(err);
    } else {
      res.redirect("/contact-list");
    }
  });
});

module.exports = router;

let express = require("express");
let router = express.Router();

module.exports.displayHomePage = (req, res, next) => {
  res.render("index", { title: "Home" });
};

module.exports.displayAboutPage = function (req, res, next) {
  res.render("about", { title: "About" });
};

module.exports.displayProjectsPage = function (req, res, next) {
  res.render("projects", { title: "Projects" });
};

module.exports.displayServicesPage = function (req, res, next) {
  res.render("services", { title: "Services" });
};

module.exports.displayContactPage = function (req, res, next) {
  res.render("contacts", { title: "Contact" });
};

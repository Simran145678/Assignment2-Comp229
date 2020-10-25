var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Home" });
});

router.get("/home", function (req, res, next) {
  res.render("index", { title: "Home" });
});

/* GET About page. */
router.get("/about", function (req, res, next) {
  res.render("about", { title: "About" });
});

/* GET services page. */
router.get("/services", function (req, res, next) {
  res.render("services", { title: "Services" });
});

/* GET Projects page. */
router.get("/projects", function (req, res, next) {
  res.render("projects", { title: "Projects" });
});

/* GET Contact us page. */
router.get("/contact", function (req, res, next) {
  res.render("contact", { title: "Contact" });
});

/* GET Contact us page. */

module.exports = router;

let express = require("express");
let router = express.Router();

let indexController = require("../controllers/index");
/* GET home page. */
router.get("/", indexController.displayHomePage);

router.get("/home", indexController.displayHomePage);

/* GET About page. */
router.get("/about", indexController.displayAboutPage);

/* GET services page. */
router.get("/services", indexController.displayServicesPage);

/* GET Projects page. */
router.get("/projects", indexController.displayProjectsPage);

/* GET Contact us page. */
router.get("/contacts", indexController.displayContactPage);

/* GET Contact us page. */

module.exports = router;

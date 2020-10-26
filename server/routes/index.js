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

//Get route for displaying login Page
router.get("/login", contactController.displayAddPage);

//POST route for processing login Page
router.post("/login", contactController.processAddPage);

//Get route for displaying register page
router.get("/register", contactController.displayAddPage);

//POST route for processing register page
router.post("/register", contactController.processAddPage);

//get route to perform logout
router.get("/logout", contactController.performDelete);

module.exports = router;

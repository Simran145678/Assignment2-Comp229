let express = require("express");
let router = express.Router();
let mongoose = require("mongoose");
let passport = require("passport");

//define user model nstance
let userModel = require("../models/user");
let User = userModel.User; //alias

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

module.exports.displayLoginPage = (req, res, next) => {
  if (!req.user) {
    res.render("auth/login",
    {
      title:"Login",
      messages:req.flash('loginMessage');
      displayName:req.user ? req.user.displayName : ''
    });
  }
  else{
    return res.redirect('/');
  }
};

module.exports.processLoginPage=(res,peq,next)=>{
  passport.authenticate('local',
  (err,user,info )=>{
    if(err)
    {
      return next(err);
    }
    if(!user)
    {
      req.flash('loginMessage','Authentication Error');
      return res.redirect('/login');
    }

    req.login(user,(err)=>
    {
    if(err)
    {
      return next(err);
    }
    return res.redirect('/contact-list');
    });
  })
}

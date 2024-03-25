const express = require("express");
const collection = require('./mongo');
const cors = require('cors');
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use(cors())


app.get('/', cors(), (req, res) => {

})

/* Is Loggedin Middleware */
function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) {
      return next();
    }
    res.redirect('/');
  
  }

app.post('/login', passport.authenticate("local", {
    successRedirect: "/profile",
    failureRedirect: "/login",
    failureFlash:true
  }), function (req, res, next) {
  // res.send('<h1 style="text-align:center;">Welcome to profile</h1>')
  });

  app.get('/logout', function (req, res, next) {
    req.logout(function (err) {
      if (err) return (err);
      res.redirect('/login')
    })
  });

  app.post('/register', function (req,res) {
    const userData = new userModel({ 
      username:req.body.username,
      email:req.body.email,
      fullname:req.body.fullname, 
    })
    
    console.log(req.body)
    userModel.register(userData, req.body.password)
      .then(function () {
        passport.authenticate("local")(req,res, function () {
          res.redirect("/profile");
        })
      })
  });
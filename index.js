var express = require("express");
var app = express();
var path = require("path");
//const Sequelize = require('sequelize');
/*
 const sequelize = new Sequelize("test","root","",{
 host:'localhost',
 dialect:'mysql'
 });
 */

var sequelize = require("./models/config");
var Info = require("./models/Info.js");

// set the view engine to ejs
//create folder views
app.set('view engine', 'ejs');


//it's same
//app.use("/static", express.static(path.join(__dirname)+"/static"));
app.use("/static", express.static(path.join(__dirname, "static")));
app.use('/bower_components', express.static(path.join(__dirname, 'bower_components')));
/*
 app.use(require('./routes/index'));
 app.use(require('./routes/speakers'));
 */

app.get("/", function (req, res) {
    Info.findById(1)
        .then(function (info) {
            res.render('pages/index', {data: info.dataValues, page_name: ""});
        });
    /*Info.create({
     title: "Express Js with mysql",
     description: "Kick Start for ExpressJs"
     }).then(function (model) {
     console.log(JSON.stringify(model));
     res.render('pages/index', {data: model.dataValues, page_name: ""});
     }).catch(function (err) {
     console.log(err);
     });*/
});
app.get("/about", function (req, res) {
    var About = require("./models/about.js");
    About.findById(1).then(function (model) {
        console.log(model.dataValues);
        res.render('pages/about', {data: model.dataValues, page_name: ""});
    });
});

app.get("/login", function (req, res) {
    res.render('pages/login', {data: {page_name: "login"}});
    // res.render('pages/login', {page_name: "login"});
});
app.post("/login", function (req, res) {
    res.render('pages/login', {page_name: "login"});
});


app.listen(3000, function () {
    console.log("express running on port 3000" + path.join(__dirname, "static"));
});
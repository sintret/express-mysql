var express = require("express");
var app = express();
var path = require("path");
var passport = require('passport');
var Strategy = require('passport-local').Strategy;

// Use application-level middleware for common functionality, including
// logging, parsing, and session handling.
//app.use(require('morgan')('combined'));
app.use(require('cookie-parser')());
app.use(require('body-parser').urlencoded({extended: true}));
app.use(require('express-session')({secret: 'keybfgdgfdcat', resave: false, saveUninitialized: false}));
//it's same
//app.use("/static", express.static(path.join(__dirname)+"/static"));
app.use("/static", express.static(path.join(__dirname, "static")));
app.use('/bower_components', express.static(path.join(__dirname, 'bower_components')));

/*
 app.use(require('./routes/index'));
 app.use(require('./routes/speakers'));
 */
// Initialize Passport and restore authentication state, if any, from the
// session.
app.use(passport.initialize());
app.use(passport.session());
app.use(function (req, res, next) {
    app.locals.login = req.isAuthenticated();
    next();
});


var Info = require("./models/Info.js");
var User = require("./models/User.js");

// set the view engine to ejs
//create folder views
app.set('view engine', 'ejs');


app.get("/", function (req, res, next) {
    Info.findById(1)
        .then(function (info) {
            res.render('pages/index', {data: info.dataValues, page_name: ""});
        });
});

app.get("/blog", function (req, res) {
    var Article = require("./models/Article.js");
    var limit = 10;
    var offset = 0;
    Article.findAndCountAll()
        .then(function (data) {
            var page = req.query.page || 1;
            var pages = Math.ceil(data.count / limit);
            offset = limit * (page - 1);
            Article.findAll({
                    //attributes: ['id', 'first_name', 'last_name', 'date_of_birth'],
                    limit: limit,
                    offset: offset,
                    $sort: {id: 1}
                })
                .then(function (articles) {
                    res.render('pages/blog', {
                        'results': articles,
                        'count': pages,
                        'currentPage':page,
                        page_name: "blog"
                    });
                });

        })

        .catch(function (error) {
            res.status(500).send(error.toString());
        });

});
app.get("/about", function (req, res) {
    var About = require("./models/About.js");
    About.findById(1).then(function (model) {
        console.log(model.dataValues);
        res.render('pages/about', {data: model.dataValues, page_name: "about"});
    });
});

passport.use(new Strategy(
    function (username, password, cb) {
        User.findOne({
            where: {username: username}
        }).then(function (user) {
            if (!user) {
                return cb(null, false);
            }
            if (user.password != password) {
                return cb(null, false);
            }
            return cb(null, user);
        });
    }));

passport.serializeUser(function (user, cb) {
    cb(null, user.id);
});

passport.deserializeUser(function (id, cb) {
    User.findById(id).then(function (user) {
        if (!user) {
            return cb(err);
        }
        cb(null, user);
    });
});


app.get("/login", function (req, res) {
    if (req.isAuthenticated())
        res.redirect('/profile');
    else
        res.render('pages/login', {data: {page_name: "login"}});
});

app.post('/login',
    passport.authenticate('local', {failureRedirect: '/login'}),
    function (req, res) {
        res.redirect('/profile');
    });

app.get('/profile', loggedIn,
    require('connect-ensure-login').ensureLoggedIn(),
    function (req, res, next) {
        console.log(req);
        res.render('pages/profile', {user: req.user});
    });


app.get('/logout',
    function (req, res) {
        req.logout();
        res.redirect('/');
    });

function loggedIn(req, res, next) {
    if (req.user) {
        next();
    } else {
        res.redirect('/login');
    }
}

app.listen(3000, function () {
    console.log("express running on port 3000" + path.join(__dirname, "static"));
});
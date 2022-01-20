require("dotenv").config();
require("./models");
require('./config/passport');

const express = require('express');
const methodOverride = require('method-override');
const morgan = require('morgan');
const session = require('express-session');
const passport = require('passport');

// Internal Modules //
const keyboardsRouter = require('./routes/keyboards')
const notesRouter = require('./routes/notes')
const indexRoutes = require('./routes/index');

// Instanced Module //
const app = express();

// Configuration //
const PORT = process.env.PORT || 4000; //for deployment in heroku
app.set("view engine", "ejs");

// Middleware + Logger//
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false })); //this renders create post.
app.use(express.static('public'));
app.use(methodOverride("_method"));
app.use((req, res, next) => {
    console.log(req.url, req.method);
    next();
});

// Session Middleware //
app.use(
    session({
      secret: "keyboardyBOI!!",
      resave: false.valueOf,
      saveUninitialized: true,
    })
  );

// Passport Middleware //
app.use(passport.initialize());
app.use(passport.session());

//Internal Routes
app.use("/keyboards", keyboardsRouter);
app.use("/", notesRouter);
app.use('/', indexRoutes);

// Home Route
app.get('/', (req, res) => { //Renders Landing Page
    res.send("index",);
});
//404 Route
app.get((req, res) => {
	res.send("404! Error! Page not found :(");
});

//* ------------- Server Listener ---------------------*//
app.listen(PORT, () => console.log(`YO! Server is connected at ${PORT}`))

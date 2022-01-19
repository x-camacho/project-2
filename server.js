require("dotenv").config();
require("./models");
require('./config/passport');
// External Modules //
const express = require('express');
const methodOverride = require('method-override');
const morgan = require('morgan');
const session = require('express-session');
const passport = require('passport');

// Internal Modules //
const routes = require('./routes')
const keyboardsRouter = require('./routes/keyboards')
const notesRouter = require('./routes/notes')
// Instanced Module //
const app = express();

// Configuration //
const PORT = process.env.PORT || 4000; //for deployment in heroku
app.set("view engine", "ejs");

// Middleware //
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false })); //this renders create post.
app.use(express.static('public'));
app.use(methodOverride("_method"));

// Passport Middleware //
app.use(passport.initialize());
app.use(passport.session());

// Logger //
app.use((req, res, next) => {
    console.log(req.url, req.method);
    next();
});

//*=== Routes & Controllers =====*//
// Home Route
app.get('/', (req, res) => { //Renders Landing Page
    res.render("index");
});
//404 Route
app.get((req, res) => {
	res.send("404! Error! Page not found :(");
});
//Internal Routes
app.use("/keyboards", keyboardsRouter);
app.use("/", notesRouter);

// Server Listener //
app.listen(PORT, () => console.log(`YO! Server is connected at ${PORT}`))



// DATABASE_URL= mongodb+srv://keybonk:ThoccProvider123@project0.slydr.mongodb.net/Keyboards?retryWrites=true&w=majority
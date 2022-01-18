require("dotenv").config();
require("./models");
// External Modules //
const express = require('express');
const methodOverride = require('method-override');
const morgan = require('morgan')

// Internal Modules //
const routes = require('./routes')

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

const keyboardsRouter = require('./routes/keyboards')
const notesRouter = require('./routes/notes')

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
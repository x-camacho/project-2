require("dotenv").config();
require("./models");
// External Modules //
const express = require('express');
const methodOverride = require('method-override');

const keyboardsRouter = require('./routes/keyboards')

// Internal Modules //
const routes = require('./routes')

// Instanced Module //
const app = express();

// Configuration //
const PORT = process.env.PORT || 4000; //for deployment in heroku
app.set("view engine", "ejs");

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

// Server Listener //
app.listen(PORT, () => console.log(`YO! Server is connected at ${PORT}`))

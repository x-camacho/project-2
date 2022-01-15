require("dotenv").config();

// External Modules //
const express = require('express');

// Instanced Module //
const app = express();

// Configuration //
const PORT = process.env.PORT || 4000; //for deployment in heroku
app.set("view engine", "ejs");

// Internal Routes //
app.get('/', (req, res) => { //Renders Landing Page
    res.render("index");
});

// Server Listener //
app.listen(PORT, () => console.log(`YO! Server is connected at ${PORT}`))

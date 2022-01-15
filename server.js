require("dotenv").config();
/* ==== External Modules ==== */
const express = require("express");

/* ==== Internal Modules ==== */


/* ==== Instanced Modules  ==== */


/* ====  Configuration  ==== */
const PORT = 4000;
app.set("view engine", "ejs");

/* ====  Middleware  ==== */


/* ====  Routes & Controllers  ==== */


/* ====  Server Listener  ==== */
app.listen(PORT, () => {
    console.log(`App is live at http://localhost:${PORT}`);
});
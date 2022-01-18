const express = require("express");
const router = express.Router();
const notesCtrl = require("../controllers/notes");

router.post("/keyboards/:id/notes", notesCtrl.create);
router.delete("/notes/:id", notesCtrl.destroy);

module.exports = router;
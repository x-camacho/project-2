const express = require("express");
const { notes } = require("../controllers");
const router = express.Router();
const notesCtrl = require("../controllers/notes");

router.post("/keyboards/:id/notes", notesCtrl.create);
router.put("/:id", notesCtrl.update);
router.delete("/notes/:id", notesCtrl.destroy);

module.exports = router;
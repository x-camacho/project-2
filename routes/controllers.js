const router = require("express").Router();
const ctrl = require("../controllers");

//routes
router.get("/", ctrl.articles.idx);
router.get("/:id", ctrl.articles.show);
router.post("/", ctrl.articles.create);
router.put("/:id", ctrl.articles.update);
router.delete("/:id", ctrl.articles.destroy);
router.get("/:id/edit", ctrl.articles.edit);

module.exports = router;
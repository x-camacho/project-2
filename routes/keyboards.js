const router = require("express").Router();
const ctrl = require("../controllers");

//routes
router.get("/", ctrl.keyboards.index);
router.get("/new", ctrl.keyboards.new)
router.get("/:id", ctrl.keyboards.show);
router.post("/", ctrl.keyboards.create);
router.put("/:id", ctrl.keyboards.update);
router.delete("/:id", ctrl.keyboards.destroy);
router.get("/:id/edit", ctrl.keyboards.edit);

module.exports = router;
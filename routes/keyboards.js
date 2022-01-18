const router = require("express").Router();
const ctrl = require("../controllers");

//routes
router.get("/", ctrl.Keyboards.index);
router.get("/new", ctrl.Keyboards.new)
router.get("/:id", ctrl.Keyboards.show);
router.post("/", ctrl.Keyboards.create);
router.put("/:id", ctrl.Keyboards.update);
router.delete("/:id", ctrl.Keyboards.destroy);
router.get("/:id/edit", ctrl.Keyboards.edit);

module.exports = router;
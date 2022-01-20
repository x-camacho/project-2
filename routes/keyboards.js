const router = require("express").Router();
const ctrl = require("../controllers");

//routes
router.get("/", isLoggedIn, ctrl.Keyboards.index2);
router.get("/new", ctrl.Keyboards.new)
router.get("/:id", ctrl.Keyboards.show);
router.post("/", ctrl.Keyboards.create);
router.put("/:id", ctrl.Keyboards.update);
router.delete("/:id", ctrl.Keyboards.destroy);
router.get("/:id/edit", ctrl.Keyboards.edit);


// Insert this middleware for routes that require a logged in user
function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) return next();
  res.redirect("/auth/google");
}

module.exports = router;
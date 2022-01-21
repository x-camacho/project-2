const router = require("express").Router();
const ctrl = require("../controllers");
const Keyboarder = require('../models/keyboarder');
const Keyboard = require('../models/keyboard');

//routes
router.get("/", isLoggedIn, ctrl.Keyboards.index2);
router.get("/new", ctrl.Keyboards.new)
router.get("/:id", ctrl.Keyboards.show);
router.post("/", ctrl.Keyboards.create);
router.put("/:id", ctrl.Keyboards.update);
router.delete("/:id", ctrl.Keyboards.destroy);
router.get("/:id/edit", ctrl.Keyboards.edit);

// router.get('/keyboards', isLoggedIn, async (req, res) =>{
//   try {
//     const keyboards = await Keyboard.find({user: req.user.id})
//     res.render('keyboards', {
//       name: req.user.firstName,
//     })
//   } catch (err) {
//     console.log(err)
//   }
// }); 

// Insert this middleware for routes that require a logged in user
function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) return next();
  res.redirect("/auth/google");
}

module.exports = router;
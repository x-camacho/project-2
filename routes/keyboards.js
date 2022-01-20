const router = require("express").Router();
const ctrl = require("../controllers");

// //routes
router.get("/", ctrl.Keyboards.index);
router.get("/new", ctrl.Keyboards.new)
router.get("/:id", ctrl.Keyboards.show);
router.post("/", ctrl.Keyboards.create);
router.put("/:id", ctrl.Keyboards.update);
router.delete("/:id", ctrl.Keyboards.destroy);
router.get("/:id/edit", ctrl.Keyboards.edit);

//  For routes that require a logged in user
// function isLoggedIn(req, res, next) {
//     if (req.isAuthenticated()) return next();
//     res.redirect("/auth/google");
//   }
// // GET /students
// router.get('/students', isLoggedIn, studentsCtrl.index);

// // POST /facts
// // We will already have access to the logged in student on
// // the server, therefore do not use: /students/:id/facts
// router.post('/facts', isLoggedIn, studentsCtrl.addFact);

// // DELETE /facts/:id
// router.delete('/facts/:id', isLoggedIn, studentsCtrl.delFact);


module.exports = router;
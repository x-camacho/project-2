
const router = require('express').Router();
const keyboarderCtrl = require('../controllers/keyboarders');

// GET /users
router.get('/keyboarders', keyboarderCtrl.index);

function isLoggedIn(req, res, next) {
    if ( req.isAuthenticated() ) return next();
    res.redirect('/auth/google'); // login or you can change this to another location
}

// Delete / users/:id
router.delete('/users/:id', keyboarderCtrl.deleteUser)

// Update /users
router.put('/profile/:id', keyboarderCtrl.updateUser)

// Edit
// router.get('/profile/:id/edit', userCtrl.editUser)

module.exports = router;
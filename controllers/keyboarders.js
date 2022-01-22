const Keyboarder = require('../models/keyboarder')
const keyboards = require('./keyboards')

module.exports = {
    index,
    deleteUser,
    updateUser
}

async function index(req, res) {
    try {
        const keyboarder = await Keyboarder.find({

        })
        res.render('keyboards/keyboarders', {
            keyboarder,
            user: req.user,
        })
    } catch (err) {
        console.log(err)
    }
}

async function deleteUser(req, res) {
    try {
        await Keyboarder.findByIdAndRemove(req.params.id)
        res.redirect('/keyboarders')
    } catch (err) {
        console.log(err)
        res.redirect('/keyboarders')
    }

}

async function updateUser(req, res) {
    
    try {
        await Keyboarder.findByIdAndUpdate(req.params.id, req.body, {
            new: true
        })
        res.redirect('/keyboarders')
    } catch (err) {
        console.log(err)
        res.redirect('/keyboarders')

    }
}



async function editUser(req, res) {
    try {

        const user = await Keyboarder.findById(req.params.id)
        res.render('keyboarders', {
            user
        })
        res.render('/keyboarders')

    } catch (err) {
        console.log(err)
        res.render('/keyboarders')
    }
}
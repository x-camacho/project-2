const Keyboard = require("../models/keyboard");

function create(req, res) {
    Keyboard.findById(req.params.id, function (err, keyboard) {
      keyboard.notes.push(req.body);
      keyboard.save(function (err) {
        res.redirect(`/keyboards/${keyboard._id}`);
      });
    });
  }

  // Delete
  const destroy = (req, res) => {
    Keyboard.findOne({"notes._id":req.params.id}, function(err,keyboard){
      const noteDoc = keyboard.notes.id(req.params.id);
      noteDoc.remove();
      keyboard.save(function(err){
        res.redirect(`/keyboards/${keyboard._id}`);
      });
    });
  }

module.exports = {
  create,
  destroy,
};

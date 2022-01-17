const Keyboard = require('../models/keyboard')
const db = require("../models");

// Index
// function index(req, res) {
//     db.keyboards.find({}, function(err, keyboards) {
//       res.render('keyboards/index', { name: 'All Keyboards', keyboards });
//     });
//   }

  const index = (req, res) => {
    db.keyboards.find({}, function (err, allKeyboards) {
        if (err) return res.send(err);
        const context = {keyboards: allKeyboards};
        console.log(context)
        return res.render("keyboards/index", context);
    });
};

// Show
function show(req, res) {
    db.keyboards.findById(req.params.id, function(err, keyboard) {
      res.render('keyboards/show', { name: 'Keyboard Detail', keyboard });
    });
  }

// New
function newKeyboards(req, res) {
    res.render('keyboards/new', { name: 'Add Keyboard' });
  }

// Create
// function create(req, res) {
//    db.keyboards(req.body);
//     keyboard.save(function(err) {
//       if (err) return res.redirect('/keyboards/new');
//       // for now, redirect right back to new.ejs
//       res.redirect('/keyboards');
//     });
//   }

  const create = (req, res) => {
    db.keyboards.create(req.body, function(err, createKeyboard) {
      if(err) return res.send(err);
      return res.redirect("/keyboards");
    });
};

// Edit
const edit = (req, res) => {
	db.keyboards.findById(req.params.id, (err, foundKeyboards) => {
		if (err) return res.send(err);

		const context = { Keyboards: foundKeyboards };
		return res.render("keyboards/edit", context);
	});
};
// Update
const update = (req, res) => {
	db.keyboards.findByIdAndUpdate(
		req.params.id,
		{
			$set: {
				...req.body,
			},
		},
		{ new: true },
		(err, updatedKeyboards) => {
			if (err) return res.send(err);
			return res.redirect(`/keyboards/${updatedKeyboards._id}`);
		}
	);
};
// Delete
const destroy = (req, res) => {
	db.keyboards.findByIdAndDelete(req.params.id, (err, deletedKeyboards) => {
		if (err) return res.send(err);

		return res.redirect("/keyboards");
	});
};
module.exports = {
	index,
	show,
	create,
	new: newKeyboards,
	edit,
	update,
	destroy,
};

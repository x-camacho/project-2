const Keyboard = require('../models/keyboard');
const Keyboarder = require('../models/keyboarder');


function index(req, res) {
	Keyboarder.find({}, function(err, keyboarders) {
	  res.render('keyboards/index', { 
		keyboarders,
		user: req.user,
	   });
	   console.log(keyboarders);
	});
  }

//Index
  const index2 = (req, res) => {
    Keyboard.find({}, function (err, allKeyboards) {
        if (err) return res.send(err);
        const context = {keyboards: allKeyboards};
        console.log(context)
        return res.render("keyboards/index", context);
    });
};

// Show
function show(req, res) {
    Keyboard.findById(req.params.id, function(err, keyboard) {
      res.render('keyboards/show', { name: 'Keyboard Detail', keyboard });
    });
  }

// New
function newKeyboards(req, res) {
    res.render('keyboards/new', { name: 'Add Keyboard' });
  }

// Create
function create(req, res) {
    const keyboard = new Keyboard(req.body);
    console.log(keyboard)
    keyboard.save(function(err) {
      // one way to handle errors
      if (err) return res.redirect('/keyboards/new');
      // for now, redirect right back to new.ejs
      res.redirect('/keyboards');
    });
  }

//   const create = (req, res) => {
//     db.keyboards.create(req.body, function(err, createKeyboard) {
//       if(err) return res.send(err);
//       return res.redirect("/keyboards");
//     });
// };

// Edit
const edit = (req, res) => {
	Keyboard.findById(req.params.id, (err, foundKeyboards) => {
		if (err) return res.send(err);

		const context = { Keyboards: foundKeyboards };
		return res.render("keyboards/edit", context);
	});
};
// Update
const update = (req, res) => {
	Keyboard.findByIdAndUpdate(
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
	Keyboard.findByIdAndDelete(req.params.id, (err, deletedKeyboards) => {
		if (err) return res.send(err);

		return res.redirect("/keyboards");
	});
};
module.exports = {
	index,
	index2,
	show,
	create,
	new: newKeyboards,
	edit,
	update,
	destroy,
};

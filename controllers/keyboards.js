const Keyboard = require('../models/keyboard');
const keyboard = require('../models/keyboard');
const Keyboarder = require('../models/keyboarder');

////Index
// function index(req, res) {
// 	Keyboarder.find({}, function(err, keyboarders) {
// 	  res.render('keyboards/index', { 
// 		keyboarders,
// 		user: req.user,
// 	   });
// 	});
//   }

//Index2
  const index2 = (req, res) => {
    Keyboard.find({}, function (err, keyboards) {
        if (err) return res.send(err);
        const context = {
			keyboards,
			user: req.user,
		};
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
// function create(req, res) {
//     const keyboard = new Keyboard(req.body);
//     keyboard.save(function(err) {
//       if (err) return res.redirect('/keyboards/new');
//       res.redirect('/keyboards');
//     });
//   }

const create = (req,res) => {
    Keyboard.create(req.body, (err, createdKeyboard) => {
        if(err) return res.send(err);
        Keyboarder.findOne(createdKeyboard.keyboarder)
            .exec(function(err, foundKeyboarder){
                if(err) return res.send(err);
                console.log(foundKeyboarder, "found Keyboarder")
                // updating the author articles array
                createdKeyboard.createdBy.push(foundKeyboarder) //adds the article ot the array
                createdKeyboard.save(); //saves the relationship to the database and commits it to the meory 
                res.redirect("/keyboards");
            })
    })
}


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
	// index,
	index2,
	show,
	create,
	new: newKeyboards,
	edit,
	update,
	destroy,
};

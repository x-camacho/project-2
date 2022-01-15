const db = require("../models");

// Index
const idx = (req, res) => {
	db.Keyboards.find({}, function (err, allKeyboards) {
		if (err) return res.send(err);
		const context = { Keyboards: allKeyboards };
		return res.render("keyboards/index", context);
	});
};

// Show
const show = (req, res) => {
	console.log(req.params.id);
	db.Keyboards.findById(req.params.id, function (err, foundKeyboards) {
		if (err) return res.send(err);

		const context = { Keyboards: foundKeyboards };
		return res.render("keyboards/show", context);
	});
};

// New
const newKeyboards = (req, res) => {
	res.render("keyboards/new");
};

// Create
const create = (req, res) => {
	db.Keyboards.create(req.body, function (err, createdKeyboards) {
		if (err) return res.send(err);

		return res.redirect("/keyboards");
	});
};

// Edit
const edit = (req, res) => {
	db.Keyboards.findById(req.params.id, (err, foundKeyboards) => {
		if (err) return res.send(err);

		const context = { Keyboards: foundKeyboards };
		return res.render("keyboards/edit", context);
	});
};

// Update
const update = (req, res) => {
	db.Keyboards.findByIdAndUpdate(
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
	db.Keyboards.findByIdAndDelete(req.params.id, (err, deletedKeyboards) => {
		if (err) return res.send(err);

		return res.redirect("/keyboards");
	});
};

module.exports = {
	idx,
	show,
	create,
	newKeyboards,
	edit,
	update,
	destroy,
};

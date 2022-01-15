const db = require("../models");

// Index
const idx = (req, res) => {
	db.Keyboards.find({}, function (err, allKeyboards) {
		if (err) return res.send(err);
		const context = { Keyboards: allKeyboards };
		return res.render("Keyboards/index", context);
	});
};

// Show
const show = (req, res) => {
	console.log(req.params.id);
	db.Keyboards.findById(req.params.id, function (err, foundKeyboards) {
		if (err) return res.send(err);

		const context = { Keyboards: foundKeyboards };
		return res.render("Keyboards/show", context);
	});
};

// New
const newKeyboards = (req, res) => {
	res.render("Keyboards/new");
};

// Create
const create = (req, res) => {
	db.Keyboards.create(req.body, function (err, createdKeyboards) {
		if (err) return res.send(err);

		return res.redirect("/Keyboards");
	});
};

// Edit
const edit = (req, res) => {
	db.Keyboards.findById(req.params.id, (err, foundKeyboards) => {
		if (err) return res.send(err);

		const context = { Keyboards: foundKeyboards };
		return res.render("Keyboards/edit", context);
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
			return res.redirect(`/Keyboards/${updatedKeyboards._id}`);
		}
	);
};

// Delete
const destroy = (req, res) => {
	db.Keyboards.findByIdAndDelete(req.params.id, (err, deletedKeyboards) => {
		if (err) return res.send(err);

		return res.redirect("/Keyboards");
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

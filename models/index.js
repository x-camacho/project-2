//Connect the db to MongoDBAtlas
const mongoose = require('mongoose');
const keyboard = require('./keyboard');
const db = mongoose.connection;
const dbUrl = process.env.DATABASE_URL;
console.log("x")
mongoose
	.connect(dbUrl)
	.then(() =>
		console.log(
			`MongoDB successfully connected at ${db.host}:${db.port}! How dope!`
		)
	)
	.catch((err) => console.log(`MongoDB connection FAILED :( Error: ${err}`));

	module.exports = {
		Keyboards: require("./keyboard")
	}
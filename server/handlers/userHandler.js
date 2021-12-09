// library access

const { MongoClient } = require("mongodb");
const bcrypt = require("bcryptjs");
const { connect } = require("../routes/fishRoutes");
require("dotenv").config();

const { MONGO_URI } = process.env;

const options = {
	useNewUrlParser: true,
	useUnifiedTopology: true,
};

// handler for creating an account

// DON'T FORGET TO DO VALIDATION DUDE

const createAccount = async (req, res) => {
	const client = new MongoClient(MONGO_URI, options);

	try {
		await client.connect();
		console.log("connected");

		const db = client.db("users");

		const { username, email, password, firstName, lastName } = req.body;

		let hash = bcrypt.hashSync(password, 10);

		let bugs = [];
		let fish = [];
		let sea = [];
		let fossils = [];
		let art = [];
		let music = [];

		let newValue = {
			username,
			email,
			password: hash,
			firstName,
			lastName,
			collections: { bugs, fish, sea, fossils, art, music },
		};

		const account = await db.collection("accounts").insertOne(newValue);
		res.status(200).json({
			status: 200,
			data: username,
			message: "we have successfully hashed your password",
		});
	} catch (err) {
		res.status(500).json({
			status: 500,
			data: req.body,
			message: err.message,
		});
		console.log(err.message);
	} finally {
		client.close();
		console.log("disconnected");
	}
};

// handler for signing in

const signin = async (req, res) => {
	const client = new MongoClient(MONGO_URI, options);

	try {
		await client.connect();
		console.log("connected");

		const db = await client.db("users");
		const { username, password } = req.body;

		const user = await db.collection("accounts").findOne({
			username: username,
		});

		if (!user) {
			console.log("STOP RIGHT THERE!");
			return res.status(401).json({
				status: 401,
				data: req.body,
				message: "no user found",
			});
		}
		if (!bcrypt.compareSync(password, user.password)) {
			return res.status(401).json({
				status: 401,
				data: req.body,
				message: "password is incorrect",
			});
		}
		res.status(200).json({
			status: 200,
			data: username,
			message: "we're in chief",
		});
	} catch (err) {
		res.status(500).json({
			status: 500,
			data: req.body,
			message: err.message,
		});
		console.log(err.message);
	} finally {
		client.close();
		console.log("disconnected");
	}
};

module.exports = { createAccount, signin };

// library access

const { MongoClient, GridFSBucket, ObjectId } = require("mongodb");
const bcrypt = require("bcryptjs");
const { connect } = require("../routes/fishRoutes");
require("dotenv").config();

const { MONGO_URI } = process.env;

const options = {
	useNewUrlParser: true,
	useUnifiedTopology: true,
};

// handler for creating an account

const createAccount = async (req, res) => {
	const client = new MongoClient(MONGO_URI, options);

	try {
		await client.connect();
		console.log("connected");

		const db = client.db("users");

		const {
			username,
			email,
			password,
			confirmPassword,
			firstName,
			lastName,
		} = req.body;

		let hash = bcrypt.hashSync(password, 10);

		let bugs = [];
		let fish = [];
		let sea = [];
		let fossil = [];
		let art = [];
		let music = [];

		let newValue = {
			username,
			email,
			password: hash,
			firstName,
			lastName,
			collections: { bugs, fish, sea, fossil, art, music },
		};

		const user = await db.collection("accounts").findOne({
			username: username,
		});
		const foundEmail = await db.collection("accounts").findOne({
			email: email,
		});

		if (user) {
			return res.status(409).json({
				status: 409,
				data: req.body,
				message:
					"this email or username has already been registered with an account",
			});
		}

		if (foundEmail) {
			return res.status(409).json({
				status: 409,
				data: req.body,
				message:
					"this email or username has already been registered with an account",
			});
		}

		if (password !== confirmPassword) {
			res.status(409).json({
				status: 409,
				data: req.body,
				message: "the passwords entered do not match",
			});
		}

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
			data: user._id,
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

// handler for getting the current user after signin

const getUser = async (req, res) => {
	const client = new MongoClient(MONGO_URI, options);

	const id = req.params.id;

	try {
		await client.connect();
		console.log("connected");

		const db = await client.db("users");
		const user = await db
			.collection("accounts")
			.findOne({ _id: ObjectId(id) });
		res.status(200).json({
			status: 200,
			_id: user._id,
			username: user.username,
			bugs: user.collections.bugs,
			fish: user.collections.fish,
			sea: user.collections.sea,
			fossil: user.collections.fossil,
			art: user.collections.art,
			music: user.collections.music,
			message: "༼ つ ◕_◕ ༽つ console.log(user_data) ༼ つ ◕_◕ ༽つ",
		});
	} catch (err) {
		res.status(500).json({
			status: 500,
			data: {},
			message: err.message,
		});
		console.log(err.message);
	} finally {
		client.close();
		console.log("disconnected");
	}
};

// handler for adding item to current user's collection

const addToCollection = async (req, res) => {
	const client = new MongoClient(MONGO_URI, options);
	const category = req.params.category;
	const filename = req.params.id;
	const { _id } = req.body;
	const query = `collections.${category}`;

	try {
		await client.connect();

		const db = await client.db("users");
		const account = await db
			.collection("accounts")
			.updateOne(
				{ _id: ObjectId(_id) },
				{ $push: { [query]: filename } }
			);
		res.status(200).json({
			status: 200,
			data: filename,
			message: "item successfully added",
		});
	} catch (err) {
		res.status(500).json({
			status: 500,
			data: {},
			message: err.message,
		});
	} finally {
		client.close();
		console.log("disconnected");
	}
};

// handler for removing item to current user's collection

const removeFromCollection = async (req, res) => {
	const client = await new MongoClient(MONGO_URI, options);

	const category = req.params.category;
	const filename = req.params.id;
	const { _id } = req.body;
	const query = `collections.${category}`;

	try {
		await client.connect();
		const db = await client.db("users");
		const account = await db
			.collection("accounts")
			.updateOne(
				{ _id: ObjectId(_id) },
				{ $pull: { [query]: filename } }
			);
		res.status(200).json({
			status: 200,
			data: filename,
			message: "item successfully removed",
		});
	} catch (err) {
		res.status(500).json({
			status: 500,
			data: {},
			message: err.message,
		});
	} finally {
		client.close();
		console.log("disconnected");
	}
};

module.exports = {
	createAccount,
	signin,
	getUser,
	addToCollection,
	removeFromCollection,
};

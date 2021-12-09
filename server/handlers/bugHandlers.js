// mongodb access

const { MongoClient } = require("mongodb");

require("dotenv").config();

const { MONGO_URI } = process.env;

const options = {
	useNewUrlParser: true,
	useUnifiedTopology: true,
};

// handler for getting specific bug data

const getBug = async (req, res) => {
	const client = new MongoClient(MONGO_URI, options);
	const filename = req.params.id;

	try {
		await client.connect();
		console.log("connected");
		const db = client.db("items");
		const bug = await db
			.collection("bugs")
			.findOne({ "file-name": filename });

		res.status(200).json({
			status: 200,
			data: bug,
			message: "success",
		});
	} catch (err) {
		res.status(500).json({
			status: 500,
			message: err.message,
		});
		console.log(err.stack);
	} finally {
		client.close();
		console.log("disconnected");
	}
};

// handler for getting all bug data

const getAllBugs = async (req, res) => {
	const client = new MongoClient(MONGO_URI, options);

	try {
		await client.connect();
		console.log("connected");
		const db = client.db("items");
		const bugs = await db.collection("bugs").find().toArray();

		res.status(200).json({
			status: 200,
			data: bugs,
			message: "success",
		});
	} catch (err) {
		res.status(500).json({
			status: 500,
			message: err.message,
		});
		console.log(err.stack);
	} finally {
		client.close();
		console.log("disconnected");
	}
};

// handler for getting available bug data

const getAvailableBugs = async (req, res) => {
	const client = new MongoClient(MONGO_URI, options);

	const time = new Date();
	const hour = time.getHours();
	const month = time.getMonth() + 1;
	try {
		await client.connect();
		console.log("connected");

		const db = client.db("items");

		const bugs = await db
			.collection("bugs")
			.find({
				"availability.month-array-northern": month,
				"availability.time-array": hour,
			})
			.toArray();

		const bugList = bugs.map((bug) => {
			return {
				name: bug.name["name-USen"],
				filename: bug["file-name"],
				iconSrc: bug.icon_uri,
			};
		});

		res.status(200).json({
			status: 200,
			data: bugList,
			message: "all good chief",
		});
	} catch (err) {
		res.status(500).json({
			status: 500,
			message: err.message,
		});
	} finally {
		client.close();
		console.log("disconnected");
	}
};

module.exports = { getBug, getAllBugs, getAvailableBugs };

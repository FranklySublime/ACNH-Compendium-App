// mongodb access

const { MongoClient } = require("mongodb");

require("dotenv").config();

const { MONGO_URI } = process.env;

const options = {
	useNewUrlParser: true,
	useUnifiedTopology: true,
};

// handler for getting specific fish data
const getFish = async (req, res) => {
	filename = req.params.id;

	const client = new MongoClient(MONGO_URI, options);

	try {
		await client.connect();
		console.log("connected");
		const db = client.db("items");
		const fish = await db
			.collection("fish")
			.findOne({ "file-name": filename });

		res.status(200).json({
			status: 200,
			data: fish,
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

// handler for getting all fish data

const getAllFish = async (req, res) => {
	const client = new MongoClient(MONGO_URI, options);

	try {
		await client.connect();
		console.log("connected");

		const db = client.db("items");
		const fish = await db.collection("fish").find().toArray();
		const fishList = fish.map((fish) => fish.name["name-USen"]);

		res.status(200).json({
			status: 200,
			data: fish,
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

// handler for getting available fish data

const getAvailableFish = async (req, res) => {
	const client = new MongoClient(MONGO_URI, options);

	const time = new Date();
	const hour = time.getHours();
	const month = time.getMonth() + 1;
	try {
		await client.connect();
		console.log("connected");

		const db = client.db("items");

		const fish = await db
			.collection("fish")
			.find({
				"availability.month-array-northern": month,
				"availability.time-array": hour,
			})
			.toArray();

		const fishList = fish.map((fish) => {
			return {
				name: fish.name["name-USen"],
				filename: fish["file-name"],
				iconSrc: fish.icon_uri,
			};
		});

		res.status(200).json({
			status: 200,
			data: fishList,
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

module.exports = { getFish, getAllFish, getAvailableFish };

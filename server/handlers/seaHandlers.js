// mongodb access

const { MongoClient } = require("mongodb");

require("dotenv").config();

const { MONGO_URI } = process.env;

const options = {
	useNewUrlParser: true,
	useUnifiedTopology: true,
};

// handler for getting specific sea critter data

const getSea = async (req, res) => {
	filename = req.params.id;

	const client = new MongoClient(MONGO_URI, options);

	try {
		await client.connect();
		console.log("connected");
		const db = client.db("items");
		const fish = await db
			.collection("sea-critters")
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

// handler for getting all sea critter data

const getAllSea = async (req, res) => {
	const client = new MongoClient(MONGO_URI, options);

	try {
		await client.connect();
		console.log("connected");
		const db = client.db("items");
		const sea = await db.collection("sea-critters").find().toArray();

		res.status(200).json({
			status: 200,
			data: sea,
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

const getAvailableSea = async (req, res) => {
	const client = new MongoClient(MONGO_URI, options);

	const time = new Date();
	const hour = time.getHours();
	const month = time.getMonth() + 1;
	try {
		await client.connect();
		console.log("connected");

		const db = client.db("items");

		const sea = await db.collection("sea-critters").find().toArray();

		const timeArray = sea.filter((item) =>
			item.availability["time-array"].includes(hour)
		);

		const monthArray = timeArray.filter((item) =>
			item.availability["month-array-northern"].includes(month)
		);

		const seaList = monthArray.map((sea) => {
			return {
				name: sea.name["name-USen"],
				filename: sea["file-name"],
				iconSrc: sea.icon_uri,
			};
		});

		res.status(200).json({
			status: 200,
			data: sea,
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

module.exports = { getSea, getAllSea, getAvailableSea };

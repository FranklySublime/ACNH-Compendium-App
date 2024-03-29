// mongodb access

const { MongoClient } = require("mongodb");

require("dotenv").config();

const { MONGO_URI } = process.env;

const options = {
	useNewUrlParser: true,
	useUnifiedTopology: true,
};

// handler for getting specific art data

const getArt = async (req, res) => {
	filename = req.params.id;

	const client = new MongoClient(MONGO_URI, options);

	try {
		await client.connect();
		console.log("connected");
		const db = client.db("items");
		const art = await db
			.collection("art")
			.findOne({ "file-name": filename });

		res.status(200).json({
			status: 200,
			data: art,
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

// handler for getting all art data

const getAllArt = async (req, res) => {
	const client = new MongoClient(MONGO_URI, options);

	try {
		await client.connect();
		console.log("connected");

		const db = client.db("items");
		const art = await db.collection("art").find().toArray();

		res.status(200).json({
			status: 200,
			data: art,
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

module.exports = { getArt, getAllArt };

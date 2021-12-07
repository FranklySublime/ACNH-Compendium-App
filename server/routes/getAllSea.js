// mongodb access

const { MongoClient } = require("mongodb");

require("dotenv").config();

const { MONGO_URI } = process.env;

const options = {
	useNewUrlParser: true,
	useUnifiedTopology: true,
};

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

module.exports = { getAllSea };

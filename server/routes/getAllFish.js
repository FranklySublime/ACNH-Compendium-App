// mongodb access

const { MongoClient } = require("mongodb");

require("dotenv").config();

const { MONGO_URI } = process.env;

const options = {
	useNewUrlParser: true,
	useUnifiedTopology: true,
};

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

module.exports = { getAllFish };

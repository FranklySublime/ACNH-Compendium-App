// mongodb access

const { MongoClient } = require("mongodb");

require("dotenv").config();

const { MONGO_URI } = process.env;

const options = {
	useNewUrlParser: true,
	useUnifiedTopology: true,
};

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

module.exports = { getBug };

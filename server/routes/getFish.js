const request = require("request-promise");

const getFish = async (req, res, fishId) => {
	let id = null;
	if (req.params.id) {
		id = req.params.id;
	} else {
		id = fishId;
	}

	try {
		let options = {
			url: `http://acnhapi.com/v1/fish/${id}`,
			method: "GET",
		};
		let result = await request(options);
		// JSON.pasrse(result);
		return res.status(200).json({
			status: 200,
			data: JSON.parse(result),
			message: "success",
		});
	} catch (err) {
		res.status(500).json({
			status: 500,
			message: "bad request",
		});
		console.error(err);
	} finally {
		console.log("poof");
	}
};

module.exports = { getFish };

// const request = require("request-promise");

const { getFishTest } = require("./getFishTest");

let fishArray = [];
const getAllFish = async (req, res) => {
	try {
		for (let i = 1; i <= 80; i++) {
			let fish = await getFishTest(i).then((data) => data);
			// fishArray.push(getFishTest(i).then((data) => data));

			fishArray.push(fish["file-name"]);
		}
		res.status(200).json({
			status: 200,
			data: fishArray,
			message: "we're in boys",
		});
	} catch (err) {
		console.log("ERROR", err);
	}
};

// console.log("GET ALL FISH:",
// getAllFish().then((data) => console.log(data));
// );

// getAllFish();

module.exports = { getAllFish };

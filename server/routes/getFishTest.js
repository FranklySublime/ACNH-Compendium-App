const request = require("request-promise");

const getFishTest = async (fishId) => {
	let id = fishId;

	try {
		let options = {
			url: `http://acnhapi.com/v1/fish/${id}`,
			method: "GET",
		};
		let result = await request(options);
		let data = JSON.parse(result);
		// JSON.pasrse(result);
		// console.log("NOT THE LOOP", JSON.parse(await result));
		return data;
	} catch (err) {
		console.log("oops");
	}
};

// getFishTest(2).then((data) => console.log(data));
module.exports = { getFishTest };

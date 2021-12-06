const path = require("path");
const express = require("express");
const morgan = require("morgan");

const { getFish } = require("./routes/getFish");
const { getAllFish } = require("./routes/getAllFish");

const PORT = 8000;

express()
	.use(express.json())
	.use(morgan("dev"))

	.use("/assets", express.static(path.join(__dirname, "assets")))

	// endpoints
	.get("/fish/:id", getFish)
	.get("/fish", getAllFish)

	.listen(PORT, function () {
		console.info("🌍 Listening on port " + PORT);
	});

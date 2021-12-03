const path = require("path");
const express = require("express");
const morgan = require("morgan");

const PORT = 8000;

express()
	.use(express.json())
	.use(morgan("dev"))

	.use("/assets", express.static(path.join(__dirname, "assets")))

	.listen(PORT, function () {
		console.info("🌍 Listening on port " + PORT);
	});

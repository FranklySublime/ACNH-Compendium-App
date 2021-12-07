const path = require("path");
const express = require("express");
const morgan = require("morgan");

// importing handlers
const { getFish } = require("./routes/getFish");
const { getAllFish } = require("./routes/getAllFish");
const { getBug } = require("./routes/getBug");
const { getAllBugs } = require("./routes/getAllBugs");
const { getSea } = require("./routes/getSea");
const { getAllSea } = require("./routes/getAllSea");
const { getArt } = require("./routes/getArt");
const { getAllArt } = require("./routes/getAllArt");
const { getFossil } = require("./routes/getFossil");
const { getAllFossils } = require("./routes/getAllFossils");
const { getMusic } = require("./routes/getMusic");
const { getAllMusic } = require("./routes/getAllMusic");

const PORT = 8000;

express()
	.use(express.json())
	.use(morgan("dev"))

	.use("/assets", express.static(path.join(__dirname, "assets")))

	// endpoints
	.get("/fish/:id", getFish)
	.get("/fish", getAllFish)
	.get("/bugs/:id", getBug)
	.get("/bugs", getAllBugs)
	.get("/sea/:id", getSea)
	.get("/sea", getAllSea)
	.get("/art/:id", getArt)
	.get("/art", getAllArt)
	.get("/fossil/:id", getFossil)
	.get("/fossil", getAllFossils)
	.get("/music/:id", getMusic)
	.get("/music", getAllMusic)

	.listen(PORT, function () {
		console.info("🌍 Listening on port " + PORT);
	});

const path = require("path");
const express = require("express");
const morgan = require("morgan");

// importing routes
const fishRouter = require("./routes/fishRoutes");
const bugRouter = require("./routes/bugRoutes");
const seaRouter = require("./routes/seaRoutes");
const artRouter = require("./routes/artRoutes");
const fossilRouter = require("./routes/fossilRoutes");
const musicRouter = require("./routes/musicRoutes");
const userRouter = require("./routes/userRoutes");

const PORT = 8000;

express()
	.use(express.json())
	.use(morgan("dev"))

	.use("/assets", express.static(path.join(__dirname, "assets")))

	// routes
	.use("/fish", fishRouter)
	.use("/bugs", bugRouter)
	.use("/sea", seaRouter)
	.use("/art", artRouter)
	.use("/fossil", fossilRouter)
	.use("/music", musicRouter)
	.use("/user", userRouter)

	.listen(PORT, function () {
		console.info("🌍 Listening on port " + PORT);
	});

const { Router } = require("express");

const {
	getBug,
	getAllBugs,
	getAvailableBugs,
} = require("../handlers/bugHandlers");

const bugRouter = Router();

// endpoints
bugRouter.get("/", getAllBugs);
bugRouter.get("/available", getAvailableBugs);
bugRouter.get("/:id", getBug);

module.exports = bugRouter;

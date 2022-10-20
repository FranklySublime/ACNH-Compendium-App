const { Router } = require("express");

const {
	getFish,
	getAllFish,
	getAvailableFish,
} = require("../handlers/fishHandlers");

const fishRouter = Router();

// endpoints
fishRouter.get("/", getAllFish);
fishRouter.get("/available", getAvailableFish);
fishRouter.get("/:id", getFish);

module.exports = fishRouter;

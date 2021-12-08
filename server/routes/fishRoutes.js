const { Router } = require("express");

const { getFish, getAllFish } = require("../handlers/fishHandlers");

const fishRouter = Router();

// endpoints
fishRouter.get("/:id", getFish);
fishRouter.get("/", getAllFish);

module.exports = fishRouter;

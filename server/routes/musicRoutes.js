const { Router } = require("express");

const { getMusic, getAllMusic } = require("../handlers/musicHandlers");

const musicRouter = Router();

// endpoints
musicRouter.get("/:id", getMusic);
musicRouter.get("/", getAllMusic);

module.exports = musicRouter;

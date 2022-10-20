const { Router } = require("express");

const { getArt, getAllArt } = require("../handlers/artHandlers");

const artRouter = Router();

// endpoints
artRouter.get("/:id", getArt);
artRouter.get("/", getAllArt);

module.exports = artRouter;

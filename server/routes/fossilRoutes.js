const { Router } = require("express");

const { getFossil, getAllFossils } = require("../handlers/fossilHandlers");

const fossilRouter = Router();

// endpoints
fossilRouter.get("/:id", getFossil);
fossilRouter.get("/", getAllFossils);

module.exports = fossilRouter;

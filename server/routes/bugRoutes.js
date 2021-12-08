const { Router } = require("express");

const { getBug, getAllBugs } = require("../handlers/bugHandlers");

const bugRouter = Router();

// endpoints
bugRouter.get("/:id", getBug);
bugRouter.get("/", getAllBugs);

module.exports = bugRouter;

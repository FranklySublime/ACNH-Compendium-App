const { Router } = require("express");

const { getSea, getAllSea } = require("../handlers/seaHandlers");

const seaRouter = Router();

// endpoints
seaRouter.get("/:id", getSea);
seaRouter.get("/", getAllSea);

module.exports = seaRouter;

const { Router } = require("express");

const {
	getSea,
	getAllSea,
	getAvailableSea,
} = require("../handlers/seaHandlers");

const seaRouter = Router();

// endpoints
seaRouter.get("/", getAllSea);
seaRouter.get("/available", getAvailableSea);
seaRouter.get("/:id", getSea);

module.exports = seaRouter;

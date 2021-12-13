const { Router } = require("express");

const {
	createAccount,
	signin,
	getUser,
	addToCollection,
} = require("../handlers/userHandlers");

const userRouter = Router();

// endpoints
userRouter.post("/signup", createAccount);
userRouter.post("/signin", signin);
userRouter.get("/:id", getUser);
userRouter.patch("/collection/:category/:id", addToCollection);

module.exports = userRouter;

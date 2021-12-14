const { Router } = require("express");

const {
	createAccount,
	signin,
	getUser,
	addToCollection,
	removeFromCollection,
} = require("../handlers/userHandlers");

const userRouter = Router();

// endpoints
userRouter.post("/signup", createAccount);
userRouter.post("/signin", signin);
userRouter.get("/:id", getUser);
userRouter.patch("/collection/:category/:id", addToCollection);
userRouter.delete("/collection/:category/:id", removeFromCollection);

module.exports = userRouter;

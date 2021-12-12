const { Router } = require("express");

const { createAccount, signin, getUser } = require("../handlers/userHandlers");

const userRouter = Router();

// endpoints
userRouter.post("/signup", createAccount);
userRouter.post("/signin", signin);
userRouter.get("/:id", getUser);

module.exports = userRouter;

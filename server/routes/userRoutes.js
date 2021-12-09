const { Router } = require("express");

const { createAccount, signin } = require("../handlers/userHandler");

const userRouter = Router();

// endpoints
userRouter.post("/signup", createAccount);
userRouter.post("/signin", signin);

module.exports = userRouter;

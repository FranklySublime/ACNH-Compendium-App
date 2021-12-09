const { Router } = require("express");

const { createAccount } = require("../handlers/userHandler");

const userRouter = Router();

// endpoints
userRouter.post("/signup", createAccount);

module.exports = userRouter;

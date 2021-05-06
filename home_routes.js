const express = require("express");
const HomeRouter = express.Router();

HomeRouter.get("/", (req, res) => {
    res.send("Hello")
});

module.exports = HomeRouter;
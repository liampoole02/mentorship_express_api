const express = require("express");
const ProductRouter = express.Router();

ProductRouter.get("/", (req, res) => {
    res.send("Product Router")
});

ProductRouter.post("/", (req, res) => {
    console.log(req.body);
    res.json(req.body)
});


ProductRouter.put("/:id", (req, res) => {
    const id = req.params.id;
    const name = req.query.name;
    console.log(id);
    res.json({ id, name })
});

ProductRouter.delete("/:id", (req, res) => {
    const id = req.params.id;
    const name = req.query.name;
    console.log(id);
    res.json({ id, name })
});

module.exports = ProductRouter;
const express = require("express");
const server = express();
const UserRouter = require("./user_routes");
const ProductRouter = require("./product_routes");
const HomeRouter = require("./home_routes");
const AuthMiddleware = require("./middleware/auth")

server.use(express.json());
server.use("/product", AuthMiddleware, ProductRouter)
server.use("/user", AuthMiddleware, UserRouter)
server.use("/", AuthMiddleware, HomeRouter)


const PORT = 3000;
server.listen(PORT, () => console.log("Server is runnig on port " + PORT))
module.exports = function (req, res, next) {
    if (req.headers["x-api-key"] !== "123456") {
        next("Error: Invalid API Key")
    } else {
        next();
    }
}
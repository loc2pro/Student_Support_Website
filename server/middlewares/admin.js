const jwt = require("jsonwebtoken");
const env = "ACCESS_TOKEN_SECRET_ADMIN";
const config = require(__dirname + "/../config/config.json")[env];

const verifyTokenAdmin = (req, res, next) => {
    const authHeader = req.header("Authorization");
    const token = authHeader && authHeader.split(" ")[1];
    if (!token) {
        return res
            .status(401)
            .json({ success: false, message: "Access token is not found" });
    }
    try {
        const decoded = jwt.verify(token, config);
        //nếu token hợp lệ thì gữi userID ngược về client
        console.log(decoded);
        req.userId = decoded.userId;
        next();
    } catch (err) {
        console.log(err);
        return res.status(403).json({ success: false, message: "Invalid token" });
    }
};

module.exports = verifyTokenAdmin;
const express = require("express");
const db = require("./models");
const cors = require("cors");

const authRouter = require("./routers/auth");

const App = express();

App.use(express.json());
App.use(cors());

App.use("/auth", authRouter);

const port = process.env.port || 5000;

db.sequelize.sync().then(() => {
    App.listen(port, () => {
        console.log(`Server runing on port http://localhost:${port}`);
    });
});
const cors = require("cors");
const express = require("express");
const app = express();

global.__basedir = __dirname;

var corsOptions = {
  origin: "*"
};

app.use(cors(corsOptions));

const initRoutes = require("./src/routes");

app.use(express.urlencoded({ extended: true }));
initRoutes(app);

let port = 3004;
app.listen(port, () => {
  console.log(`Running at localhost:${port}`);
});

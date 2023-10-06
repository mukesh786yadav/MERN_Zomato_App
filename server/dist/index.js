"use strict";

var _express = _interopRequireDefault(require("express"));
var _dotenv = _interopRequireDefault(require("dotenv"));
var _connection = _interopRequireDefault(require("./database/connection.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
//database connection 

_dotenv.default.config();
const zomato = (0, _express.default)();
zomato.use(_express.default.json());
zomato.get("/", (req, res) => {
  res.json({
    message: "Hello world"
  });
});
zomato.listen(4000, () => {
  (0, _connection.default)().then(() => {
    console.log("Server is running on port 4000");
  }).catch(error => {
    console.log("server is running but data base connectin fail !!!");
  });
});
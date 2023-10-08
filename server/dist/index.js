"use strict";

var _express = _interopRequireDefault(require("express"));
var _dotenv = _interopRequireDefault(require("dotenv"));
var _passport = _interopRequireDefault(require("passport"));
var _route = _interopRequireDefault(require("./config/route.config"));
var _connection = _interopRequireDefault(require("./database/connection.js"));
var _auth = _interopRequireDefault(require("./api/auth"));
var _food = _interopRequireDefault(require("./api/food"));
var _restaurant = _interopRequireDefault(require("./api/restaurant"));
var _user = _interopRequireDefault(require("./api/user"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
//importing config file

//database connection 

//importing All router

_dotenv.default.config();
const zomato = (0, _express.default)();
//adding additional configration
(0, _route.default)(_passport.default);
zomato.use(_express.default.json());
zomato.use(_passport.default.initialize());
zomato.get("/", (req, res) => {
  res.json({
    message: "Hello world"
  });
});
zomato.use("/auth", _auth.default);
zomato.use("/food", _food.default);
zomato.use("/restaurant", _restaurant.default);
zomato.use("/user", _user.default);
zomato.listen(4000, () => {
  (0, _connection.default)().then(() => {
    console.log("Server is running on port 4000");
  }).catch(error => {
    console.log("server is running but data base connectin fail !!!");
  });
});
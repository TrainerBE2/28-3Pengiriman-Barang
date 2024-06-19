var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

var userRouter = require("./router/user");
var paketRouter = require("./router/paket");

var app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/api/users", userRouter);
app.use("/api/pakets", paketRouter);

module.exports = app;

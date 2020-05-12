const createError = require("http-errors");
const express = require("express");
const logger = require("morgan");
const path = require("path");
const session = require("express-session");
const favicon = require("serve-favicon");

const dashboardRouter = require("./routes/dashboard");
const mainPageRouter = require("./routes/front-page");

// App initialization
const app = express();

// icon
app.use(favicon(path.join(__dirname, 'assets', 'favicon.ico')));

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

// Middleware
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "assets")));

//app.use(auth.oidc.router);
//app.use(middleware.addUser);

// Routes
app.use("/", mainPageRouter);
app.use("/dashboard", dashboardRouter);
//app.use("/users", usersRouter);

// Error handlers
app.use(function(req, res, next) {
  next(createError(404));
});

app.use(function(err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  res.status(err.status || 500);
  res.render("error");
});


module.exports = app;

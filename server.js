const express = require("express");
const exphbs = require("express-handlebars");
// var session = require("express-session");
// var passport = require("./config/passport");
// const path = require("path");
require("dotenv").config();
// Requiring our models for syncing
const db = require("./models");

// Sets up the Express App
const app = express();
const PORT = process.env.PORT || 8080;

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static directory
app.use(express.static("views"));

// Syncing our sequelize models and then starting our Express app

app.get("/", (req, res) => {
  res.render("Home");
});

db.sequelize.sync({ force: true }).then(() => {
  app.listen(PORT, () => console.log(`Listening on PORT ${PORT}`));
});

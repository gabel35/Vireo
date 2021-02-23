// Dependencies
const path = require("path");

// Routes
module.exports = (app) => {
  // Each of the below routes just handles the HTML page that the user gets sent to.

  // rid of line 8
  app.get("/", (req, res) => res.render("Home"));

  // blog route loads blog.handlebars
  app.get("/blog", (req, res) => res.render("Blog"));

  // new post route that loads new.handlebars
  app.get("/cms", (req, res) => res.render("Cms"));

  // authors route loads author-manager.html
  app.get("/authors", (req, res) => res.render("author-manager"));
};
const museums = require("../public/assets/js/top5museums.js");
console.log(`Hello world ${museums}`);
// Routes
module.exports = (app) => {
  // Each of the below routes just handles the HTML page that the user gets sent to.

  // rid of line 8
  app.get("/", (req, res) => res.render("home", { museums: museums }));

  // blog route loads blog.handlebars
  app.get("/blog", (req, res) => res.render("Blog"));

  // new post route that loads new.handlebars
  app.get("/cms", (req, res) => res.render("Cms"));

  // authors route loads author-manager.html
  app.get("/authors", (req, res) => res.render("author-manager"));

  app.get("/signup", function (req, res) {
    // If the user already has an account send them to the members page
    // if (req.user) {
    //   res.redirect("/members");
    // }
    res.render("signup");
  });

  app.get("/login", function (req, res) {
    // If the user already has an account send them to the members page
    // if (req.user) {
    //   res.redirect("/members");
    // }
    res.render("login");
  });
};

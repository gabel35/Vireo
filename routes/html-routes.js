const db = require("../models/index.js");

// Routes
module.exports = (app) => {
  // Each of the below routes just handles the HTML page that the user gets sent to.

  app.get("/", (req, res) => {
    db.Country.findAll({}).then((countries) => {
      console.log(countries);
      res.render("home", {
        allCountries: countries,
      });
    });
  });

  app.get("/country/:country", (req, res) => {
    db.Country.findOne({
      where: { name: req.params.country },
      include: [db.TopFive],
    }).then((dbCountry) => {
      // const museums = [];
      // const sights = [];
      // const restaurants = [];
      // dbCountry.TopFives.forEach((tops) => {
      //   if (tops.dataValues.category === "museums") {
      //     museums.push(tops);
      //   } else if (tops.dataValues.category === "restaurants") {
      //     restaurants.push(tops);
      //   } else {
      //     sights.push(tops);
      //   }
      // });
      res.render("home", {
        hi: "hello",
      });
    });
  });
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

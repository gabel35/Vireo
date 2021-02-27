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
      const museums = [];
      const sights = [];
      const restaurants = [];
      const language = [];
      const funfact = [];
      dbCountry.TopFives.forEach((tops) => {
        if (tops.dataValues.category === "museums") {
          museums.push(tops);
        } else if (tops.dataValues.category === "restaurants") {
          restaurants.push(tops);
        } else if (tops.dataValues.category === "sights") {
          sights.push(tops);
        } else if (tops.dataValues.category === "language") {
          language.push(tops);
        } else {
          funfact.push(tops);
        }
        console.log(sights);
      });
      db.Country.findAll({}).then((countries) => {
        res.render("home", {
          hi: "hello",
          sights: sights,
          museums: museums,
          restaurants: restaurants,
          language: language,
          funfact: funfact,
          allCountries: countries,
        });
      });
    });
  });
  // blog route loads blog.handlebars
  app.get("/blog", (req, res) => res.render("blog"));

  // new post route that loads new.handlebars
  app.get("/cms", (req, res) => res.render("cms"));

  // authors route loads author-manager.html
  app.get("/authors", (req, res) => res.render("author-manager"));
};

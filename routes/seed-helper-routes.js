const db = require("../models");

module.exports = (app) => {
  app.get("/s", (req, res) => {
    db.Country.create({ name: "Spain" });
    db.Country.create({ name: "France" });
    db.Country.create({ name: "United States" });
    db.Country.create({ name: "Russia" });
    db.Country.create({ name: "Mexico" });
    db.Country.create({ name: "Dominican Republic" }).then((res) => {
      const top5s = [
        { name: "Moma", category: "museums", CountryId: 1 },
        { name: "Natural History", category: "museums", CountryId: 1 },
        { name: "Whitney", category: "museums", CountryId: 1 },
        { name: "All", category: "museums", CountryId: 1 },
        { name: "None", category: "museums", CountryId: 1 },
        { name: "Linguini", category: "restaurants", CountryId: 1 },
        { name: "Pizza", category: "restaurants", CountryId: 1 },
        { name: "Bread", category: "restaurants", CountryId: 1 },
        { name: "Olives", category: "restaurants", CountryId: 1 },
        { name: "Ceviche", category: "restaurants", CountryId: 1 },
        { name: "overlook", category: "sights", CountryId: 1 },
        { name: "mountain top", category: "sights", CountryId: 1 },
        { name: "sea view", category: "sights", CountryId: 1 },
        { name: "forest", category: "sights", CountryId: 1 },
        { name: "church", category: "sights", CountryId: 1 },
      ];
      top5s.forEach((topfives) => {
        db.TopFive.create(topfives);
      });
    });
  });
};

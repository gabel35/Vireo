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
        { location_name: "Moma", category: "museums", CountryId: 1 },
        { location_name: "Natural History", category: "museums", CountryId: 1 },
        { location_name: "Whitney", category: "museums", CountryId: 1 },
        { location_name: "All", category: "museums", CountryId: 1 },
        { location_name: "None", category: "museums", CountryId: 1 },
        { location_name: "Linguini", category: "restaurants", CountryId: 1 },
        { location_name: "Pizza", category: "restaurants", CountryId: 1 },
        { location_name: "Bread", category: "restaurants", CountryId: 1 },
        { location_name: "Olives", category: "restaurants", CountryId: 1 },
        { location_name: "Ceviche", category: "restaurants", CountryId: 1 },
        { location_name: "overlook", category: "sights", CountryId: 1 },
        { location_name: "mountain top", category: "sights", CountryId: 1 },
        { location_name: "sea view", category: "sights", CountryId: 1 },
        { location_name: "forest", category: "sights", CountryId: 1 },
        { location_name: "church", category: "sights", CountryId: 1 },
      ];
      top5s.forEach((topfives) => {
        db.TopFive.create(topfives);
      });
    });
  });
};

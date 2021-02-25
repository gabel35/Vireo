const db = require("../models");

module.exports = (app) => {
  app.get("/seeds", (req, res) => {
    db.Country.create({ name: "Spain" });
    db.Country.create({ name: "France" });
    db.Country.create({ name: "United States" });
    db.Country.create({ name: "Russia" });
    db.Country.create({ name: "Mexico" });
    db.Country.create({ name: "Dominican Republic" });
  });
};

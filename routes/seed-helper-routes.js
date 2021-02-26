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
        { name: "El Prado", category: "museums", CountryId: 1 },
        { name: "Museu Nacional d'Art de Catalunya", category: "museums", CountryId: 1 },
        { name: "Museo Guggenheim Bilbao", category: "museums", CountryId: 1 },
        { name: "Teatre-Museu Dalí", category: "museums", CountryId: 1 },
        { name: "Ciutat de les Arts i les Ciències", category: "museums", CountryId: 1 },
        { name: "El Bulli", category: "restaurants", CountryId: 1 },
        { name: "Mugaritz", category: "restaurants", CountryId: 1 },
        { name: "Arzak", category: "restaurants", CountryId: 1 },
        { name: "Can Fabes", category: "restaurants", CountryId: 1 },
        { name: "Martin Berasategui", category: "restaurants", CountryId: 1 },
        { name: "La Sagrada Familia", category: "sights", CountryId: 1 },
        { name: "The Great Mosque of Cordoba (Mezquita)", category: "sights", CountryId: 1 },
        { name: "Alhambra", category: "sights", CountryId: 1 },
        { name: "Park Guell", category: "sights", CountryId: 1 },
        { name: "Cave of Altamira", category: "sights", CountryId: 1 },

      ];
      top5s.forEach((topfives) => {
        db.TopFive.create(topfives);
      });
    });
  });
};

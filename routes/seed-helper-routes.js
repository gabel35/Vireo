const db = require("../models");

module.exports = (app) => {
  app.get("/s", (req, response) => {
    db.Country.create({ name: "Spain" });
    db.Country.create({ name: "France" });
    db.Country.create({ name: "United States" });
    db.Country.create({ name: "Russia" });
    db.Country.create({ name: "Mexico" });
    db.Country.create({ name: "Italy" }).then((res) => {
      const top5s = [
        //SPAIN
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
        { name: "Mezquita de Córdoba", category: "sights", CountryId: 1 },
        { name: "Alhambra", category: "sights", CountryId: 1 },
        { name: "Park Guell", category: "sights", CountryId: 1 },
        { name: "Cave of Altamira", category: "sights", CountryId: 1 },
        //FRANCE
        { name: "Musée du Louvre", category: "museums", CountryId: 2 },
        { name: "Musée national d'Art moderne", category: "museums", CountryId: 2 },
        { name: "Musée d'Orsay", category: "museums", CountryId: 2 },
        { name: "Musée du Quai Branly", category: "museums", CountryId: 2 },
        { name: "Musée de l'Armée", category: "museums", CountryId: 2 },

        { name: "A l'Huîtrière", category: "restaurants", CountryId: 2 },
        { name: "Au Cerf", category: "restaurants", CountryId: 2 },
        { name: "Aux Coquillages de Diana", category: "restaurants", CountryId: 2 },
        { name: "Les Crayères", category: "restaurants", CountryId: 2 },
        { name: "Auberge du Cheval Blanc", category: "restaurants", CountryId: 2 },

        { name: "Eiffel Tower", category: "sights", CountryId: 2 },
        { name: "Palace of Versailles", category: "sights", CountryId: 2 },
        { name: "Cathédrale Notre-Dame", category: "sights", CountryId: 2 },
        { name: "Arc de Triomphe", category: "sights", CountryId: 2 },
        { name: "Lascaux", category: "sights", CountryId: 2 },
        //UNITED STATES
        { name: "EUS", category: "museums", CountryId: 3 },
        { name: "US", category: "museums", CountryId: 3 },
        { name: "US", category: "museums", CountryId: 3 },
        { name: "US", category: "museums", CountryId: 3 },
        { name: "US", category: "museums", CountryId: 3 },

        { name: "US", category: "restaurants", CountryId: 3 },
        { name: "US", category: "restaurants", CountryId: 3 },
        { name: "US", category: "restaurants", CountryId: 3 },
        { name: "US", category: "restaurants", CountryId: 3 },
        { name: "US", category: "restaurants", CountryId: 3 },

        { name: "US", category: "sights", CountryId: 3 },
        { name: "US", category: "sights", CountryId: 3 },
        { name: "US", category: "sights", CountryId: 3 },
        { name: "US", category: "sights", CountryId: 3 },
        { name: "US", category: "sights", CountryId: 3 },
        //RUSSIA
        { name: "State Hermitage Museum", category: "museums", CountryId: 4 },
        { name: "Armory Museum", category: "museums", CountryId: 4 },
        { name: "Tretyakov Gallery", category: "museums", CountryId: 4 },
        { name: "Museum of Cosmonautics", category: "museums", CountryId: 4 },
        { name: "Literary Museums", category: "museums", CountryId: 4 },

        { name: "El Bulli", category: "restaurants", CountryId: 4 },
        { name: "Mugaritz", category: "restaurants", CountryId: 4 },
        { name: "Arzak", category: "restaurants", CountryId: 4 },
        { name: "Can Fabes", category: "restaurants", CountryId: 4 },
        { name: "Martin Berasategui", category: "restaurants", CountryId: 4 },

        { name: "The Moscow Kremlin", category: "sights", CountryId: 4 },
        { name: "Red Square", category: "sights", CountryId: 4 },
        { name: "St. Basil's Cathedral", category: "sights", CountryId: 4 },
        { name: "Winter Palace", category: "sights", CountryId: 4 },
        { name: "Mount Elbrus", category: "sights", CountryId: 4 },
        //MEXICO
        { name: "El Prado", category: "museums", CountryId: 5 },
        { name: "Museu Nacional d'Art de Catalunya", category: "museums", CountryId: 5 },
        { name: "Museo Guggenheim Bilbao", category: "museums", CountryId: 5 },
        { name: "Teatre-Museu Dalí", category: "museums", CountryId: 5 },
        { name: "Ciutat de les Arts i les Ciències", category: "museums", CountryId: 5 },

        { name: "El Bulli", category: "restaurants", CountryId: 5 },
        { name: "Mugaritz", category: "restaurants", CountryId: 5 },
        { name: "Arzak", category: "restaurants", CountryId: 5 },
        { name: "Can Fabes", category: "restaurants", CountryId: 5 },
        { name: "Martin Berasategui", category: "restaurants", CountryId: 5 },

        { name: "La Sagrada Familia", category: "sights", CountryId: 5 },
        { name: "Mezquita de Córdoba", category: "sights", CountryId: 5 },
        { name: "Alhambra", category: "sights", CountryId: 5 },
        { name: "Park Guell", category: "sights", CountryId: 5 },
        { name: "Cave of Altamira", category: "sights", CountryId: 5 },
        //ITALY
        { name: "El Prado", category: "museums", CountryId: 6 },
        { name: "Museu Nacional d'Art de Catalunya", category: "museums", CountryId: 6 },
        { name: "Museo Guggenheim Bilbao", category: "museums", CountryId: 6 },
        { name: "Teatre-Museu Dalí", category: "museums", CountryId: 6 },
        { name: "Ciutat de les Arts i les Ciències", category: "museums", CountryId: 6 },

        { name: "El Bulli", category: "restaurants", CountryId: 6 },
        { name: "Mugaritz", category: "restaurants", CountryId: 6 },
        { name: "Arzak", category: "restaurants", CountryId: 6 },
        { name: "Can Fabes", category: "restaurants", CountryId: 6 },
        { name: "Martin Berasategui", category: "restaurants", CountryId: 6 },

        { name: "La Sagrada Familia", category: "sights", CountryId: 6 },
        { name: "Mezquita de Córdoba", category: "sights", CountryId: 6 },
        { name: "Alhambra", category: "sights", CountryId: 6 },
        { name: "Park Guell", category: "sights", CountryId: 6 },
        { name: "Cave of Altamira", category: "sights", CountryId: 6 },
      ];
      top5s.forEach((topfives, index) => {
        if (index === top5s.length -1) {
          console.log("it hit")
          db.TopFive.create(topfives).then(() => {
            response.redirect("/");
          })
        } else {
          db.TopFive.create(topfives);
        };
      });
    });
  });
};

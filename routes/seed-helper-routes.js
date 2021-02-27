const db = require("../models");

module.exports = (app) => {
  app.get("/s", (req, response) => {
    db.Country.create({ name: "Spain", id: 1 });
    db.Country.create({ name: "France", id: 2 });
    db.Country.create({ name: "United States", id: 3 });
    db.Country.create({ name: "Russia", id: 4 });
    db.Country.create({ name: "Mexico", id: 5 });
    db.Country.create({ name: "Italy", id: 6 }).then((res) => {
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
        
        { name: "Por favor - 'Please'", category: "language", CountryId: 1 },
        { name: "Gracias - 'Thank you'", category: "language", CountryId: 1 },
        { name: "Disculpe - 'Excuse Me'", category: "language", CountryId: 1 },
        { name: "¿Puedo usar el baño? – 'Can I use the bathroom?'", category: "language", CountryId: 1 },
        
        { name: "Spain has a festival called La Tomatina, during the last week of August where massive crowds throw tomatoes at each other for pure entertainment.", category: "funfact", CountryId: 1 },
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

        { name: "S'il vous plaît - 'Please'", category: "language", CountryId: 2 },
        { name: "Merci - 'Thank you'", category: "language", CountryId: 2 },
        { name: "Excusez-moi - 'Excuse Me'", category: "language", CountryId: 2 },
        { name: "¿puis-je utiliser les toilettes? – 'Can I use the bathroom?'", category: "language", CountryId: 2 },

        { name: "The Tour de France is a 21-day long bicycle race that often covers over 2,000 miles!", category: "funfact", CountryId: 2 },
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

        { name: "S'il vous plaît - 'Please'", category: "language", CountryId: 3 },
        { name: "Gracias - 'Thank you'", category: "language", CountryId: 3 },
        { name: "Disculpe - 'Excuse Me'", category: "language", CountryId: 3 },
        { name: "¿Puedo usar el baño? – 'Can I use the bathroom?'", category: "language", CountryId: 3 },

        { name: "US", category: "funfact", CountryId: 3 },
        //RUSSIA
        { name: "State Hermitage Museum", category: "museums", CountryId: 4 },
        { name: "Armory Museum", category: "museums", CountryId: 4 },
        { name: "Tretyakov Gallery", category: "museums", CountryId: 4 },
        { name: "Museum of Cosmonautics", category: "museums", CountryId: 4 },
        { name: "Literary Museums", category: "museums", CountryId: 4 },

        { name: "VARVARY", category: "restaurants", CountryId: 4 },
        { name: "CDL", category: "restaurants", CountryId: 4 },
        { name: "Severyane", category: "restaurants", CountryId: 4 },
        { name: "Café Pushkin", category: "restaurants", CountryId: 4 },
        { name: "BON", category: "restaurants", CountryId: 4 },

        { name: "The Moscow Kremlin", category: "sights", CountryId: 4 },
        { name: "Red Square", category: "sights", CountryId: 4 },
        { name: "St. Basil's Cathedral", category: "sights", CountryId: 4 },
        { name: "Winter Palace", category: "sights", CountryId: 4 },
        { name: "Mount Elbrus", category: "sights", CountryId: 4 },

        { name: "Пожалуйста (Pozhaluysta) - 'Please'", category: "language", CountryId: 4 },
        { name: "Спасибо (Spasibo) - 'Thank you'", category: "language", CountryId: 4 },
        { name: "Извините (Izvinite) - 'Excuse Me'", category: "language", CountryId: 4 },
        { name: "могу я воспользоваться туалетом (mogu ya vospol'zovat'sya tualetom) – 'Can I use the bathroom?'", category: "language", CountryId: 4 },

        { name: "Russia's Lake Baikal is the oldest and the deepest fresh water lake in the world.", category: "funfact", CountryId: 4 },
        //MEXICO
        { name: "Museo Nacional de Antropologia", category: "museums", CountryId: 5 },
        { name: "Frida Kahlo Museum", category: "museums", CountryId: 5 },
        { name: "Museo Soumaya", category: "museums", CountryId: 5 },
        { name: "Museo Nacional de Arte", category: "museums", CountryId: 5 },
        { name: "Museo de Arte Popular", category: "museums", CountryId: 5 },

        { name: "Pujol", category: "restaurants", CountryId: 5 },
        { name: "Biko", category: "restaurants", CountryId: 5 },
        { name: "Misión 19 ", category: "restaurants", CountryId: 5 },
        { name: "Moxi", category: "restaurants", CountryId: 5 },
        { name: "Laja", category: "restaurants", CountryId: 5 },

        { name: "Teotihuacan", category: "sights", CountryId: 5 },
        { name: "Chichen Itza", category: "sights", CountryId: 5 },
        { name: "Tulum", category: "sights", CountryId: 5 },
        { name: "Copper Canyon", category: "sights", CountryId: 5 },
        { name: "Palenque", category: "sights", CountryId: 5 },

        { name: "Por favor - 'Please'", category: "language", CountryId: 5 },
        { name: "Gracias - 'Thank you'", category: "language", CountryId: 5 },
        { name: "Disculpe - 'Excuse Me'", category: "language", CountryId: 5 },
        { name: "¿Puedo usar el baño? – 'Can I use the bathroom?'", category: "language", CountryId: 5 },

        { name: "Chocolate originated in Mexico, tracing back to the Aztecs, Mayans, and Olmecs.", category: "funfact", CountryId: 5 },
        //ITALY
        { name: "Galleria Degli Uffizi", category: "museums", CountryId: 6 },
        { name: "Gallerie Dell’Accademia", category: "museums", CountryId: 6 },
        { name: "Museo Egizio", category: "museums", CountryId: 6 },
        { name: "Galleria Borghese", category: "museums", CountryId: 6 },
        { name: "Museo Archeologico Nazionale ", category: "museums", CountryId: 6 },

        { name: "Reale", category: "restaurants", CountryId: 6 },
        { name: "Osteria Francescana", category: "restaurants", CountryId: 6 },
        { name: "Piazza Duomo", category: "restaurants", CountryId: 6 },
        { name: "Ristorante La Sponda", category: "restaurants", CountryId: 6 },
        { name: "Ratanà", category: "restaurants", CountryId: 6 },

        { name: "The Colosseum", category: "sights", CountryId: 6 },
        { name: "The Cinque Terre", category: "sights", CountryId: 6 },
        { name: "Trevi Fountain", category: "sights", CountryId: 6 },
        { name: "The Sistine Chapel", category: "sights", CountryId: 6 },
        { name: "Grand Canal", category: "sights", CountryId: 6 },
        
        { name: "Per favore - 'Please'", category: "language", CountryId: 6 },
        { name: "Grazie - 'Thank you'", category: "language", CountryId: 6 },
        { name: "Mi scusi - 'Excuse Me'", category: "language", CountryId: 6 },
        { name: "Posso usare il bagno? – 'Can I use the bathroom?'", category: "language", CountryId: 6 },

        { name: "Italy's holds one of the oldest and largest film festivals in the world, the Venice Film Festival.", category: "funfact", CountryId: 6 },
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

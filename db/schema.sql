DROP DATABASE IF EXISTS users_db;

CREATE DATABASE users_db;

USE users_db

CREATE TABLE spainTop5 (
museum VARCHAR(255) NOT NULL
);

INSERT INTO spainTop5 (museum) VALUES ('El Prado'),
('Museu Nacional dArt de Catalunya'),
('Museo Guggenheim Bilbao'),
('Teatre-Museu Dali'),
('Ciutat de les Arts i les Ciencies');

SELECT * FROM Country;
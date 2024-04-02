-- mySql
CREATE DATABASE IF NOT EXISTS formRevolutionMinds;

USE formRevolutionMinds;

CREATE TABLE IF NOT EXISTS negozi(
	idNegozio INT NOT NULL AUTO_INCREMENT,
    shopName VARCHAR(255) NOT NULL,
    shopAddress VARCHAR(255) NOT NULL,
    shopNumber VARCHAR(255) NOT NULL,
    city VARCHAR(255) NOT NULL,
    shopDescription VARCHAR(255) NOT NULL,
    PRIMARY KEY (idNegozio)
);


CREATE DATABASE IF NOT EXISTS formRevolutionMinds;

USE formRevolutionMinds;

CREATE TABLE IF NOT EXISTS negozi(
	idNegozio INT NOT NULL,
    shopName VARCHAR(255) NOT NULL,
    place VARCHAR(255) NOT NULL,
    shopAddress VARCHAR(255) NOT NULL,
    city VARCHAR(255) NOT NULL,
    shopMessage VARCHAR(255) NOT NULL,
    PRIMARY KEY (idNegozio)
);


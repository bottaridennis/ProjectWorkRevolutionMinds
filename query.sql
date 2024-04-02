-- mySql
CREATE DATABASE IF NOT EXISTS formRevolutionMinds;

USE formRevolutionMinds;

CREATE TABLE IF NOT EXISTS shops(
	idShop INT NOT NULL AUTO_INCREMENT,
    shopName VARCHAR(255) NOT NULL,
    shopAddress VARCHAR(255) NOT NULL,
    shopNumber VARCHAR(255) NOT NULL,
    city VARCHAR(255) NOT NULL,
    shopDescription VARCHAR(255) NOT NULL,
    PRIMARY KEY (idShop)
);

CREATE TABLE IF NOT EXISTS donors(
	idDonor INT NOT NULL AUTO_INCREMENT,
    donorName VARCHAR(255) NOT NULL,
    surname VARCHAR(255) NOT NULL,
    cf CHAR(16) NOT NULL,
    donation decimal(13,2) NOT NULL,
    donorMessage VARCHAR(255) NOT NULL,
    PRIMARY KEY(idDonor)
);

CREATE TABLE IF NOT EXISTS informations(
	idInfo INT NOT NULL AUTO_INCREMENT,
    personName VARCHAR(255) NOT NULL,
    surname VARCHAR(255) NOT NULL,
    cf CHAR(16) NOT NULL,
    personMessage VARCHAR(255) NOT NULL,
    PRIMARY KEY(idInfo)
);

CREATE TABLE IF NOT EXISTS newsletter(
	idPerson INT NOT NULL AUTO_INCREMENT,
    personName VARCHAR(255) NOT NULL,
    surname VARCHAR(255) NOT NULL,
    mail VARCHAR(255) NOT NULL,
    PRIMARY KEY(idPerson)
);
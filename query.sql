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
    -- privacyCheck BOOLEAN NOT NULL,
    privacyCheck TINYINT(1) NOT NULL,
    PRIMARY KEY(idPerson)
);

-- per la newsletter
CREATE TABLE IF NOT EXISTS news(
	idNews INT NOT NULL AUTO_INCREMENT,
   title VARCHAR(255) NOT NULL,
   content VARCHAR(255) NOT NULL,
   PRIMARY KEY (idNews)
);

-- utente che inserisce i dati nel form
CREATE USER IF NOT EXISTS 'userForm'@'localhost' IDENTIFIED BY 'password';
GRANT INSERT ON formRevolutionMinds.* TO 'userForm'@'localhost';

-- dati di prova per le newsletter
INSERT INTO newsletter (personName, surname, mail, privacyCheck) VALUES 
	("Yasmine", "Giuliani", "yassigiuliani@gmail.com", TRUE),
	("Dennis", "Bottari", "dennisbottari@gmail.com", TRUE),
	("Fabian", "Dumea", "dumeafabi2004@gmail.com", TRUE),
	("Matteo", "Leto", "matteo.leto20@gmail.com", TRUE),
	("Diego", "Milli", "diegomilli03@gmail.com", TRUE);

INSERT INTO news (title, content) VALUES 
	("news 1", "La newsletter sul second hand di Revolution Minds e' operativa"),
	("news 2", "Il negozio x aprirà tra 3 giorni in via y 1a. Vai a dare un occhiata"),
	("news 3", "Il negozio z ha avviato il periodo di saldi su tutti i capi. Non perdere questa occasione");
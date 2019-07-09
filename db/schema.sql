DROP DATABASE IF EXISTS m3nmvvvvxst3nrej;

CREATE DATABASE m3nmvvvvxst3nrej;

USE m3nmvvvvxst3nrej;

CREATE TABLE burgers(
    id INT NOT NULL AUTO_INCREMENT,
    burger_name VARCHAR(50),
    devoured BOOLEAN DEFAULT false,
    PRIMARY KEY (id)
);
CREATE DATABASE m3nmvvvvxst3nrej;

USE m3nmvvvvxst3nrej;

CREATE TABLE burgers(
    id INT NOT NULL AUTO_INCREMENT,
    burger_name VARCHAR(50),
    devoured BOOLEAN DEFAULT false,
    PRIMARY KEY (id)
);

INSERT INTO burgers (burger_name)
VALUE ("Steak Burger"),
("Tri Tip Burger"),
("Double Cheeseburger"); 
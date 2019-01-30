USE bamazon_db

DROP DATABASE IF EXISTS bamazon_db;

CREATE DATABASE bamazon_db;

CREATE TABLE products (
    item_id INTEGER NOT NULL AUTO_INCREMENT,
    product_name VARCHAR(100) NOT NULL,
    department_name VARCHAR(50) NOT NULL,
    price DECIMAL(5,2),
    stock_quantity INTEGER(3)
);

INSERT INTO products(product_name, department_name, price, stock_quantity) VALUES ("Dog collar", "Collars and leashes", 10.5, 200);

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES ("Dog food", "Food", 59.99, 50);

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES ("Dog toy", "Toys", 9.99, 200);

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES ("Dog bowl", "Food", 4.99, 100);

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES ("Dog leash", "Collars and leashes", 12.50, 100);

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES ("Dog harness", "Collars and leashes", 14.99, 75);

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES ("Dog treats", "Food", 7.99, 150);

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES ("Dog bed", "Bedding", 29.99, 25);

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES ("Dog crate", "Food", 99.99, 25);

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES ("Dog shampoo", "Grooming", 9.99, 50);
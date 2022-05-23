CREATE DATABASE db_educrown;

USE db_educrown;

CREATE TABLE users(
    rut VARCHAR(10) PRIMARY KEY UNIQUE NOT NULL,
    first_name VARCHAR(45) NOT NULL,
    last_name VARCHAR(45) NOT NULL,
    password VARCHAR(255) NOT NULL,
    ROLE SMALLINT NOT NULL
);

DESCRIBE users;
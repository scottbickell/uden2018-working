-- DROP DATABASE IF EXISTS favorite_db;
-- CREATE DATABASE favorite_db;

USE favorite_db;

CREATE TABLE favorite_foods (
  food VARCHAR(30) NOT NULL,
  score VARCHAR(30)
);

-- CREATE TABLE favorite_songs (
--   song VARCHAR(30) NOT NULL,
--   artist VARCHAR(30),
--   score INTEGER(10)
-- );

-- CREATE TABLE favorite_movies (
--   id INTEGER NOT NULL AUTO_INCREMENT,
--   movie VARCHAR(30) NOT NULL,
--   five_times BOOLEAN NOT NULL DEFAULT 0,
--   score INTEGER,
--   PRIMARY KEY (id)
-- );

INSERT INTO favorite_foods (food, score) 
VALUES('pizza','75');

INSERT INTO favorite_movies (id, movie, five_times, score)
VALUES(id, "test", 0, "10" );
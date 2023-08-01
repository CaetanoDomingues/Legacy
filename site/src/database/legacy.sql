DROP SCHEMA IF EXISTS legacy_db;
CREATE SCHEMA IF NOT EXISTS legacy_db ;
USE legacy_db;

CREATE TABLE IF NOT EXISTS Usuario(
  id INT NOT NULL auto_increment,
  nome VARCHAR(45),
  email VARCHAR(45),
  senha CHAR(8),
  celular CHAR(9),
  PRIMARY KEY (id)
  ) auto_increment = 1;
  
CREATE TABLE IF NOT EXISTS telefone (
  idCelular INT NOT NULL auto_increment,
  primary key (idCelular),
  fkCelular int,
  foreign key (fkCelular) references Usuario (id)
    )auto_increment = 1;

CREATE TABLE IF NOT EXISTS Quiz(
  idQuiz INT NOT NULL auto_increment,
  acerto DECIMAL,
  erro DECIMAL,
  idUsuario INT NOT NULL,
  PRIMARY KEY (idQuiz),
  CONSTRAINT fk_Quiz_Usuario
    FOREIGN KEY (idUsuario)
    REFERENCES Usuario (id)
    )auto_increment = 1000;
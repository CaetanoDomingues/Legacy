CREATE DATABASE Legacy;
USE Legacy;

CREATE TABLE usuario(
id INT PRIMARY KEY AUTO_INCREMENT,
nome varchar(45),
email varchar(45),
senha char(8) check (senha >= 8)
)AUTO_INCREMENT = 100;

CREATE TABLE paises(
id INT PRIMARY KEY AUTO_INCREMENT,
nome varchar(45),
fkUser int,
foreign key (fkUser) references usuario(id)
);

CREATE TABLE telefone(
idTelefone INT PRIMARY KEY AUTO_INCREMENT,
telefone_celular CHAR(16),
fkUser_Celular INT
)AUTO_INCREMENT = 1000;

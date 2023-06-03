create database Legacy;
use Legacy;

create table usuario(
id int primary key auto_increment,
nome varchar(45),
email varchar(45),
senha char(8) check (senha >= 8)
)auto_increment = 100;

create table paises(
id int primary key auto_increment,
nome varchar(45),
fkUser int,
foreign key (fkUser) references usuario(id)
);

create table telefone(
idTelefone int primary key auto_increment,
telefone_celular char(16),
fkUser_Celular int
)auto_increment = 1000;

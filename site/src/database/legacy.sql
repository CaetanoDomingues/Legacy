create database Legacy;
use Legacy;
drop database Legacy;

create table Usuario(
id int primary key auto_increment,
nome varchar(45),
email varchar(45),
senha varchar(15)
)auto_increment = 100;

create table Telefone(
idTelefone int auto_increment,
telefone_celular char(16),
fkUsuario int,
foreign key(fkUsuario) references Usuario(id),
primary key(idTelefone)
)auto_increment = 1000;

create table Quiz(
idQuiz int primary key auto_increment,
acertos decimal,
erros decimal,
fkUsuario int,
foreign key(fkUsuario) references Usuario(id)
)auto_increment = 1;

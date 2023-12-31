drop database if exists souto_system;
create database if not exists souto_system;
use souto_system;

show tables;

drop table if exists Products;
create table Products(
	id int primary key auto_increment,
    brand varchar(30) not null,
    description varchar(30) not null
);

drop table if exists users;
drop table if exists products;
drop table if exists employees;

select * from employees;
select * from products;

insert into products(brand, description, code, price, createdAt, updatedAt)
	values ("Coca-Cola", "gaseosa 2L", "123456", 2000, "2023-3-1", "2023-3-1");


insert into users (firstName, lastName, email, createdAt, updatedAt)
	values ("Alex", "Echeverria", "aleex.naahuel@outlook.com", "2023-12-18", "2023-12-18");
select * from users;
<!-- Slide-01 -->
-- 01
create database purwadhika_student;
create database purwadhika_schedule;
create database purwadhika_branch;

-- 02
show databases like "%purwadhika%";

-- 03 
drop database purwadhika_schedule;

-- 04
use purwadhika_student;

create table students(
	id integer(10) primary key not null auto_increment,
	first_name varchar(25) not null,
	last_name varchar(25) not null, 
	address varchar(255) not null, 
	city varchar(50) not null, 
	created_at datetime default CURRENT_TIMESTAMP
);

-- 05 
use purwadhika_student;
alter table students add column email varchar(100);

-- 06 
alter table students 
add column (
gender varchar(15) not null,
batch_code varchar(15) not null, 
phone_number varchar(15) not null, 
alternative_phone_number varchar(15) not null
);

-- 07 
alter table students 
rename column alternative_phone_number to description;

-- 08 
alter table students 
drop column gender;



<!-- Slide-02 -->
-- 01 
use purwadhika_branch;

create table campus(
	id integer primary key not null auto_increment, 
	branch_name varchar(50) not null, 
	pic varchar(50) not null, 
	address varchar(50) not null, 
	city varchar(50) not null, 
	province varchar(50) not null
);

insert into campus(branch_name, pic, address, city, province)
values("BSD", "Thomas", "GOP-09", "Tangerang", "Banten"), 
("JKT", "Budi", "MSIG Tower", "Jakarta", "Jakarta"),
("BTM", "Angel", "Nonsa", "Batam", "Riau, Kep.");

-- 02 
update campus set pic = "Dono" where city = "Tangerang";

-- 03 
insert into campus(branch_name, pic, address, city, province)
values("BLI", "Bobby", "Gianyar", "Gianyar", "Bali");



<!-- Slide-03 -->
use sakila;

-- 01
select first_name, last_name from actor;

-- 02 
select actor_id, first_name, last_name from actor where first_name like "joe%";

-- 03
select * from address where district in ("California", "Alberta", "Mekka");

-- 04 
select count(*) as last_name_wood from actor where last_name like "%wood";

-- 05 
select customer_id, SUM(amount) as total_amount_per_customer from payment group by customer_id 
having total_amount_per_customer > 100;

<!-- Slide-04 -->

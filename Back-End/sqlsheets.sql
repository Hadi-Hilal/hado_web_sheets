
/*
----------------------------------------
-----------SQL SHEETS CHEAT ----------
----------------------------------------
*/
            
note::dbname mean database name

// sql commands

1- show databases                 // this command show the databases 
2- use dbname                    // this command use database we want
2- descripe dbname              // this command descripe our database we want
4- drop database dbname        // this command delete database 

// table commands 

// to create table
1-create table tablename(
        attr1 datetype,
        attr2 datetype,
);

// to drop table
2-drop table tablename;

// to insert in table;
3-insert into tablename (fieled list) values (valuelist);

// to read data in table 
4- select * from tablename;
select * |column name
from table name
where condition


// to update table;
5-update tablename set fieldname=value where condition...;


// to delete table;
6-delete from tablename where condition;

// to make fake datat 
4-create view viewname as select * from tablename
where condition

// advance tips for build database 

1- the database shouldnot have  a null or empty column if we have a column have null values we should
create other table and give it foreign key value

2- if we have two tables and the relation between this tables many to many ..
we should create third table and but in it the primary keys from two tables 
and make this keys a foreign keys .
3- we should index the uinque table to make our database Fast-access.


// important function 

//charcter functions
1-lower()         
2-upper()   
3-length()   
4-instr()      
5-concat() 
6-substr()    

//numeric functions
1-round()
2-mode()

//multi row functions
1-avg()
2-max()
3-min()
4-count()
5-sum()
















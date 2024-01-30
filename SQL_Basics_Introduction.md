# Introduction to SQL Basics

## Understanding Databases

Data is a collection of a distinct small unit of information. It can be used in a variety of forms like text, numbers, media, bytes, etc. A database is an organized collection of data, so that it can be easily accessed and managed.

1968 was the year when File-Based database were introduced. 1970 relational model was proposed by Edgar Frank.

Relational database model has two main terminologies called instance and schema. The instance is a table with rows or columns. Schema specifies the structure like name of the relation, type of each column and name.

<img src="https://www.sqlshack.com/wp-content/uploads/2020/07/anatomy-of-a-sql-table-1.png">

### Database management system

A database management system (DBMS) is software to create and manage databases, allowing users to create, read, update and delete data in a database.

-   MySQL
-   PostgreSQL
-   SQLite
-   Oracle Database
-   MariaDB

## NOSQL

NoSQL databases (aka "not only SQL") are non-tabular databases and store data differently than relational tables. NoSQL databases come in a variety of types based on their data model. The main types are document, key-value, wide-column, and graph. They provide flexible schemas and scale easily with large amounts of data and high user loads.

## Introduction to SQL

Structured Query Language (SQL) is the standard language for relational database management. It is used to interact with databases to perform various tasks like data insertion, query,
update, and delete.

## SQL Data Types

<img src="https://www.simplilearn.com/ice9/free_resources_article_thumb/Categories_of_data_types-SQL_Data_Types.PNG">

## Data Definition

CREATE: Create a new table, e.g., CREATE TABLE Students.
ALTER: Modify an existing table, e.g., add a new column to the Students table.
DROP: Delete a table, e.g., DROP TABLE Students.
TRUNCATE: Empty all records in a table, e.g., TRUNCATE TABLE Students.

```sql
-- Create a new table
CREATE TABLE Students (
  student_id INT PRIMARY KEY,
  name VARCHAR(50),
  email VARCHAR(50)
);

-- Add a new column
ALTER TABLE Students ADD COLUMN birthdate DATE;

-- Delete a table
DROP TABLE Students;

-- Empty all records in a table
TRUNCATE TABLE Students;
```

## Data Manipulation

SELECT: Retrieve student names from the Students table.
INSERT: Add a new student record into the Students table.
UPDATE: Update a student's email address in the Students table.
DELETE: Remove a student's record from the Students table.

```sql

-- Select all students
SELECT * FROM Students;

-- Insert a new student
INSERT INTO Students (student_id, name, email) VALUES (1, 'John Doe', 'johndoe@example.com');

-- Update a student's email
UPDATE Students SET email = 'newemail@example.com' WHERE student_id = 1;

-- Delete a student
DELETE FROM Students WHERE student_id = 1;


```

## Data Query

Filtering: Use WHERE to find students in a specific program.
Sorting: Display students sorted by last name using ORDER BY.
Aggregation: Calculate the average grade of students using AVG.

```sql

-- Select students with a specific name
SELECT * FROM Students WHERE name = 'John Doe';

-- Select all students sorted by name
SELECT * FROM Students ORDER BY name;

-- Calculate the average grade
SELECT AVG(grade) FROM Enrollments;

```

## Subqueries and Nested Queries

A subquery is a query that appears inside another query statement. Subqueries are also referred to as sub- SELECT s or nested SELECT s. The full SELECT syntax is valid in subqueries.

```sql

-- Find students who are taking the most courses
SELECT name FROM Students
WHERE student_id IN (
  SELECT student_id FROM Enrollments
  GROUP BY student_id
  ORDER BY COUNT(*) DESC
  LIMIT 1
);

```

# Indexes and Performance Tuning

## Sanjana Khan

## Source

https://www.javatpoint.com/what-is-database
https://www.w3schools.com/sql/
https://www.tutorialspoint.com/sql/index.htm
https://www.sqltutorial.org/

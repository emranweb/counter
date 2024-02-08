# Introduction to SQL Basics

## Understanding Databases

### What is DATABASE?

Data is a collection of a distinct small unit of information. It can be used in a variety of forms like text, numbers, media, bytes, etc. A database is an organized collection of data, so that it can be easily accessed and managed.

### History

1968 was the year when File-Based database were introduced. 1970 relational model was proposed by Edgar Frank.

### Relational Database

Relational database model has two main terminologies called instance and schema. The instance is a table with rows or columns. Schema specifies the structure like name of the relation, type of each column and name.

## Examples of Databases

| student_id | student_name | course_name | score |
| ---------- | ------------ | ----------- | ----- |
| 1          | Alice        | Math        | 85    |
| 1          | Alice        | Science     | 90    |
| 2          | Bob          | Literature  | 75    |
| 2          | Bob          | Music       | 70    |
| 3          | Charlie      | History     | 80    |
| 3          | Charlie      | Physics     | 85    |
| 4          | David        | Art         | 95    |
| 4          | David        | Chemistry   | 90    |

### Database management system

A database management system (DBMS) is software to create and manage databases, allowing users to create, read, update and delete data in a database.

-   MySQL
-   PostgreSQL
-   SQLite
-   Oracle Database
-   MariaDB

## NOSQL

NoSQL databases (aka "not only SQL") are non-tabular databases and store data differently than relational tables. NoSQL databases come in a variety of types based on their data model. The main types are document, key-value, wide-column, and graph. They provide flexible schemas and scale easily with large amounts of data and high user loads.

- MongoDB.
- Cassandra.
- Elasticsearch.
- Neo4J.
- HBase.
- CouchDB.
- OrientDB.

<img src="https://media.geeksforgeeks.org/wp-content/uploads/20220405112418/NoSQLDatabases.jpg">


---

## Introduction to SQL

Structured Query Language (SQL) is the standard language for relational database management. It is used to interact with databases to perform various tasks like data insertion, query,
update, and delete.

---

## SQL Data Types

<img src="https://www.simplilearn.com/ice9/free_resources_article_thumb/Categories_of_data_types-SQL_Data_Types.PNG">

-   char: fixed-length character data with a maximum length of 8000 characters.
-   varchar - variable-length character data with a maximum length of 8000 characters.
-   nchar: fixed-length unicode data with a maximum length of 4000 characters.
-   Char = 8 bit length
-   NChar = 16 bit length

---

## Working with table structures

### Create a New Table in the Database

```sql
CREATE TABLE Students (
    student_id INT PRIMARY KEY,
    name VARCHAR(100),
    enrollment_date DATE
);

```

| student_id | name    | enrollment_date |
| ---------- | ------- | --------------- |
| 1          | Alice   | 2021-01-15      |
| 2          | Bob     | 2021-03-12      |
| 3          | Charlie | 2021-05-22      |
| 4          | David   | 2021-08-30      |

### ALTER TABLE – Modify the Structure of an Existing Table

```sql
ALTER TABLE Students
ADD COLUMN email VARCHAR(255);
```

### DROP TABLE – Remove the Tables Permanently

```sql
DROP TABLE Students;
```

### TRUNCATE TABLE – Delete All Data in a Big Table Fast and Efficiently

```sql
TRUNCATE TABLE Students;
```

---


# Modifying data

## INSERT – Insert One or More Rows into a Table

```sql
INSERT INTO
   Students (student_id, name, enrollment_date)
VALUES
(5, 'Eve', '2022-01-01'),
(6, 'Frank', '2022-02-01');
```

### UPDATE – Update Existing Data in a Table

```sql
UPDATE Students
SET enrollment_date = '2022-01-15'
WHERE student_id = 3;
```

### DELETE – Delete Data from a Table Permanently

```sql
DELETE FROM Students
WHERE student_id = 4;
```

---


## Querying Data - SELECT

### Select All Columns from a Table

```sql
SELECT * FROM Students;
```

| student_id | name    | enrollment_date |
| ---------- | ------- | --------------- |
| 1          | Alice   | 2021-01-15      |
| 2          | Bob     | 2021-03-12      |
| 3          | Charlie | 2021-05-22      |
| 4          | David   | 2021-08-30      |

### Select Specific Columns from a Table

```sql
SELECT name, enrollment_date FROM Students;
```

| name    | enrollment_date |
| ------- | --------------- |
| Alice   | 2021-01-15      |
| Bob     | 2021-03-12      |
| Charlie | 2021-05-22      |
| David   | 2021-08-30      |


---


## SQL Sorting Data

### Sort by One Column

- ASC
- DESC

```sql
SELECT * FROM Students ORDER BY name;
```

| student_id | name    | enrollment_date |
| ---------- | ------- | --------------- |
| 1          | Alice   | 2021-01-15      |
| 2          | Bob     | 2021-03-12      |
| 3          | Charlie | 2021-05-22      |
| 4          | David   | 2021-08-30      |

### Sort by Multiple Columns

```sql
SELECT * FROM Students ORDER BY enrollment_date DESC, name;
```

| student_id | name    | enrollment_date |
| ---------- | ------- | --------------- |
| 4          | David   | 2021-08-30      |
| 3          | Charlie | 2021-05-22      |
| 2          | Bob     | 2021-03-12      |
| 1          | Alice   | 2021-01-15      |

### Sort by a Numeric Column

```sql
SELECT * FROM Students ORDER BY student_id;
```

| student_id | name    | enrollment_date |
| ---------- | ------- | --------------- |
| 1          | Alice   | 2021-01-15      |
| 2          | Bob     | 2021-03-12      |
| 3          | Charlie | 2021-05-22      |
| 4          | David   | 2021-08-30      |


---

## SQL Filtering Data

### DISTINCT to Select Unique Names

```sql
SELECT DISTINCT name FROM Students;

```

| name    |
| ------- |
| Alice   |
| Bob     |
| Charlie |
| David   |

### LIMIT to Select the First Two Rows

```sql
SELECT * FROM Students LIMIT 2;
```

| student_id | name  | enrollment_date |
| ---------- | ----- | --------------- |
| 1          | Alice | 2021-01-15      |
| 2          | Bob   | 2021-03-12      |

### WHERE Clause Comparison Operators

The SQL comparison operators allow you to test if two expressions are the same. The result of a comparison operator has one of three value true, false, and unknown.

#### SQL Query: WHERE Clause Equal (=)

The equal to operator compares the equality of two expressions:

```sql
SELECT * FROM Students WHERE name = 'Alice';
```

| student_id | name  | enrollment_date |
| ---------- | ----- | --------------- |
| 1          | Alice | 2021-01-15      |

#### WHERE Clause Not Equal (<>)

The not equal to (<>) operator compares two non-null expressions and returns true if the value of the left expression is not equal to the right one; otherwise, it returns false.

```sql
SELECT * FROM Students WHERE name <> 'Alice';
```

| student_id | name    | enrollment_date |
| ---------- | ------- | --------------- |
| 2          | Bob     | 2021-03-12      |
| 3          | Charlie | 2021-05-22      |
| 4          | David   | 2021-08-30      |

#### WHERE Clause Greater Than (>)

The greater than operator (>) compares two non-null expressions and returns true if the left operand is greater than the right operand; otherwise, the result is false.

```sql
SELECT * FROM Students WHERE student_id > 2;
```

| student_id | name    | enrollment_date |
| ---------- | ------- | --------------- |
| 3          | Charlie | 2021-05-22      |
| 4          | David   | 2021-08-30      |

#### WHERE Clause Greater Than or Equal To (>=)

The greater than or equal operator (>=) compares two non-null expressions. The result is true if the left expression evaluates to a value that is greater than the value of the right expression.

```sql
SELECT * FROM Students WHERE student_id >= 2;
```

| student_id | name    | enrollment_date |
| ---------- | ------- | --------------- |
| 2          | Bob     | 2021-03-12      |
| 3          | Charlie | 2021-05-22      |
| 4          | David   | 2021-08-30      |

#### WHERE Clause Less Than (<)

The less than operator compares two non-null expressions. The result is true if the left operand evaluates to a value that is lower than the value of the right operand; otherwise, the result is false.

```sql
  SELECT * FROM Students WHERE student_id < 3;
```

| student_id | name  | enrollment_date |
| ---------- | ----- | --------------- |
| 1          | Alice | 2021-01-15      |
| 2          | Bob   | 2021-03-12      |

#### WHERE Clause Less Than or Equal To (<=)

The less than or equal to operator compares two non-null expressions and returns true if the left expression has a value less than or equal the value of the right expression; otherwise, it returns true.

```sql
SELECT * FROM Students WHERE student_id <= 3;
```

| student_id | name    | enrollment_date |
| ---------- | ------- | --------------- |
| 1          | Alice   | 2021-01-15      |
| 2          | Bob     | 2021-03-12      |
| 3          | Charlie | 2021-05-22      |

### WHERE Clause Logical Operators

#### ALL – Return True if All Comparisons are True

```sql
SELECT * FROM Students WHERE score >= ALL (SELECT score FROM TestScores WHERE test_id = 2);

```

This query selects all students whose scores in all tests are greater than or equal to the scores of test_id 2.

| student_id | name    | score |
| ---------- | ------- | ----- |
| 2          | Bob     | 88    |
| 3          | Charlie | 92    |

### AND – Return True if Both Expressions are True

```sql
SELECT * FROM Students WHERE enrollment_date > '2021-01-01' AND enrollment_date < '2022-01-01';
```

This query selects all students who enrolled after '2021-01-01' and before '2022-01-01'.

| student_id | name    | enrollment_date |
| ---------- | ------- | --------------- |
| 2          | Bob     | 2021-05-20      |
| 3          | Charlie | 2021-06-15      |

#### ANY – Return True if Any One of the Comparisons is True

```sql
SELECT * FROM Students WHERE score > ANY (SELECT score FROM TestScores WHERE test_id = 3);
```

This query selects all students who have a score greater than any score from test_id 3.

| student_id | name  | score |
| ---------- | ----- | ----- |
| 1          | Alice | 75    |
| 4          | David | 82    |

#### BETWEEN – Return True if the Operand is Within a Range

```sql
SELECT * FROM Students WHERE student_id BETWEEN 1 AND 3;
```

This query selects all students whose student_id is between 1 and 3 (inclusive).

| student_id | name    |
| ---------- | ------- |
| 1          | Alice   |
| 2          | Bob     |
| 3          | Charlie |

#### EXISTS – Return True if a Subquery Contains Any Rows

```sql
SELECT * FROM Students WHERE EXISTS (SELECT * FROM TestScores WHERE Students.student_id = TestScores.student_id);
```

This query selects all students who have at least one entry in the TestScores table.

| student_id | name    |
| ---------- | ------- |
| 1          | Alice   |
| 3          | Charlie |

#### IN – Return True if the Operand is Equal to One of the Value in a List

```sql
SELECT * FROM Students WHERE name IN ('Alice', 'Bob');
```

This query selects all students whose name is either 'Alice' or 'Bob'.

| student_id | name  |
| ---------- | ----- |
| 1          | Alice |
| 2          | Bob   |

#### LIKE – Return True if the Operand Matches a Pattern

```sql
SELECT * FROM Students WHERE name LIKE 'Al%';
```

This query selects all students whose names start with 'Al'.

| student_id | name  |
| ---------- | ----- |
| 1          | Alice |

#### NOT – Reverse the Result of Any Other Boolean Operator

```sql
SELECT * FROM Students WHERE NOT (student_id > 2);
```

This query selects all students whose student_id is not greater than 2.

| student_id | name  |
| ---------- | ----- |
| 1          | Alice |
| 2          | Bob   |

#### OR – Return True if Either Expression is True

```sql
SELECT * FROM Students WHERE student_id < 2 OR student_id > 3;
```

This query selects all students whose student_id is either less than 2 or greater than 3.

| student_id | name  |
| ---------- | ----- |
| 1          | Alice |
| 4          | David |

#### SOME – Return True if Some of the Expressions are True

```sql
SELECT * FROM Students WHERE score > SOME (SELECT score FROM TestScores WHERE test_id = 4);
```

| student_id | name  | score |
| ---------- | ----- | ----- |
| 2          | Bob   | 83    |
| 4          | David | 89    |

This query selects all students who have a score greater than some scores from test_id 4.


---

## SQL Aggregate Functions

#### AVG() – Returns the Average of a Set

```sql
SELECT AVG(score) AS average_score FROM Students;
```

| average_score |
| ------------- |
| 82.5          |

### COUNT() – Returns the Number of Items in a Set

```sql
SELECT COUNT(*) AS total_students FROM Students;
```

| total_students |
| -------------- |
| 4              |

#### MAX() – Returns the Maximum Value in a Set

```sql
SELECT MAX(score) AS max_score FROM Students;
```

| max_score |
| --------- |
| 95        |

#### MIN() – Returns the Minimum Value in a Set

```sql
SELECT MIN(score) AS min_score FROM Students;
```

| min_score |
| --------- |
| 70        |

#### SUM() – Returns the Sum of All or Distinct Values in a Set

```sql
SELECT SUM(score) AS total_scores FROM Students;
```

| total_scores |
| ------------ |
| 330          |



### Cloud Database
https://supabase.com/

https://planetscale.com/


https://www.javatpoint.com/what-is-database
https://www.w3schools.com/sql/
https://www.tutorialspoint.com/sql/index.htm
https://www.sqltutorial.org/

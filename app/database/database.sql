-- user table
CREATE TABLE  IF NOT EXISTS users (
    user_id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE, -- Ensuring unique email addresses
    password VARCHAR(255) NOT NULL, -- Ensure length is suitable for hashed passwords
    PRIMARY KEY (user_id)
);



-- expense table
CREATE TABLE IF NOT EXISTS  expenses (
    expense_id INT NOT NULL AUTO_INCREMENT,
    user_id INT NOT NULL,
    datetime DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    expense_type ENUM('coffee', 'milk', 'sugar', 'other') NOT NULL DEFAULT 'coffee',
    amount INT NOT NULL DEFAULT 0, 
    PRIMARY KEY (expense_id),
    FOREIGN KEY (user_id) REFERENCES users(user_id)
);


-- coffee table
CREATE TABLE IF NOT EXISTS  coffees (
    coffee_id INT NOT NULL AUTO_INCREMENT,
    count INT NOT NULL DEFAULT 1,
    user_id INT NOT NULL,
    coffee_type ENUM('regular', 'medium', 'large') NOT NULL DEFAULT 'regular',
    datetime DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (coffee_id),
    FOREIGN KEY (user_id) REFERENCES users(user_id)
);


-- create another table for coffee request
CREATE TABLE IF NOT EXISTS  request_coffees (
    request_id INT NOT NULL AUTO_INCREMENT,
    user_id INT NOT NULL,
    request_time DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    delivery_time DATETIME NOT NULL,
    coffee_id INT NULL,
    status ENUM('pending', 'completed') NOT NULL DEFAULT 'pending',
    PRIMARY KEY (request_id),
    FOREIGN KEY (user_id) REFERENCES users(user_id),
    FOREIGN KEY (coffee_id) REFERENCES coffees(coffee_id)
);

ALTER TABLE coffees 
ADD COLUMN request_id INT NULL;

ALTER TABLE coffees
ADD FOREIGN KEY (request_id) REFERENCES request_coffees(request_id);


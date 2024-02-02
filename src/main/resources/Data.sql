-- Inserting into user table
INSERT INTO user VALUES (1, 'Siamak', 'Codeengine11@gmail.com');
INSERT INTO user VALUES (2, 'John', 'John@john.com');
INSERT INTO user VALUES (3, 'Adam', 'adam@adam.com');

-- Inserting into category table
INSERT INTO category VALUES (1, 'Food');
INSERT INTO category VALUES (2, 'Travel');
INSERT INTO category VALUES (3, 'Rent');

-- Inserting into expense table
-- Using current date in 'YYYY-MM-DD' format
INSERT INTO expense VALUES (100, 'Food Expense', CURRENT_DATE, '10', 1, 1);
INSERT INTO expense VALUES (101, 'Travel Expense', CURRENT_DATE, '20', 2, 2);
INSERT INTO expense VALUES (102, 'Rent Expense', CURRENT_DATE, '30', 3, 3);



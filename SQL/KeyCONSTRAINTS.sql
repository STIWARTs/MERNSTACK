
CREATE DATABASE IF NOT EXISTS instagram;

USE instagram;

CREATE TABLE user (
	id INT,
    age INT,
    name VARCHAR(30) NOT NULL,
    email VARCHAR(50) UNIQUE,
    followers INT DEFAULT 0,
    following INT,
    CONSTRAINT CHECK (age >= 13),
    PRIMARY KEY (id)
);

INSERT INTO user
(id, age, name, email, followers, following)
VALUES
(1, 14, "adam", "adam@yahoo.in", 123, 145),
(2, 15, "bob", "bob123@gamil.com", 200, 200);

INSERT INTO user
(id, age, name, email, followers, following)
VALUES
(5, 14, "eve", "eve@yahoo.in", 400, 145),
(6, 16, "farah", "farah@gamil.com", 10000, 1000),
(4, 17, "donald", "donald@gmail.com", 200, 105);

INSERT INTO user
(id, name, email, following)
VALUES
(7, "gemini", "geme@yahoo.in", 125);
 
 SELECT id, name, email FROM user;
 
 SELECT * FROM user
 WHERE followers >= 200;
 
 SELECT name, age, followers
 FROM user
 WHERE age < 15 OR followers > 200;
 
 SELECT name, age, followers
 FROM user
 WHERE age BETWEEN 15 AND 17;
 
 SELECT name, age, followers
 FROM user
 WHERE age NOT IN (14, 16);
 
 SELECT name, age, followers
 FROM user
 WHERE email IN ("donald@gmail.com", "bob123@gmail.com", "abc@gmail.com");
 
 SELECT name, age, followers
 FROM user
 WHERE age  >14
 LIMIT 2;
 
 
 SELECT name, age
 FROM user
 WHERE age + 1 = 18;
 
 SELECT name, age, followers
 FROM user
 ORDER BY followers;
 
  SELECT max(followers)
  FROM user;
  
  SELECT count(age)
  FROM user
  WHERE age =14;
  
  SELECT age, max(followers)
  FROM user
  GROUP BY age
  HAVING max(followers) > 200
  ORDER BY age DESC;
  
  
  SET SQL_SAFE_UPDATES = 0;
  
  UPDATE user 
  SET followers = 600
  WHERE age = 16;
  
  
  
  SELECT * 
  FROM user;
  
  DELETE FROM user
  WHERE age = 16; 
  
  
  ALTER TABLE user
  ADD COLUMN city VARCHAR(25) DEFAULT "Delhi";
  
  ALTER TABLE user 
  DROP COLUMN age;
  
  ALTER TABLE user
  RENAME TO instaUser;
  
  SELECT * 
  FROM instaUser;
  
  ALTER TABLE instaUser
  RENAME TO user;
  
  
  ALTER TABLE user 
  CHANGE COLUMN followers subs INT DEFAULT 0;
  
  ALTER TABLE user
  MODIFY subs INT DEFAULT 5;

 
CREATE TABLE post (
	id INT PRIMARY KEY,
    content VARCHAR(100),
    user_id INT,
    FOREIGN KEY(user_id) REFERENCES user(id)
);
    
    
    
    
    
    
    
    






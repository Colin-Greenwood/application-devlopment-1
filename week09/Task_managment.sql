-- Create Database
CREATE DATABASE task_management_db;
USE task_management_db;

-- Create Users Table
CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE
);

-- Create Projects Table
CREATE TABLE projects (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    description VARCHAR(255),
    user_id INT,
    FOREIGN KEY (user_id) REFERENCES users(id)
);

-- Create Tasks Table
CREATE TABLE tasks (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(100) NOT NULL,
    status VARCHAR(50) NOT NULL,
    project_id INT,
    FOREIGN KEY (project_id) REFERENCES projects(id)
);

-- Insert Users
INSERT INTO users (name, email) VALUES
('Alice Johnson', 'alice@example.com'),
('Bob Smith', 'bob@example.com'),
('Charlie Brown', 'charlie@example.com');

-- Insert Projects
INSERT INTO projects (name, description, user_id) VALUES
('Website Redesign', 'Update company website', 1),
('Mobile App', 'Develop new mobile application', 2),
('Database Setup', 'Create and manage database', 3);

-- Insert Tasks
INSERT INTO tasks (title, status, project_id) VALUES
('Design homepage', 'completed', 1),
('Fix navigation bugs', 'in progress', 1),
('Build login feature', 'completed', 2),
('Test app performance', 'pending', 2),
('Create tables', 'completed', 3);

-- Query 1: Show all users
SELECT * FROM users;

-- Query 2: Show all projects
SELECT * FROM projects;

-- Query 3: Show all tasks
SELECT * FROM tasks;

-- Query 4: Tasks with project names
SELECT 
    tasks.title,
    tasks.status,
    projects.name AS project_name
FROM tasks
JOIN projects ON tasks.project_id = projects.id;

-- Query 5: Projects with user names
SELECT 
    projects.name AS project_name,
    users.name AS user_name
FROM projects
JOIN users ON projects.user_id = users.id;

-- Query 6: Only completed tasks
SELECT * FROM tasks
WHERE status = 'completed';

-- Query 7: Tasks sorted alphabetically
SELECT * FROM tasks
ORDER BY title ASC;
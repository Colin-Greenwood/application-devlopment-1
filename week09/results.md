## Database Overview
This database represents a Task Management System used to organize users, their projects, and the tasks within those projects. It helps track work progress and relationships between users and their responsibilities.

## Tables Created
- users
- projects
- tasks

## Relationships
- One user can have many projects (one-to-many relationship)
- One project can have many tasks (one-to-many relationship)
- Each project belongs to one user
- Each task belongs to one project

## Primary Key Explanation
A primary key is a unique identifier for each record in a table. It ensures that no two rows have the same value. For example, the `id` column in each table is the primary key.

## Foreign Key Explanation
A foreign key is a column that links one table to another. It creates relationships between tables. For example:
- `projects.user_id` references `users.id`
- `tasks.project_id` references `projects.id`
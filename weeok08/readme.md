# Task Manager API

## Project Overview

The Task Manager API is a RESTful backend service built with Node.js and Express.  
It allows users to create, read, update, and delete tasks.

The API is designed to demonstrate clean backend architecture, middleware usage, validation, and structured API documentation.

### Target Users
- Developers learning REST API design
- Applications needing a simple task management backend
- Students practicing Express.js backend development

### Core Resources

The main resource used in this API is:

- **Tasks** — Represents a task that a user wants to track.

Each task includes:
- id
- title
- description
- completed status
- created date

---

## Setup Instructions

### Node Version
This project was built using:
JavaScript

### Install Dependencies

Clone the repository and install dependencies:

```bash
npm install
npx nodemon server.js

### server will strat on
http://localhost:3000

PORT=3000
| Method | Endpoint   | Description            |
| ------ | ---------- | ---------------------- |
| GET    | /tasks     | Retrieve all tasks     |
| GET    | /tasks/:id | Retrieve a single task |
| POST   | /tasks     | Create a new task      |
| PUT    | /tasks/:id | Update a task          |
| DELETE | /tasks/:id | Delete a task          |
POST /tasks
{
  "error": "Title is required"
}
{
  "error": "Unauthorized access"
}
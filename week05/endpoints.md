# Endpoints (REST Design)

Base URL: /api

## Users

### GET /users
- Purpose: Get all users (collection)
- Returns: 200 OK

### GET /users/{userId}
- Purpose: Get one user by ID (single resource)
- Returns: 200 OK (or 404 Not Found)

### POST /users
- Purpose: Create a new user
- Returns: 201 Created

### PATCH /users/{userId}
- Purpose: Update part of a user (e.g., displayName)
- Returns: 200 OK (or 404 Not Found)

### DELETE /users/{userId}
- Purpose: Delete a user account
- Returns: 204 No Content (or 404 Not Found)

---

## Lists

### GET /users/{userId}/lists
- Purpose: Get all lists for a user
- Returns: 200 OK

### GET /lists/{listId}
- Purpose: Get one list by ID
- Returns: 200 OK (or 404 Not Found)

### POST /users/{userId}/lists
- Purpose: Create a new list for a user
- Returns: 201 Created

### PATCH /lists/{listId}
- Purpose: Update part of a list (e.g., name)
- Returns: 200 OK (or 404 Not Found)

### DELETE /lists/{listId}
- Purpose: Delete a list
- Returns: 204 No Content (or 404 Not Found)
- Note: Deleting a list also deletes (or archives) its tasks (implementation choice).

---

## Tasks

### GET /lists/{listId}/tasks
- Purpose: Get tasks in a list (supports filtering + pagination)
- Returns: 200 OK

### GET /tasks/{taskId}
- Purpose: Get one task by ID
- Returns: 200 OK (or 404 Not Found)

### POST /lists/{listId}/tasks
- Purpose: Create a new task inside a list
- Returns: 201 Created

### PATCH /tasks/{taskId}
- Purpose: Update part of a task (e.g., completed, title, dueDate, priority)
- Returns: 200 OK (or 404 Not Found)

### DELETE /tasks/{taskId}
- Purpose: Delete a task
- Returns: 204 No Content (or 404 Not Found)

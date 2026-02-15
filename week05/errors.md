{
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "Invalid request body",
    "details": {
      "title": "Title is required"
    }
  }
}

{
  "error": {
    "code": "NOT_FOUND",
    "message": "Task not found",
    "details": {
      "taskId": "tsk_does_not_exist"
    }
  }
}

{
  "error": {
    "code": "CONFLICT",
    "message": "A user with that email already exists",
    "details": {
      "email": "colin@example.com"
    }
  }
}


---

## `week05/pagination.md`

```md
# Pagination & Filtering

## Endpoint with Pagination
- GET /lists/{listId}/tasks

## Pagination Method
- page/limit pagination

### Query Parameters
- page (default: 1)
- limit (default: 10, max: 50)

### Example
GET /api/lists/lst_555/tasks?page=2&limit=10

---

## Filtering (optional but supported in this design)
These filters can be combined with pagination:

- completed=true|false
- priority=low|medium|high
- dueBefore=YYYY-MM-DD
- dueAfter=YYYY-MM-DD

### Example
GET /api/lists/lst_555/tasks?completed=false&priority=high&page=1&limit=5

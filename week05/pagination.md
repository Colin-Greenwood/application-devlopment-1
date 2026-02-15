# Pagination & Filtering

## Endpoint That Supports Pagination
GET /lists/{listId}/tasks

This endpoint returns a collection of tasks and may contain many results, so it supports pagination.

---

## Pagination Method
This API uses page/limit pagination.

- page → which page of results to return (default: 1)
- limit → number of results per page (default: 10, max: 50)

---

## Example Query Parameters

Get the first 10 tasks:
GET /api/lists/lst_555/tasks?page=1&limit=10

Get the second page with 5 tasks per page:
GET /api/lists/lst_555/tasks?page=2&limit=5

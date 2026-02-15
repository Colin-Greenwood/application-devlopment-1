# Example Requests & Responses

All examples assume JSON and Base URL: /api

---

## 1) POST /users (Create a user)

### Request
**POST** /api/users  
**Status:** 201 Created

Body:
```json
{
  "email": "colin@example.com",
  "displayName": "Colin"
}

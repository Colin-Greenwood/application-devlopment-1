# Resources

## Resource: users
- Endpoint: /users/{userId}
- Related: /users/{userId}/lists (a user owns many lists)

## Resource: lists
- Endpoint: /lists/{listId}
- Related: /lists/{listId}/tasks (a list contains many tasks)

## Resource: tasks
- Endpoint: /tasks/{taskId}
- Related: /lists/{listId}/tasks (tasks belong to a list)

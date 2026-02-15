# Design Decisions

## Why I chose these resources
I chose users, lists, and tasks because they represent the core nouns of a todo system. Users own lists, and lists contain tasks. This structure reflects how real todo applications are organized and keeps relationships clear and logical.

## Why I chose PATCH instead of PUT
I chose PATCH because most updates in a todo system are partial updates, such as marking a task as completed or changing a title. PATCH allows updating only the fields that change without requiring the full resource to be sent. This reduces accidental overwrites and makes the API more flexible.

## How my API avoids breaking clients
The API uses stable resource IDs and consistent REST naming conventions. I avoid removing fields from responses and would only add new optional fields in the future. This ensures existing clients continue working even if the API evolves.

## One tradeoff I made
I chose simple page/limit pagination instead of cursor-based pagination because it is easier to understand and implement. However, page-based pagination can be less consistent if data changes between requests.

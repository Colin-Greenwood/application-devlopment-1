const express = require("express");
const app = express();

const tasksRoutes = require("./routes/tasksroutes");
const usersRoutes = require("./routes/usersRoutes");
const timingMiddleware = require("./middleware/timing");
const logger = require("./middleware/logger");
const notFound = require("./middleware/notFound");

app.use(express.json());
app.use(logger);
app.use(timingMiddleware);

app.use("/tasks", tasksRoutes);
app.use("/users", usersRoutes);

// 404 handler (must be last)
app.use(notFound);

app.listen(3000, () => console.log("Server running on port 3000"));
const express = require("express");
const app = express();

const tasksRoutes = require("./routes/tasksroutes");
const usersRoutes = require("./routes/usersRoutes");

app.use(express.json());

app.use("/tasks", tasksRoutes);
app.use("/users", usersRoutes);

app.listen(3000, () => console.log("Server running on port 3000"));


// Parse incoming JSON bodies
app.use(express.json());

const notFound = require("./middleware/notFound");

// All routes above
app.use("/tasks", tasksRoutes);
app.use("/users", usersRoutes);

// 404 handler (must be last)
app.use(notFound);

const logger = require("./middleware/logger");
app.use(logger); // globally applied
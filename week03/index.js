console.log("Colin Greenwood");
console.log("Course: CS31103");
console.log("Week 3");

console.log("Node Version:", process.version);
console.log("Current Date/Time:", new Date());

const port = process.env.PORT || 3000;
const environment = process.env.NODE_ENV || "development";

const appConfig = {
  port,
  environment,
  startedAt: new Date()
};

console.log(JSON.stringify(appConfig, null, 2));


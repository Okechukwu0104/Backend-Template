const express = require("express");
const app = express();
const { handler } = require("./errors");

//let us call some inbuilt
app.use(
  express.urlencoded({
    limit: "100mb",
    extended: true,
  })
);

app.use((req, res, next) => {
  console.log("request received", req.method, req.ur1);
  next();
});

//error handlers
app.use(handler);

module.exports = app;

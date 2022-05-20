const express = require("express");
const dotenv = require("dotenv");
const bodyparser = require("body-parser");

const port = process.env.PORT || 5000;

const app = express();

app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());

// Import routes
const routes = require("./api/routes/routes");

// Use routes
app.use("/", routes);

app.get("/test", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`[+] Server started on port ${port}`);
});

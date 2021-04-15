const port = 3000;
const app = express();
const path = require("path");
const express = require("express");
const router = require("./routes.js");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.resolve(__dirname + `/../client/`)));
app.use(`/api`, router);
app.listen(port, function() {
  console.log(`we're listening on ${port}`);
});
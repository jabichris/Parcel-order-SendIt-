// importing our dependencies
const express = require("express");
const app = express();

const routes = require("./routes");

const port = process.env.PORT || 3000;
app.use(express.json());
app.use("/", routes);

app.listen(port, () => {
  console.log("App listening on port 3000");
});

module.exports = app;

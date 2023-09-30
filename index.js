const express = require("express");
const mongoose = require("mongoose");
const { routeUrl } = require("./routes");

const app = express();
app.set("view engine", "ejs");

app.use("/", routeUrl);

const APP_PORT = process.env.APP_PORT || 9000;
const MONGO_URI = process.env.MONGO_URI;

mongoose
  .connect(MONGO_URI)
  .then(() => {
    app.listen(APP_PORT, () => {
      console.log(`Server running on port ${APP_PORT} 🚀`);
    });
  })
  .catch(console.log);

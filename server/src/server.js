const express = require("express");
const mongoose = require("mongoose");
const users = require("./routes/api/users");
const passport = require("passport");
const db = require("../config/keys").mongoDB;

const app = express();

mongoose
  .connect(db, { usenewurlparser: true })
  .then(() => console.log("Connected to MongoDB successfully"))
  .catch((err) => console.log(err));

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(passport.initialize());
require("../config/passport")(passport);
app.use("/api/users", users);

const port = process.env.PORT || 5001;

app.listen(port, () => console.log(`Server is now running on port ${port}`));

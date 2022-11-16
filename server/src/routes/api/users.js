const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");

const saltRounds = 10;
const User = require("../../models/User");
const validateRegisterInputs = require("../../validations/register");

router.get("/test", (req, res) => res.json({ msg: "Users test route" }));

router.post("/register", (req, res) => {
  const { errors, isValid } = validateRegisterInputs(req.body);
  if (!isValid) return res.status(400).json(errors);

  User.findOne({ email: req.body.email }).then((user) => {
    if (user) {
      errors.email = "User already exists";
      return res.status(400).json(errors);
    } else {
      const newUser = new User({
        email: req.body.email,
        password: req.body.password1,
      });

      bcrypt.genSalt(saltRounds, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) throw err;
          newUser.password = hash;
          newUser
            .save()
            .then((user) => res.json(user))
            .catch((err) => console.log(err));
        });
      });
    }
  });
});

module.exports = router;

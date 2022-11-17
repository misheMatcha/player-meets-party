const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const passport = require("passport");

const saltRounds = 10;
const keys = require("../../../config/keys");
const User = require("../../models/User");
const validateRegisterInputs = require("../../validations/register");
const validateLoginInputs = require("../../validations/login");

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
            .then((user) => {
              const payload = { id: user.id, email: user.email };
              jwt.sign(
                payload,
                keys.secretOrKey,
                { expiresIn: 3600 },
                (err, token) => {
                  res.json({ success: true, token });
                }
              );
            })
            .catch((err) => console.log(err));
        });
      });
    }
  });
});

router.post("/login", (req, res) => {
  const { errors, isValid } = validateLoginInputs(req.body);
  if (!isValid) return res.status(400).json(errors);

  User.findOne({ email: req.body.email }).then((user) => {
    if (!user) {
      errors.email = "User doesn't exist";
      return res.status(400).json(errors);
    }

    bcrypt.compare(req.body.password, user.password).then((isMatch) => {
      if (isMatch) {
        const payload = { id: user.id, email: user.email };

        jwt.sign(
          payload,
          keys.secretOrKey,
          { expiresIn: 3600 },
          (err, token) => {
            res.json({ success: true, token });
          }
        );
      } else {
        return res.status(400).json({
          incorrectemailorpassword: "Incorrect email or password combination",
        });
      }
    });
  });
});

router.get(
  "/current",
  passport.authenticate("jwt", { session: false }),
  (req, res) => res.json({ id: req.user.id, email: req.user.email })
);

module.exports = router;

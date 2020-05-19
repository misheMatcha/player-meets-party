const express = require('express');
const router = express.Router();
const validateRegisterInput = require('../../validation/register');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const keys = require('../../config/keys');

const User = require('../../models/User');

router.get('/test', (req, res) => res.json({ msg: 'This is the users route.' }));

router.post('/register', (req, res) => {
  const { errors, isValid } = validateRegisterInput(req.body);

  if(!isValid) return res.status(400).json(errors);

  User.findOne({ email: req.body.email }).then(user => {
    if(user){
      errors.email = "User already exists";
      return res.status(400).json(errors);
    }else{
      const newUser = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        birthday: req.body.birthday,
        state: req.body.state,
        zip: req.body.zip
      });

      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if(err) throw err;
          newUser.password = hash;
          newUser.save()
            .then(user => {
              const payload = {
                id: user.id,
                name: user.name
              };

              jwt.sign(payload, keys.secretOrKey, { expiresIn: 3600 }, (err, token) => {
                res.json({
                  success: true,
                  token: "Bearer " + token
                });
              });
            })
            .catch(err => console.log(err));
        });
      });
    }
  });
});

module.exports = router;
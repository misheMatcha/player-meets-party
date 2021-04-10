const express = require('express')
const router = express.Router()
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const passport = require('passport')

const keys = require('../../../config/keys')
const validateRegisterInput = require('../../validation/register')
const User = require('../../models/User')

router.post('/register', (req, res) => {
	const { errors, isValid } = validateRegisterInput(req.body)

	if (!isValid) return res.status(400).json(errors)

	User.findOne({ email: req.body.email }).then(user => {
		if (user) {
			errors.email = 'User already exists'
			return res.status(400).json(errors)
		} else {
			const newUser = new User({
				name: req.body.name,
				email: req.body.email,
				password: req.body.password,
				birthday: req.body.birthday,
				state: req.body.state,
				zip: req.body.zip
			})

			bcrypt.genSalt(10, (err, salt) => {
				bcrypt.hash(newUser.password, salt, (err, hash) => {
					if (err) throw err
					newUser.password = hash
					newUser
						.save()
						.then(user => {
							const payload = {
								id: user.id,
								name: user.name
							}

							jwt.sign(
								payload,
								keys.secretOrKey,
								{ expiresIn: 3600 },
								(err, token) => {
									res.json({
										success: true,
										token: 'Bearer ' + token
									})
								}
							)
						})
						.catch(err => console.log(err))
				})
			})
		}
	})
})

router.post('/login', (req, res) => {
	const email = req.body.email
	const password = req.body.password

	User.findOne({ email }).then(user => {
		if (!user)
			return res.status(404).json({ email: 'This user does not exist' })

		bcrypt.compare(password, user.password).then(isMatch => {
			if (isMatch) {
				const payload = {
					id: user.id,
					name: user.name,
					email: user.email
				}

				jwt.sign(
					payload,
					keys.secretOrKey,
					{ expiresIn: 3600 },
					(err, token) => {
						res.json({
							success: true,
							token: 'Bearer ' + token
						})
					}
				)
			} else {
				res.status(400).json({
					password: 'Incorrect email or password'
				})
			}
		})
	})
})

router.get('/', (req, res) => {
	User.find()
		.then(users => res.json(users))
		.catch(err => res.status(404).json({ nousersfound: 'No users found' }))
})

router.get('/:id', (req, res) => {
	User.findById(req.params.id)
		.then(user => res.json(user))
		.catch(err =>
			res.status(404).json({ nouserfound: 'No user was found' })
		)
})

router.patch('/:id', (req, res) => {
	const filter = { _id: req.params.id }
	const update = req.body
	User.findOneAndUpdate(filter, update, { new: true })
		.then(user => res.json(user))
		.catch(err =>
			res
				.status(400)
				.json({ unabletoupdateuser: 'Unable to update user' })
		)
})

router.get(
	'/current',
	passport.authenticate('jwt', { session: false }),
	(req, res) => {
		res.json({
			id: req.user.id,
			name: req.user.name,
			email: req.user.email,
			birthday: req.user.birthday,
			state: req.user.state,
			zip: req.user.zip
		})
	}
)

module.exports = router

const express = require('express')
const mongoose = require('mongoose')
const users = require('./routes/api/users')
const passport = require('passport')
const db = require('../config/keys').mongoURI
const path = require('path')

const app = express()

mongoose
	.connect(db, { useNewUrlParser: true })
	.then(() => console.log('Connected to MongoDB successfully'))
	.catch(err => console.log(err))

if (process.env.NODE_ENV === 'production') {
	app.use(express.static('client/build'))
	app.get('/', (req, res) => {
		res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
	})
}

// Express 4.16+ deprecated bodyParser, use express
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.use(passport.initialize())
require('../config/passport')(passport)
app.use('/api/users', users)

const port = process.env.PORT || 5000

app.listen(port, () => console.log(`Server is running on port ${port}`))

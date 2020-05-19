const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const users = require('./routes/api/users');

const db = require('./config/keys').MONGO_URI;

const app = express();

mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log('Connected to MongoDB successfully'))
  .catch(err => console.log(err));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => res.send('Server test'));
app.use('/api/users', users);

const port = process.env.PORT || 5000;


app.listen(port, () => console.log(`Server is running on port ${port}`));
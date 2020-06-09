const User = require('../models/User');
// const seed = require('./user-seed-data').USERS;
const mongoose = require('mongoose');
const db = require('../config/keys').mongoURI;

const USERS = [
  new User({
    name: `Mishe`,
    email: `user-1@pmp.com`,
    password: `password`,
    birthday: `1986/12/02`,
    state: `CA`,
    zip: 95137,
    orientation: `Bisexual`,
    gender: `Woman`,
    relationship_status: `Single`,
    relationship_type: `Monogamous`,
    pronouns: `Pronouns`,
    height: `5"2'`,
    body_type: `Body type`,
    ethnicity: [],
    languages: [],
    politics: `Politics`,
    education: `Education`,
    occupation: `Being cool`,
    religion: `Religion`,
    sign: `Sign`,
    tobacco: false,
    drinks: false,
    marijuana: false,
    diet: `Diet`,
    kids: false,
    pets: false,
    gamelist: [],
    game_genres: [],
    platform: `Platform`,
    pref_gender: `Gender`,
    pref_distance: 10,
    pref_age: 18,
    pref_connections: `Connections`,
    profile_essay_questions: [0, 1, 0, 0, 0, 0, 0, 0, 0],
    profile_essay_answers: [`Do you understand what I am saying?`, `Just living in the code`, `I want to be a continuing source of inspiration`, ``, ``, ``, `Ayyyyyyyy`, ``, ``],
    liked: [],
    passed: [],
    blocked: []
  }),
  new User({
    name: `Chris`,
    email: `user-2@pmp.com`,
    password: `password`,
    birthday: `1979/3/018`,
    state: `CA`,
    zip: 95112,
    orientation: `Straight`,
    gender: `Man`,
    relationship_status: `Single`,
    relationship_type: `Monogamous`,
    pronouns: `Pronouns`,
    height: `5"6'`,
    body_type: `Thin`,
    ethnicity: [],
    languages: [],
    politics: `Politics`,
    education: `Education`,
    occupation: `Occupation`,
    religion: `Religion`,
    sign: `Leo`,
    tobacco: true,
    drinks: true,
    marijuana: false,
    diet: `Diet`,
    kids: true,
    pets: false,
    gamelist: [],
    game_genres: [],
    platform: `Platform`,
    pref_gender: `Gender`,
    pref_distance: 10,
    pref_age: 18,
    pref_connections: `Connections`,
    profile_essay_questions: [0, 5, 0, 0, 0, 0, 0, 0, 0],
    profile_essay_answers: [``, `Writing random things here to fill in these sections`, ``, ``, `AHHHHHHHHH`, ``, ``, ``, ``],
    liked: [],
    passed: [],
    blocked: []
  }),
];

mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log('Connected to MongoDB successfully'))
  .catch(err => console.log(err));

var done = 0;
for (let i = 0; i < USERS.length; i++){
  USERS[i].save((err, result) => {
    done++;
    if(done === USERS.length) exit();
  });
}

const exit = () => mongoose.disconnect();
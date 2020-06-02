const User = require('../models/User');
// const seed = require('./user-seed-data').USERS;
const mongoose = require('mongoose');
const db = require('../config/keys').mongoURI;

const USERS = [
  new User({
    name: `Jamie`,
    email: `guest@pmp.com`,
    password: `password`,
    birthday: `1993/07/27`,
    state: `CA`,
    zip: 94043,
    orientation: `Bisexual`,
    gender: `Androgynous`,
    relationship_status: `Single`,
    relationship_type: `Monogamous`,
    pronouns: `They/Them/Theirs`,
    height: `5ft-9in`,
    body_type: `A little extra`,
    ethnicity: [],
    languages: ['English'],
    politics: `Politics`,
    education: `Education`,
    occupation: `Software Engineer`,
    religion: `Religion`,
    sign: `Leo`,
    tobacco: false,
    drinks: true,
    marijuana: false,
    diet: `Diet`,
    kids: false,
    pets: false,
    gamelist: [],
    game_genres: [],
    platform: `Platform`,
    pref_gender: `Gender`,
    pref_distance: 50,
    pref_age: 30,
    pref_connections: `new friends`,
    profile_essay_questions: [0, 3, 0, 0, 0, 0, 1, 0, 0],
    profile_essay_answers: [`New to the bay and looking to meet new friends. (:`, `My kindness. Don't be mean peeps.`, ``, `Flipping tables over because I keep dying in Sekiro.`, ``, ``],
    liked: [],
    passed: [],
    blocked: []
  }),
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
    height: `5ft-2in`,
    body_type: `Body type`,
    ethnicity: [],
    languages: [],
    politics: `Politics`,
    education: `Education`,
    occupation: `Occupation`,
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
    profile_essay_answers: [``, `Just living in the code.`, ``, ``, ``, ``],
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
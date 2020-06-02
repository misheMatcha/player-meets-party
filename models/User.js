const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  birthday: {
    type: String,
    required: true
  },
  state: {
    type: String,
    required: true
  },
  zip: {
    type: Number,
    required: true
  },
  orientation: {
    type: String,
    default: 'Orientation'
  },
  gender: {
    type: String,
    default: 'Gender'
  },
  relationship_status: {
    type: String,
    default: 'Single'
  },
  relationship_type: {
    type: String,
    default: 'Monogamous'
  },
  pronouns: {
    type: String,
    default: 'Pronouns'
  },
  height: {
    type: String,
    default: `0ft-0in`
  },
  body_type: {
    type: String,
    default: 'Body type'
  },
  ethnicity: {
    type: Array
  },
  languages: {
    type: Array
  },
  politics: {
    type: String,
    default: 'Politics'
  },
  education: {
    type: String,
    default: 'Education'
  },
  occupation: {
    type: String,
    default: 'Occupation'
  },
  religion: {
    type: String,
    default: 'Religion'
  },
  sign: {
    type: String,
    default: 'Sign'
  },
  tobacco: {
    type: Boolean,
    default: false
  },
  drinks: {
    type: Boolean,
    default: false
  },
  marijuana: {
    type: Boolean,
    default: false
  },
  diet: {
    type: String,
    default: 'Diet'
  },
  kids: {
    type: Boolean,
    default: false
  },
  pets: {
    type: Boolean,
    default: false
  },
  gamelist: {
    type: Array
  },
  game_genres: {
    type: Array
  },
  platform: {
    type: String,
    default: 'Platform'
  },
  pref_gender: {
    type: String,
    default: 'Gender'
  },
  pref_distance: {
    type: Number,
    default: 0
  },
  pref_age: {
    type: Number,
    default: 18
  },
  pref_connections: {
    type: String,
    default: 'Connections'
  },
  profile_essay_questions: {
    type: Array,
    default: [0, 0, 0, 0, 0, 0, 0, 0, 0]
  },
  profile_essay_answers: {
    type: Array,
    default: [``, ``, ``, ``, ``, ``]
  },
  liked: {
    type: Array
  },
  passed: {
    type: Array
  },
  blocked: {
    type: Array
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = User = mongoose.model('User', UserSchema);
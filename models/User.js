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
  gender: {
    type: String,
    default: null
  },
  orientation: {
    type: String,
    default: null
  },
  relationship: {
    type: String,
    default: null
  },
  pronouns: {
    type: String,
    default: null
  },
  height: {
    type: Number,
    default: null
  },
  body_type: {
    type: String,
    default: null
  },
  ethnicity: {
    type: Array
  },
  languages: {
    type: Array
  },
  politics: {
    type: String,
    default: null
  },
  education: {
    type: String,
    default: null
  },
  occupation: {
    type: String,
    default: null
  },
  religion: {
    type: String,
    default: null
  },
  sign: {
    type: String,
    default: null
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
    default: null
  },
  pref_gender: {
    type: String,
    default: null
  },
  pref_distance: {
    type: Number,
    default: null
  },
  pref_age: {
    type: Number,
    default: null
  },
  pref_connections: {
    type: String,
    default: null
  },
  profile_questions: {
    type: Array
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
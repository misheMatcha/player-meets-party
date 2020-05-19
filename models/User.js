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
    type: String
  },
  orientation: {
    type: String
  },
  relationship: {
    type: String
  },
  pronouns: {
    type: String
  },
  height: {
    type: Number
  },
  body_type: {
    type: String
  },
  ethnicity: {
    type: Array
  },
  languages: {
    type: Array
  },
  politics: {
    type: String
  },
  education: {
    type: String
  },
  occupation: {
    type: String
  },
  religion: {
    type: String
  },
  sign: {
    type: String
  },
  tobacco: {
    type: Boolean
  },
  drinks: {
    type: Boolean
  },
  marijuana: {
    type: Boolean
  },
  kids: {
    type: Boolean
  },
  pets: {
    type: Boolean
  },
  gamelist: {
    type: Array
  },
  game_genres: {
    type: Array
  },
  platform: {
    type: String
  },
  pref_gender: {
    type: String
  },
  pref_distance: {
    type: Number
  },
  pref_age: {
    type: Number
  },
  pref_connections: {
    type: String
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
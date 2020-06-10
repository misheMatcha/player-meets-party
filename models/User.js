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
    default: `Height`
  },
  body_type: {
    type: String,
    default: 'Body type'
  },
  ethnicity: {
    type: Object,
    default: {
      'Asian': false,
      'Black': false,
      'Hispanic / Latin': false,
      'Indian': false,
      'Middle Eastern': false,
      'Native American': false,
      'Pacific Islander': false,
      'White': false,
      'Other': false
    }
  },
  languages: {
    type: Array
  },
  fluency: {
    type: Array
  },
  politics: {
    type: String,
    default: ''
  },
  education: {
    type: String,
    default: ''
  },
  occupation: {
    type: String,
    default: ''
  },
  employer: {
    type: String,
    default: ''
  },
  religion: {
    type: String,
    default: ''
  },
  religion_weight: {
    type: String,
    default: ''
  },
  sign: {
    type: String,
    default: ''
  },
  smoking: {
    type: String,
    default: 'Smoking'
  },
  drinks: {
    type: String,
    default: 'Drinking'
  },
  marijuana: {
    type: String,
    default: 'Marijuana'
  },
  diet: {
    type: String,
    default: 'Diet'
  },
  children: {
    type: String,
    default: 'Children'
  },
  pets: {
    type: String,
    default: 'Pets'
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
    type: String,
    default: 'Distance'
  },
  pref_age: {
    type: String,
    default: 'Ages'
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
    default: [``, ``, ``, ``, ``, ``, ``, ``, ``]
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
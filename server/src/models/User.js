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
    type: Object,
    default: {
      'Straight': false,
      'Gay': false,
      'Bisexual': false,
      'Lesbian': false,
      'Queer': false,
      'Pansexual': false,
      'Questioning': false,
      'Heteroflexible': false,
      'Homoflexible': false,
      'Asexual': false,
      'Gray-asexual': false,
      'Demisexual': false,
      'Reciprosexual': false,
      'Akiosexual': false,
      'Aceflux': false,
      'Grayromantic': false,
      'Demiromantic': false,
      'Recipromantic': false,
      'Akioromantic': false,
      'Aroflux': false
    }
  },
  gender: {
    type: Object,
    default: {
      'Woman': false,
      'Man': false,
      'Agender': false,
      'Androgynous': false,
      'Bigender': false,
      'Cis Man': false,
      'Cis Woman': false,
      'Genderfluid': false,
      'Genderqueer': false,
      'Gender Nonconforming': false,
      'Hijira': false,
      'Intersex': false,
      'Non-binary': false,
      'Other': false,
      'Pangender': false,
      'Transfeminine': false,
      'Transgender': false,
      'Transmasculine': false,
      'Transsexual': false,
      'Trans Man': false,
      'Trans Woman': false,
      'Two Spirit': false
    }
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
    default: ''
  },
  height: {
    type: String,
    default: ``
  },
  body_type: {
    type: String,
    default: ''
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
    default: ''
  },
  drinks: {
    type: String,
    default: ''
  },
  marijuana: {
    type: String,
    default: ''
  },
  diet: {
    type: String,
    default: ''
  },
  children: {
    type: String,
    default: ''
  },
  wants_children: {
    type: String,
    default: ''
  },
  pets: {
    type: Object,
    default: {
      'Has dog(s)': false,
      'Has cat(s)': false,
      'Has other pet(s)': false,
      "Doesn't have pet(s)": false
    }
  },
  gamelist: {
    type: Array
  },
  game_genres: {
    type: Array
  },
  platforms: {
    type: Array,
  },
  pref_orientation: {
    type: Object,
    default: {
      'Straight': false,
      'Gay': false,
      'Bisexual': false,
      'Lesbian': false,
      'Queer': false,
      'Pansexual': false,
      'Questioning': false,
      'Heteroflexible': false,
      'Homoflexible': false,
      'Asexual': false,
      'Gray-asexual': false,
      'Demisexual': false,
      'Reciprosexual': false,
      'Akiosexual': false,
      'Aceflux': false,
      'Grayromantic': false,
      'Demiromantic': false,
      'Recipromantic': false,
      'Akioromantic': false,
      'Aroflux': false
    }
  },
  pref_gender: {
    type: Object,
    default: {
      'Woman': false,
      'Man': false,
      'Agender': false,
      'Androgynous': false,
      'Bigender': false,
      'Cis Man': false,
      'Cis Woman': false,
      'Genderfluid': false,
      'Genderqueer': false,
      'Gender Nonconforming': false,
      'Hijira': false,
      'Intersex': false,
      'Non-binary': false,
      'Other': false,
      'Pangender': false,
      'Transfeminine': false,
      'Transgender': false,
      'Transmasculine': false,
      'Transsexual': false,
      'Trans Man': false,
      'Trans Woman': false,
      'Two Spirit': false
    }
  },
  pref_distance: {
    type: String,
    default: '50 miles'
  },
  pref_age: {
    type: String,
    default: '-'
  },
  pref_connections: {
    type: Object,
    default: {
      'New friends': false,
      'Long-term dating': false,
      'Short-term dating': false,
      'Hookups': false
    }
  },
  pref_body_type: {
    type: Object,
    default: {
      'Thin': false,
      'Fit': false,
      'Average': false,
      'Jacked': false,
      'Curvy': false,
      'Full figured': false,
      'A little extra': false,
      'Overweight': false
    }
  },
  pref_height: {
    type: String,
    default: '-'
  },
  profile_essay_questions: {
    type: Array,
    default: ['My self-summary', 'Current goal', 'I could probably beat you at', 'My golden rule', 'I value', 'The last show I binged', 'A perfect day', "The most private thing I'm willing to admit", "What I'm actually looking for"]
  },
  profile_essay_answers: {
    type: Array,
    default: ['', '', '', '', '', '', '', '', '']
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
  ph_photos: {
    type: Array
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = User = mongoose.model('User', UserSchema);
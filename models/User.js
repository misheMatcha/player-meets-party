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
    type: Number,
    default: 0
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
    default: [`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam a urna ac ex aliquam ultricies sit amet vestibulum justo. Suspendisse sodales porta nunc sit amet egestas. Sed feugiat, metus vitae tempor venenatis, libero diam fringilla lacus, non ornare leo purus vitae neque. Aliquam ullamcorper mauris eros, et euismod nunc hendrerit nec. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Phasellus porta nibh nulla, et facilisis nulla viverra eu. Curabitur consectetur commodo lectus, eget iaculis elit tempor ac.

Duis sed eros ac odio rhoncus venenatis id sit amet enim. Morbi vehicula nec enim vitae ultricies. Morbi venenatis augue a orci fringilla mollis. Proin varius nulla dapibus, sollicitudin sapien id, facilisis tortor. Duis sagittis arcu vel lectus hendrerit finibus. Sed non leo ac purus molestie commodo. Maecenas dignissim placerat lectus in convallis. Nulla sagittis nulla nec nulla euismod, quis ornare leo pulvinar. Sed a viverra dui, feugiat pretium ipsum.`, 'test number two', `Integer ac mollis tellus, id euismod ipsum. Quisque mattis fermentum sem, at cursus sapien elementum a. Sed diam purus, venenatis non cursus ut, molestie a neque. Nulla rhoncus congue ligula, sit amet ultrices neque sollicitudin a. Duis pulvinar mauris id nibh mollis, in fermentum est blandit. Aenean a convallis ex. Aenean sit amet quam dui. Aenean facilisis semper massa, nec maximus nibh ullamcorper a. In varius augue orci, sed elementum nunc rutrum sed. Maecenas aliquet est vitae efficitur pulvinar. Fusce molestie vel mauris non sagittis.

Vestibulum viverra libero et magna consequat maximus. Aenean vulputate, libero vel egestas imperdiet, nisi nibh lacinia nisl, non pharetra nisi est in purus. Duis in interdum urna, ut hendrerit neque. Phasellus convallis nisl et porta auctor. Donec ornare purus a lorem malesuada, non vehicula felis ullamcorper. Nulla sagittis lacus eget nisi malesuada convallis. Ut ullamcorper in lectus nec elementum. Proin lacus dui, accumsan id venenatis id, porttitor ut massa. Nunc consequat non lectus sit amet maximus`, '', '', '', '', '', '']
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
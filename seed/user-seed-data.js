const TEMPLATE = {
  name: 'replace',
  email: 'user1@pmp.com',
  birthday: '1990/11/01',
  state: 'CA',
  zip: '94043',
  orientation: {
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
  },
  gender: {
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
  },
  relationship_status: 'Single',
  relationship_type: 'Monogamous',
  pronouns: 'replace',
  height: 'replace',
  body_type: 'replace',
  ethnicity: {
    'Asian': false,
    'Black': false,
    'Hispanic / Latin': false,
    'Indian': false,
    'Middle Eastern': false,
    'Native American': false,
    'Pacific Islander': false,
    'White': false,
    'Other': false
  },
  languages: [],
  fluency: [],
  politics: 'replace',
  education: 'replace',
  occupation: 'replace',
  employer: 'replace',
  religion: 'replace',
  religion_weight: 'replace',
  sign: 'replace',
  smoking: 'replace',
  drinks: 'replace',
  marijuana: 'replace',
  diet: 'replace',
  children: 'replace',
  wants_children: 'replace',
  pets: {
    'Has dog(s)': false,
    'Has cat(s)': false,
    'Has other pet(s)': false,
    "Doesn't have pet(s)": false
  },
  gamelist: [],
  game_genres: [],
  platforms: [],
  pref_orientation: {
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
  },
  pref_gender: {
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
  },
  pref_distance: 'replace',
  pref_age: 'replace',
  pref_connections: {
    'New friends': false,
    'Long-term dating': false,
    'Short-term dating': false,
    'Hookups': false
  },
  // pref_body_type: {
  //   'Thin': false,
  //   'Fit': false,
  //   'Average': false,
  //   'Jacked': false,
  //   'Curvy': false,
  //   'Full figured': false,
  //   'A little extra': false,
  //   'Overweight': false
  // },
  pref_height: 'replace',
  profile_essay_questions: ['My self-summary', 'Current goal', 'I could probably beat you at', 'My golden rule', 'I value', 'The last show I binged', 'A perfect day', "The most private thing I'm willing to admit", "What I'm actually looking for"],
  profile_essay_answers: ['', '', '', '', '', '', '', '', ''],
  liked: [],
  passed: [],
  blocked: []
};

const name_list = [`Aneurin`, `Trey`, `Matthias`, `Natasha`, `Brian`, `Jacqueline`, `Solomon`, `Claire`, `Jason`, `Theia`];
const email_list = [`user1@pmp.com`, `user2@pmp.com`, `user3@pmp.com`, `user4@pmp.com`, `user5@pmp.com`, `user6@pmp.com`, `user7@pmp.com`, `user8@pmp.com`, `user9@pmp.com`, `user10@pmp.com`];
const birthday_list = [`1980-07-28`, `1985-12-24`, `2001-02-21`, `1971-10-24`, `1990-06-21`, `2000-09-23`, `1973-04-21`, `1982-06-30`, `1972-08-01`, `1999-03-21`];
const zip_list = [`95014`, `95014`, `95014`, `94538`, `95035`, `95014`, `95014`, `95828`, `94015`, `95014`];
const orientation_list = [
  {
    'Straight': false,
    'Gay': false,
    'Bisexual': true,
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
  },
  {
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
  },
  {
    'Straight': false,
    'Gay': true,
    'Bisexual': false,
    'Lesbian': false,
    'Queer': false,
    'Pansexual': true,
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
  },
  {
    'Straight': true,
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
  },
  {
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
  },
  {
    'Straight': false,
    'Gay': false,
    'Bisexual': false,
    'Lesbian': false,
    'Queer': false,
    'Pansexual': false,
    'Questioning': true,
    'Heteroflexible': false,
    'Homoflexible': false,
    'Asexual': false,
    'Gray-asexual': false,
    'Demisexual': true,
    'Reciprosexual': false,
    'Akiosexual': false,
    'Aceflux': true,
    'Grayromantic': false,
    'Demiromantic': false,
    'Recipromantic': false,
    'Akioromantic': false,
    'Aroflux': false
  },
  {
    'Straight': false,
    'Gay': false,
    'Bisexual': false,
    'Lesbian': false,
    'Queer': false,
    'Pansexual': false,
    'Questioning': false,
    'Heteroflexible': false,
    'Homoflexible': false,
    'Asexual': true,
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
  },
  {
    'Straight': false,
    'Gay': false,
    'Bisexual': false,
    'Lesbian': true,
    'Queer': false,
    'Pansexual': false,
    'Questioning': false,
    'Heteroflexible': false,
    'Homoflexible': true,
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
  },
  {
    'Straight': true,
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
  },
  {
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
  }];

const gender_list = [
  {
    'Woman': true,
    'Man': false,
    'Agender': false,
    'Androgynous': false,
    'Bigender': false,
    'Cis Man': false,
    'Cis Woman': false,
    'Genderfluid': true,
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
  },
  {
    'Woman': false,
    'Man': true,
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
  },
  {
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
  },
  {
    'Woman': true,
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
  },
  {
    'Woman': false,
    'Man': true,
    'Agender': false,
    'Androgynous': true,
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
  },
  {
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
  },
  {
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
    'Trans Man': true,
    'Trans Woman': false,
    'Two Spirit': true
  },
  {
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
  },
  {
    'Woman': false,
    'Man': true,
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
  },
  {
    'Woman': false,
    'Man': false,
    'Agender': false,
    'Androgynous': false,
    'Bigender': false,
    'Cis Man': false,
    'Cis Woman': true,
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
  }];

const rel_status_list = [`Single`, `Married`, `Single`, `Single`, `Single`, `Partnered`, `Single`, `Single`, `Single`, `Single`];
const rel_type_list = [`Open to either`, `Non-monogamous`, `Monogamous`, `Monogamous`, `Monogamous`, `Non-monogamous`, `Open to either`, `Monogamous`, `Monogamous`, `Monogamous`];
const pronouns_list = [``, ``, ``, `she/hers`, `person`, ``, `he/his`, `lemon/peach`, ``, ``];
const height_list = [``, ``, `5'-7"`, `5'-6"`, `5'-5"`, ``, ``, `5'-2"`, `5'-10"`, ``];
const body_type_list = [`A little extra`, ``, `Fit`, ``, ``, ``, `Curvy`, ``, `Average build`, `Average build`];

const ethnicity_list = [
  {
    'Asian': true,
    'Black': false,
    'Hispanic / Latin': false,
    'Indian': false,
    'Middle Eastern': false,
    'Native American': false,
    'Pacific Islander': false,
    'White': false,
    'Other': false
  },
  {
    'Asian': false,
    'Black': false,
    'Hispanic / Latin': false,
    'Indian': false,
    'Middle Eastern': false,
    'Native American': false,
    'Pacific Islander': false,
    'White': false,
    'Other': false
  },
  {
    'Asian': false,
    'Black': false,
    'Hispanic / Latin': false,
    'Indian': false,
    'Middle Eastern': false,
    'Native American': false,
    'Pacific Islander': false,
    'White': false,
    'Other': false
  },
  {
    'Asian': false,
    'Black': true,
    'Hispanic / Latin': false,
    'Indian': false,
    'Middle Eastern': false,
    'Native American': false,
    'Pacific Islander': false,
    'White': false,
    'Other': false
  },
  {
    'Asian': false,
    'Black': false,
    'Hispanic / Latin': false,
    'Indian': false,
    'Middle Eastern': false,
    'Native American': false,
    'Pacific Islander': false,
    'White': false,
    'Other': false
  },
  {
    'Asian': false,
    'Black': false,
    'Hispanic / Latin': false,
    'Indian': false,
    'Middle Eastern': false,
    'Native American': false,
    'Pacific Islander': false,
    'White': false,
    'Other': false
  },
  {
    'Asian': false,
    'Black': false,
    'Hispanic / Latin': false,
    'Indian': false,
    'Middle Eastern': false,
    'Native American': false,
    'Pacific Islander': false,
    'White': false,
    'Other': false
  },
  {
    'Asian': false,
    'Black': false,
    'Hispanic / Latin': false,
    'Indian': false,
    'Middle Eastern': false,
    'Native American': false,
    'Pacific Islander': false,
    'White': false,
    'Other': false
  },
  {
    'Asian': false,
    'Black': false,
    'Hispanic / Latin': false,
    'Indian': true,
    'Middle Eastern': false,
    'Native American': false,
    'Pacific Islander': false,
    'White': false,
    'Other': false
  },
  {
    'Asian': false,
    'Black': false,
    'Hispanic / Latin': true,
    'Indian': false,
    'Middle Eastern': false,
    'Native American': false,
    'Pacific Islander': false,
    'White': false,
    'Other': true
  }];

const languages_list = [['C++', 'English'], ['Polish', 'French', 'English'], [], [], ['Spanish'], [], [], ['Basque', 'Gujarati'], ['Punjabi', 'Korean', 'Hindi', 'Chinese (Mandarin)'], []];
const fluency_list = [['', 'Somewhat'], ['Fluently', 'Somewhat', ''], [], [], ['Somewhat'], [], [], ['', ''], ['Fluently', '', 'Somewhat', 'Fluently'], []];
const politics_list = [`Politically liberal`, ``, `Other`, ``, `Politically liberal`, ``, ``, ``, `Politically moderate`, `Politically liberal`];
const education_list = [`Undergraduate degree`, `Graduate degree`, `High school`, ``, ``, `In college`, `In college`, ``, `Undergraduate degree`, `High school`];
const occupation_list = [`Artist`, `Engineer`, `photographer`, ``, `Sales`, ``, ``, ``, `Account Manager`, `Babysitter`];
const employer_list = [`Plixlar`, `Blurpos`, ``, ``, ``, ``, ``, ``, ``, ``];
const religion_list = [``, ``, ``, `Christian`, ``, `Jewish`, `Christian`, `Atheist`, `Christian`, ``];
const religion_weight_list = [``, ``, ``, `(and it's important)`, ``, ``, ``, ``, `(and laughing about it)`, ``];
const sign_list = [`Leo`, `Sagittarius`, `Pisces`, ``, ``, `Libra`, `Taurus`, ``, ``, `Aries`];
const smoking_list = [`often`, ``, `sometimes`, ``, `often`, ``, ``, ``, ``, ``];
const drinks_list = [``, ``, `often`, `sometimes`, `never`, ``, `often`, `often`, `often`, `sometimes`];
const marijuana_list = [`often`, ``, ``, `never`, `often`, ``, `often`, `never`, `sometimes`, ``];
const diet_list = [``, `Intermittent Fasting`, ``, ``, `Omnivore`, `Vegan`, ``, `Omnivore`, `Omnivore`, ``];
const children_list = [`Doesn't have kids`, `Doesn't have kids`, `Has kid(s)`, ``, ``, ``, ``, `Has kid(s)`, `Has kid(s)`, ``];
const wants_children_list = [``, `but doesn't want kids`, ``, `Might want kids`, `Might want kids`, ``, ``, `and wants more`, `and wants more`, ``];

const pets_list = [
  {
    'Has dog(s)': true,
    'Has cat(s)': true,
    'Has other pet(s)': false,
    "Doesn't have pet(s)": false
  },
  {
    'Has dog(s)': false,
    'Has cat(s)': false,
    'Has other pet(s)': false,
    "Doesn't have pet(s)": false
  },
  {
    'Has dog(s)': false,
    'Has cat(s)': false,
    'Has other pet(s)': true,
    "Doesn't have pet(s)": false
  },
  {
    'Has dog(s)': false,
    'Has cat(s)': false,
    'Has other pet(s)': false,
    "Doesn't have pet(s)": true
  },
  {
    'Has dog(s)': false,
    'Has cat(s)': false,
    'Has other pet(s)': false,
    "Doesn't have pet(s)": false
  },
  {
    'Has dog(s)': false,
    'Has cat(s)': false,
    'Has other pet(s)': false,
    "Doesn't have pet(s)": false
  },
  {
    'Has dog(s)': true,
    'Has cat(s)': false,
    'Has other pet(s)': false,
    "Doesn't have pet(s)": false
  },
  {
    'Has dog(s)': false,
    'Has cat(s)': false,
    'Has other pet(s)': false,
    "Doesn't have pet(s)": false
  },
  {
    'Has dog(s)': false,
    'Has cat(s)': false,
    'Has other pet(s)': false,
    "Doesn't have pet(s)": false
  },
  {
    'Has dog(s)': false,
    'Has cat(s)': true,
    'Has other pet(s)': false,
    "Doesn't have pet(s)": false
  }];

const pref_orientation_list = [
  {
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
  },
  {
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
  },
  {
    'Straight': false,
    'Gay': true,
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
  },
  {
    'Straight': true,
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
  },
  {
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
  },
  {
    'Straight': false,
    'Gay': true,
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
  },
  {
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
  },
  {
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
  },
  {
    'Straight': true,
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
  },
  {
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
  }];

const pref_gender_list = [
  {
    'Woman': true,
    'Man': true,
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
  },
  {
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
  },
  {
    'Woman': false,
    'Man': true,
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
  },
  {
    'Woman': false,
    'Man': true,
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
  },
  {
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
  },
  {
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
  },
  {
    'Woman': true,
    'Man': true,
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
  },
  {
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
  },
  {
    'Woman': true,
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
  },
  {
    'Woman': false,
    'Man': true,
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
  }];

  const pref_age_list = [`26-36`, `23-30`, `21-26`, `40-56`, `29-30`, `18-21`, `18-23`, `37-39`, `30-37`, `21-30`];
  const pref_height_list = [`5'9"-5'11"`, ``, `5'2"-5'5"`, `5'7"-6'1"`, ``, `5'8"-6'0"`, ``, `5'5"-5'7"`, `5'6"-5'8"`, ``];

  const pref_connections_list = [
    {
      'New friends': false,
      'Long-term dating': false,
      'Short-term dating': false,
      'Hookups': true
    },
    {
      'New friends': false,
      'Long-term dating': true,
      'Short-term dating': false,
      'Hookups': false
    },
    {
      'New friends': false,
      'Long-term dating': false,
      'Short-term dating': true,
      'Hookups': true
    },
    {
      'New friends': false,
      'Long-term dating': false,
      'Short-term dating': true,
      'Hookups': false
    },
    {
      'New friends': false,
      'Long-term dating': true,
      'Short-term dating': true,
      'Hookups': false
    },
    {
      'New friends': true,
      'Long-term dating': true,
      'Short-term dating': true,
      'Hookups': false
    },
    {
      'New friends': false,
      'Long-term dating': false,
      'Short-term dating': true,
      'Hookups': false
    },
    {
      'New friends': true,
      'Long-term dating': true,
      'Short-term dating': false,
      'Hookups': false
    },
    {
      'New friends': true,
      'Long-term dating': true,
      'Short-term dating': true,
      'Hookups': true
    },
    {
      'New friends': true,
      'Long-term dating': false,
      'Short-term dating': false,
      'Hookups': true
    }];

const profile_essay_questions_list = [[`My self-summary`, `What I'm doing with my life`, `I could probably beat you at`, `The first thing people notice about me`, `I value`, `I should spend less time`, `When I die, I will`, `The most private thing I'm willing to admit`, `You should message me if`], [`Favorite memory from my childhood`, `My dream job is`, `I could probably beat you at`, `I love this about myself`, `I value`, `The last show I binged`, `A perfect day`, `My relationship with my mother`, `What I'm actually looking for`], [`My self-summary`, `If money were no concern, this is what I would be doing`, `My patronus`, `My golden rule`, `Six things I could never do without`, `The last show I binged`, `Best day of my life so far`, `The most private thing I'm willing to admit`, `Before I go on a date with someone I need to know that`], [`Things I am not`, `Current goal`, `I could probably beat you at`, `The first thing people notice about me`, `I value`, `The last show I binged`, `A perfect day`, `My relationship with my mother`, `What I'm actually looking for`], [`My self-summary`, `Current goal`, `I'm really good at`, `My go-to dance`, `I value`, `I like to take pictures of`, `A perfect day`, `The last time I was embarrassed`, `What I'm actually looking for`], [`My self-summary`, `Current goal`, `I could probably beat you at`, `My golden rule`, `I value`, `The last show I binged`, `A perfect day`, `The most private thing I'm willing to admit`, `What I'm actually looking for`], [`My self-summary`, `Current goal`, `My patronus`, `My golden rule`, `I value`, `The last show I binged`, `A perfect day`, `This is the saddest song ever written`, `What I'm actually looking for`], [`My self-summary`, `Current goal`, `I could probably beat you at`, `My golden rule`, `I value`, `The last show I binged`, `A perfect day`, `The most private thing I'm willing to admit`, `What I'm actually looking for`], [`Most people that know me would say I'm`, `One day, I would like to`, `My worst quality`, `My style can be described as`, `I value`, `The last show I binged`, `On a typical Friday night I am`, `This is the saddest song ever written`, `You should message me if`], [`My self-summary`, `Current goal`, `I could probably beat you at`, `My style can be described as`, `My partner should be`, `The last show I binged`, `A perfect day`, `The most private thing I'm willing to admit`, `Before I go on a date with someone I need to know that`]];

  const profile_essay_answers_list = [[``, `If you dress up like a pin-up doll for me it's huge you're going to be trained to my satisfaction there's no such thing as a typical Friday night. Crying in my bathtub cosplay years ago I discovered years ago I discovered I won't bite without permission, I grow a creepy mustache every February my alter-ego is please post your real pictures or so I've been told I do well dating. Keep up with me my beard skydiving it depends on the night making people mad skydiving.

Think about it! my last partner told me full - contact most cats eventually love me.Ultramarathons proper grammar I may be somewhat jaded playing devil's advocate females, no robots posing as real people documentary filmmaker nubile if you have a BMI under 25 Think about it!. Years ago I discovered if that paragraph above turned you off I'm kind of a genius proper grammar throwing rocks at trains I'm really good at.`, ``, `I am currently addicted to size 2 it depends on the night chivalry is not dead. Full-contact I'm fit / healthy and highly intelligent I starred in my own reality show no crazy chicks unworthy of serious consideration, blackjack it's very hard to meet quality women on the first date complete lack of shame extreme. With lots of self-respect crying in my bathtub it's very hard to meet quality women I'm a nice guy I don't really keep a budget with lots of self - respect.`, ``, `Tacos the simple things in life feminism working on my body and my mind.Sleeping late Indian food Murakami glass half - full if you're down to actually meet at some point, going to the gym I'm looking for parallel parking chilling at a bar with friends I'm really good at. Local sports teams easy-going fascinates me going to the gym Indian food Vampire Weekend.`, ``, ``, `Neutral Milk Hotel video games working on my body and my mind I don't take myself too seriously.Video games the simple things in life video games whatever topic is on NPR foreign films, Kurosawa ethical nonmonogamy food happy hour Catcher in the Rye.Strong and confident running shoes working on my body and my mind The Daily Show passionate about going to the gym.

Bored at home going to the gym medical school hiking.Too many to list the simple things in life having a few beers too many to list grilling, coffee skiing my goofy smile mountain biking Werner Herzog.Easy - going happy hour outdoor activities my phone, my friends, the internet having a few beers grilling.

Art school I'm not good at filling out these things I'm really good at fascinates me.Snowboarding sushi knowing the difference between their / there / they're Neutral Milk Hotel family is very important to me, playing my guitar knowing the difference between their/there/they're I'm pretty laid-back my friends tell me they don't get why I'm single playing my guitar. My cats chilling at a bar with friends Breaking Bad too many to list knowing the difference between their/there/they're you should message me.`], [`Complete lack of shame beekeeping I won't bite without permission you will love it. When I picked this username I didn't realize I couldn't change it ultramarathons someone to provide for you Juggalo I am a gentleman first and foremost, I'm just in town for the night I should have grown up in the 40s Libertarian performance art if I make fun of you it's because I like you. Well-built staying up late if you dress up like a pin-up doll for me I don't really read much these days or so I've been told I grow a creepy mustache every February.

Dive bars bald is sexy Libertarian motorcycle collection.I love the smell of I'm just in town for the night nubile other shenanigans a fairly successful career in sports, let's get weird I'm a nice guy really only soft drugs other shenanigans dive bars. In my birthday suit most cats eventually love me it depends on the night shooting ask your mother my beard.

For real though you're going to be trained to my satisfaction I despise I tend to be attracted to. Females if you like ask your mother at least once a day heyyy, shotgunning beers my beard no crazy chicks The Game very successsful entrepreneur. Staying up late I am oddly aroused by I'm the last of a dying breed with lots of self - respect working on my screenplay The Game.

Everything destructive that I do see, I told you everything destructive that I do is pretty awesome.Proper grammar my hobbies include MFA you could say I'm old-fashioned no robots posing as real people, in my birthday suit trapped in a sexless marriage it's very hard to meet quality women friendzone making others feel good.If you have an innie belly button I'm a nice guy I'm really good at when I get drunk snapchat you should message me.

I attract girls who are very good - looking I will tell you stories forever is pretty awesome work hard play hard.I am a hoarder, but only of top shelf stuff I am oddly aroused by complete lack of shame I'm a nice guy I'm too lazy to keep typing, laughing hysterically most cats eventually love me crossfit if you have an innie belly button size 2. Be my partner in crime be my partner in crime lol other shenanigans shooting making others feel good.`, `Are you really going to rule me out becausae of it ? one time in middle school living on sailboats Ayn Rand.I may be somewhat jaded you will love it my alter - ego is shotgunning beers it depends on the night, my deep, manly voice extreme I know shirtless pics are a no - no, but my hobbies include Ayn Rand.Beekeeping I attract girls who are very good - looking it's very hard to meet quality women skydiving with lots of self-respect or so I've been told.`, ``, `Ages 18 - 22 if that paragraph above turned you off well - built I'm the last of a dying breed. Trapped in a sexless marriage on the first date if you have to look it up don't bother staying up late Ayn Rand, be my partner in crime bald is sexy really only soft drugs my lizard tongue I am oddly aroused by.I starred in my own reality show I'm a nice guy that means I am wonderful looking for a third on my fetish list are you really going to rule me out becausae of it?.`, ``, ``, ``, `I despise I am extremely experienced and talented if you have an innie belly button one time in middle school. Ages 18 - 22 working on my screenplay heyyy my last partner told me clubbing, you should message me giving massages my beard one time in middle school skydiving. Clubbing I am currently addicted to for real though pics on request the fact that you are even considering schooling me no crazy chicks.`, ``], [``, `My smartphone The Daily Show if you're still reading this Sunday funday.Breaking Bad fascinates me no drama dubstep going back to school, working on my body and my mind Murakami Vampire Weekend Werner Herzog beach days.Whiskey short - term dating activity partners I love the smell of what to order off of the menu bacon.`, `On The Road I hate lists my friends tell me they don't get why I'm single grab coffee or a drink.Beach days Doctor Who extrovert Portlandia chilling at a bar with friends, passionate about my phone, my friends, the internet hiking not looking for a penpal degree in philosophy.Home brewing I know I listed more than 6 things if you want to I'm just a regular guy Werner Herzog not looking for a penpal.`, ``, `Snowboarding exploring the city fixing up my house I value art. Running shoes trying different restaurants bikes thinking about trying yoga parallel parking, I'm a big fan of playing my guitar parallel parking chilling at a bar with friends glass half - full.Ask me anything making people laugh glass half - full my height and shoulders Neutral Milk Hotel long - term dating.`, ``, `I know I listed more than 6 things I have a crush on strong and confident dubstep.Jazz cafes bored at home my height and shoulders outdoorsy I'm pretty laid-back, I don't take myself too seriously mountain biking snowboarding I'm just a regular guy I have a crush on. Using my farmshare my eyes coffee hiking Woody Allen is pretty awesome.

Fitness parallel parking I value art activity partners.Werner Herzog not looking for a penpal Myers - Briggs extrovert honest and direct, amazing women I've met working at a coffee shop bikes Neutral Milk Hotel Ethiopian. Outdoor activities seeing as many countries as possible my friends tell me they don't get why I'm single On The Road I'm a good listener training for the marathon.`, ``, `Someone who shares my sense of humor pickles bikes just looking to have some fun.Family is very important to me nothing too complicated I enjoy I have a crush on Catcher in the Rye, crossfit I'm a big fan of I don't really like talking about myself passionate about tattoos.Using my farmshare my smartphone if you're down to actually meet at some point bored at home Arrested Development family is very important to me.`], [`Skiing whatever topic is on NPR what to order off of the menu Arrested Development. Easy-going jazz cafes strong and confident what to order off of the menu my beard, food my smartphone using my farmshare joking around rock climbing. Extrovert rock climbing self-deprecating humor going to the gym my dogs Family Guy.

Activity partners just looking to have some fun I'm pretty laid-back if you're down to actually meet at some point.My smartphone I don't take myself too seriously fixing my scooter parallel parking I hate lists, snowboarding going to the gym you should message me I'm really good at loyal.Passionate about Breaking Bad going to the gym ask me anything Breaking Bad is pretty awesome.

Vinyl records Sunday funday Vampire Weekend making lasagna from scratch.Happy hour if you like my profile knowing the difference between their / there / they're watching a movie pickles, ask me anything making people laugh parallel parking pickles Game of Thrones. My beard beach days only looking for something casual video games I value art Family Guy.`, `Infinite Jest amazing women I've met if you want to foreign films.Road trips my dogs foreign films new friends seeing as many countries as possible, I have a crush on my favorite word is thinking about trying yoga grab coffee or a drink shoot me a message.Introvert too many to list home brewing tacos Woody Allen if you're down to actually meet at some point.

Food fixing up my house outdoor activities ask me anything.Medical school foreign films activity partners what to order off of the menu activity partners, someone who shares my sense of humor tattoos I'm not good at filling out these things I'm not good at filling out these things using my farmshare.Kurosawa recently moved back making people laugh if you're down to actually meet at some point the simple things in life my beard.

I'm looking for video games amazing women I've met I value art.I don't really like talking about myself having a few beers foodie there's no such thing as a typical Friday night On The Road, if you think we have something in common watching a movie just looking to have some fun sushi Oxford comma.Indian food if you want to hiking seeing as many countries as possible hiking bikes.`, ``, `Is pretty awesome crossfit going to shows I enjoy.Tattoos I love the smell of shoot me a message it depends on the night crossfit, parallel parking I'm a big fan of Game of Thrones dubstep amazing women I've met.Crossfit but then it wouldn't be private new friends if you're still reading this hiking thinking about trying yoga.

Local sports teams feminism sushi I enjoy.I'm pretty laid-back Myers-Briggs my dogs only looking for something casual Portlandia, what to order off of the menu listening to music foodie open-minded I'm a good listener.My phone, my friends, the internet bikes foreign films Indian food I don't really like talking about myself vegetarian.

Knowing the difference between their / there / they're using my farmshare extrovert I hate lists. I hate lists my friends tell me they don't get why I'm single honest and direct going back to school pickles, the simple things in life really hoppy beers I'm just a regular guy The Daily Show honest and direct.Open - minded ask me anything art school but then it wouldn't be private going to the gym video games.

Bikes Indian food ask me anything sushi.Sleeping late my height and shoulders Myers - Briggs fixing my scooter Murakami, trying different restaurants really hoppy beers degree in philosophy crossfit mountain biking.Strong and confident really hoppy beers someone who shares my sense of humor playing my guitar Netflix is pretty awesome.`, ``, ``, `I love the smell of giving massages P90X laughing hysterically.Blackjack my other half with morals but I only smoke when drinking ultramarathons, you will love it I will tell you stories forever I will tell you stories forever very successsful entrepreneur Think about it!.Motorcycle collection MFA bald is sexy complete lack of shame everything destructive that I do I'm too honest.`, `Not looking for a penpal Oxford comma I don't really like talking about myself bored at home.Open - minded new friends feminism introvert passionate about, honest and direct Doctor Who my beard road trips Werner Herzog.Crossfit my height and shoulders my goofy smile I'm just a regular guy strong and confident Kurosawa.`, ``], [``, ``, `Parallel parking not looking for a penpal what to order off of the menu trying this for the first time. I'm just a regular guy seeing as many countries as possible video games stepping outside your comfort zone if you think we have something in common, new friends if you like my profile home brewing I'm not good at filling out these things I'm just a regular guy.Fitness The Daily Show trying this for the first time my cats ask me anything I love the smell of.`, `Kurosawa tattoos whiskey trying different restaurants.Having a few beers self - deprecating humor family is very important to me foreign films video games, training for the marathon fitness introvert open - minded Murakami.Happy hour share a new experience what to order off of the menu going to shows dubstep Doctor Who.

  I'm not good at filling out these things Catcher in the Rye working at a coffee shop grab coffee or a drink. I value art my goofy smile my dogs The Daily Show vinyl records, life is short no drama ask me anything ethical nonmonogamy listening to music. Bored at home easy-going vegetarian road trips what to order off of the menu thinking about trying yoga.`, ``, `If you're still reading this Family Guy easy - going my friends tell me they don't get why I'm single.Game of Thrones I'm a good listener amazing women I've met whatever topic is on NPR Sunday funday, going to shows fitness I have a crush on activity partners no drama.Grilling trying this for the first time I don't really like talking about myself I love the smell of making lasagna from scratch my beard.

Family is very important to me if you want to chilling at a bar with friends tattoos.Activity partners crossfit grab coffee or a drink only looking for something casual self - deprecating humor, my smartphone if you want to Breaking Bad Vampire Weekend Game of Thrones.Vinyl records quizzo I hate lists Family Guy Vampire Weekend grab coffee or a drink.

Outdoorsy going to the gym trying different restaurants vegetarian.I don't really like talking about myself happy hour On The Road fixing up my house grab coffee or a drink, introvert home brewing going back to school short-term dating I have a crush on. Short-term dating optimistic vinyl records new friends medical school if you're down to actually meet at some point.

On The Road short - term dating thinking about trying yoga life is short.Foreign films grilling if you like my profile easy - going I'm just a regular guy, outdoorsy training for the marathon vegetarian whatever topic is on NPR fitness. I know I listed more than 6 things grilling fixing my scooter if you want to my eyes family is very important to me.`, ``, `Sunday funday I know I listed more than 6 things strong and confident fixing my scooter. Neutral Milk Hotel training for the marathon introvert if you want to Indian food, life is short Family Guy grab coffee or a drink Indian food I know I listed more than 6 things. Family is very important to me someone who shares my sense of humor On The Road tacos nothing too complicated my favorite word is.

Jazz cafes Game of Thrones tacos only looking for something casual.Long - term dating seeing as many countries as possible having a few beers sushi knowing the difference between their / there / they're, long-term dating my beard food I'm looking for the simple things in life.I'm a good listener I'm just a regular guy loyal foreign films working on my body and my mind outdoorsy.`, ``], [``, ``, `That was a joke, by the way I know shirtless pics are a no - no, but clubbing no crazy chicks.Shotgunning beers that was a joke, by the way crossfit I love the smell of younger women, I don't really keep a budget it depends on the night staying up late is pretty awesome if you have a BMI under 25. Unworthy of serious consideration Libertarian I am extremely experienced and talented are you really going to rule me out becausae of it? full-contact that was a joke, by the way.

Skydiving pics on request you're going to be trained to my satisfaction nubile. I will love you forever blackjack MFA I am oddly aroused by no crazy chicks, giving massages don't waste my time that's what she said I attract girls who are very good-looking that means I am wonderful. The Game I'm too lazy to keep typing I don't really keep a budget one time in middle school a fairly successful career in sports my other half.`, ``, `Other shenanigans is pretty awesome at least once a day is probably a conspiracy. Playing devil's advocate no robots posing as real people is pretty awesome please post your real pictures I grow a creepy mustache every February, I attract girls who are very good - looking throwing rocks at trains crossfit I attract girls who are very good - looking shooting.Think about it! my wife lol playing devil's advocate I'm a nice guy documentary filmmaker.

The fact that you are even considering schooling me work hard play hard if you dress up like a pin - up doll for me staying up late.I am oddly aroused by MFA looking for a third I am oddly aroused by if you like my profile, ages 18 - 22 no robots posing as real people shooting snapchat staying up late.I won't bite without permission I'm a nice guy I'm the last of a dying breed crying in my bathtub you should message me I did a lot of modeling work in the mid-80s.

If I make fun of you it's because I like you if you have to look it up don't bother giving massages clubbing.I starred in my own reality show complete lack of shame I'm a big fan of living on sailboats I'm too honest, really only soft drugs laughing hysterically I starred in my own reality show if you dress up like a pin - up doll for me heyyy.Making people mad one time in middle school you're going to be trained to my satisfaction very successsful entrepreneur crying in my bathtub that was a joke, by the way.`, `Watching a movie I have a crush on but then it wouldn't be private my height and shoulders.Crossfit just looking to have some fun skiing road trips whiskey, if you like my profile Werner Herzog vegetarian going back to school nothing too complicated.Just looking to have some fun short - term dating introvert easy - going Werner Herzog fixing up my house.`, ``, ``, `Proper grammar if that paragraph above turned you off I love the smell of I don't really keep a budget. I hope there are good girls left throwing rocks at trains is pretty awesome other shenanigans looking for a third, I'm kind of a genius when I get drunk when I picked this username I didn't realize I couldn't change it Ayn Rand my hobbies include.Organized chaos cosplay I'm too lazy to keep typing that means I am wonderful I'm too lazy to keep typing if you dress up like a pin - up doll for me.

Shooting I despise that's what she said one time in middle school. If you have a BMI under 25 giving massages ask your mother I live in constant amazement of nature and the universe I tend to be attracted to, lol motorcycle collection laughing hysterically I did a lot of modeling work in the mid-80s friendzone. Extreme trapped in a sexless marriage I did a lot of modeling work in the mid-80s one time in middle school I'm a big fan of bald is sexy.`], [``, `Grilling I have a crush on foreign films tacos.Extrovert Game of Thrones mountain biking easy - going as friends, my smartphone going to shows I'm a big fan of my smartphone Breaking Bad. If you want to vinyl records rock climbing Werner Herzog Family Guy beach days.`, `I love the smell of my phone, my friends, the internet I don't take myself too seriously Kurosawa.Strong and confident Kurosawa if you want to family is very important to me activity partners, joking around On The Road vinyl records I don't really like talking about myself working at a coffee shop. Bacon quizzo really hoppy beers I love the smell of you should message me recently moved back.

Seeing as many countries as possible ethical nonmonogamy thinking about trying yoga I have a crush on.Breaking Bad playing my guitar whatever topic is on NPR easy - going training for the marathon, hiking food if you're down to actually meet at some point I'm pretty laid - back family is very important to me.Only looking for something casual my beard snowboarding home brewing bikes honest and direct.`, ``, ``, ``, ``, `I'm really good at long-term dating you should message me Catcher in the Rye. Exploring the city Woody Allen shoot me a message fixing up my house long-term dating, I'm a good listener new friends I'm not good at filling out these things coffee honest and direct. Outdoorsy long-term dating local sports teams dubstep video games my phone, my friends, the internet.

Ask me anything mountain biking joking around having a few beers.If you think we have something in common I'm looking for bacon going to the gym road trips, I'm just a regular guy feminism watching a movie On The Road Doctor Who.Hiking Doctor Who I enjoy Ethiopian Arrested Development my dogs.`, ``], [`You will love it most cats eventually love me everything destructive that I do I have an IQ of 140, which means.I will love you forever I hope there are good girls left I'm too honest my alter-ego is my hobbies include, Think about it! years ago I discovered if you like my profile there's no such thing as a typical Friday night if you like my profile.I'm too honest playing devil's advocate if you like my profile throwing rocks at trains making others feel good finishing my novel.

You need a real man that's what she said I don't really keep a budget I am currently addicted to.Heyyy MFA I'm kind of a genius a fairly successful career in sports I attract girls who are very good-looking, that just proves my point my wife I'm really good at skydiving I grow a creepy mustache every February.Younger women if you dress up like a pin - up doll for me Libertarian you should be clean and intelligent performance art size 2.

I live in constant amazement of nature and the universe beekeeping if I make fun of you it's because I like you shooting. You need a real man crying in my bathtub with lots of self-respect I starred in my own reality show heyyy, I won't bite without permission females I despise let's get weird ultramarathons. I live in constant amazement of nature and the universe I don't really read much these days I love the smell of the fact that you are even considering schooling me proper grammar with morals.

  Let's get weird I have an IQ of 140, which means a fairly successful career in sports I'm a nice guy.If you have to look it up don't bother I grow a creepy mustache every February I grow a creepy mustache every February ask your mother that's what she said, throwing rocks at trains looking for a third staying up late my alter - ego is I do well dating.Staying up late unworthy of serious consideration documentary filmmaker that means I am wonderful I'm a big fan of my hobbies include.`, `In my birthday suit is pretty awesome with morals throwing rocks at trains. I tend to be attracted to very successsful entrepreneur let's get weird everything destructive that I do no robots posing as real people, Juggalo years ago I discovered there's no such thing as a typical Friday night someone to provide for you that was a joke, by the way. I am currently addicted to I'm really good at years ago I discovered you could say I'm old-fashioned you should message me organized chaos.

I grow a creepy mustache every February I am a gentleman first and foremost is pretty awesome skydiving.If you like my profile I have an IQ of 140, which means is pretty awesome wildly attractive doesn't hurt I live in constant amazement of nature and the universe, I did a lot of modeling work in the mid-80s my hobbies include my alter-ego is I'm a nice guy I'm a nice guy. You should be clean and intelligent very successsful entrepreneur it's huge is pretty awesome I am a gentleman first and foremost ages 18 - 22.`, ``, `Wildly attractive doesn't hurt documentary filmmaker it's very hard to meet quality women my other half.Bald is sexy clubbing I despise I will tell you stories forever it's very hard to meet quality women, ask your mother my beard but I only smoke when drinking females if I make fun of you it's because I like you.Performance art one time in middle school that's what she said I don't really keep a budget with lots of self - respect a fairly successful career in sports.

I am a hoarder, but only of top shelf stuff I know shirtless pics are a no - no, but I'm kind of a genius females. Skydiving you will love it Juggalo is probably a conspiracy if you have a BMI under 25, my wife if you have a BMI under 25 no robots posing as real people Ayn Rand on my fetish list. Please post your real pictures if you dress up like a pin-up doll for me documentary filmmaker throwing rocks at trains finishing my novel MFA.`, ``, ``, `At least once a day friendzone giving massages pics on request. I have an IQ of 140, which means on the first date everything destructive that I do it's huge beekeeping, my beard if you have an innie belly button friendzone I'm a big fan of I am extremely experienced and talented. I'm a big fan of be my partner in crime my other half documentary filmmaker trapped in a sexless marriage when I picked this username I didn't realize I couldn't change it.`, ``, `Skydiving I will tell you stories forever if I make fun of you it's because I like you complete lack of shame. In my birthday suit females my beard if you have an innie belly button you need a real man, it's huge Ayn Rand blackjack no crazy chicks organized chaos.It's huge I'm fit / healthy and highly intelligent well - built I'm an enormous man-child I'm an enormous man - child throwing rocks at trains.`], [`Crossfit the fact that you are even considering schooling me it's very hard to meet quality women crying in my bathtub. I did a lot of modeling work in the mid-80s making people mad really only soft drugs I am a hoarder, but only of top shelf stuff playing devil's advocate, you should be clean and intelligent extreme playing devil's advocate shooting very successsful entrepreneur. Giving massages when I picked this username I didn't realize I couldn't change it throwing rocks at trains I'm just in town for the night crossfit dive bars.

If you have an innie belly button other shenanigans very successsful entrepreneur I grow a creepy mustache every February.I have an IQ of 140, which means if you like my profile someone to provide for you younger women for real though, I will love you forever shooting making others feel good years ago I discovered when I get drunk.Don't waste my time if that paragraph above turned you off if you like my profile you're going to be trained to my satisfaction very successsful entrepreneur really only soft drugs.`, ``, `No crazy chicks living on sailboats my wife friendzone.My last partner told me I will love you forever motorcycle collection you should be clean and intelligent it's very hard to meet quality women, looking for adventure that was a joke, by the way in my birthday suit snapchat ultramarathons. With morals complete lack of shame it depends on the night my deep, manly voice nubile are you really going to rule me out becausae of it?.`, ``, ``, ``, `I am a gentleman first and foremost my wife I live in constant amazement of nature and the universe years ago I discovered. My other half looking for adventure I'm fit / healthy and highly intelligent I am currently addicted to I am currently addicted to, looking for adventure playing devil's advocate no crazy chicks I starred in my own reality show I don't really keep a budget.I despise I'm an enormous man-child performance art I am a gentleman first and foremost giving massages staying up late.`, `You need a real man I should have grown up in the 40s with lots of self-respect Juggalo. Let's get weird someone to provide for you Think about it! when I get drunk I don't really read much these days, a fairly successful career in sports I don't really read much these days proper grammar The Game ultramarathons.Dive bars I grow a creepy mustache every February you could say I'm old-fashioned it depends on the night on the first date if you have to look it up don't bother.`, ``], [`I'm pretty laid-back degree in philosophy Murakami working at a coffee shop. My phone, my friends, the internet I don't take myself too seriously trying this for the first time medical school quizzo, new friends training for the marathon going back to school feminism easy - going.Crossfit Indian food no drama is pretty awesome fascinates me optimistic.

What to order off of the menu family is very important to me going to the gym as friends.Video games Woody Allen local sports teams long - term dating vegetarian, Indian food but then it wouldn't be private Doctor Who jazz cafes medical school. If you're down to actually meet at some point degree in philosophy there's no such thing as a typical Friday night I'm just a regular guy medical school nothing too complicated.`, ``, ``, `My smartphone Indian food my height and shoulders joking around.Self - deprecating humor self - deprecating humor medical school fixing my scooter working on my body and my mind, parallel parking listening to music my phone, my friends, the internet down to earth outdoorsy.What to order off of the menu vegetarian making people laugh recently moved back grab coffee or a drink Sunday funday.

Crossfit foreign films I'm a big fan of Portlandia. Mountain biking Myers-Briggs Kurosawa Game of Thrones Murakami, trying different restaurants exploring the city if you want to there's no such thing as a typical Friday night glass half - full.Running shoes training for the marathon if you think we have something in common easy - going Indian food skiing.

But then it wouldn't be private only looking for something casual is pretty awesome but then it wouldn't be private.Listening to music Netflix I don't really like talking about myself tattoos going to the gym, art school my beard fixing up my house my goofy smile knowing the difference between their/there/they're.Myers - Briggs tacos optimistic fixing up my house life is short only looking for something casual.`, `Working at a coffee shop sushi local sports teams Doctor Who.New friends if you want to snowboarding crossfit sleeping late, seeing as many countries as possible working on my body and my mind Werner Herzog if you think we have something in common new friends.Tacos really hoppy beers Sunday funday making lasagna from scratch I know I listed more than 6 things video games.

Working on my body and my mind nothing too complicated Indian food really hoppy beers.I'm a good listener ask me anything I'm just a regular guy open - minded working on my body and my mind, seeing as many countries as possible no drama working on my body and my mind honest and direct Kurosawa.Optimistic down to earth tattoos just looking to have some fun tattoos strong and confident.

Fitness feminism road trips Woody Allen.The simple things in life my phone, my friends, the internet short - term dating training for the marathon it depends on the night, having a few beers my friends tell me they don't get why I'm single skiing road trips my smartphone.Fascinates me crossfit I know I listed more than 6 things I'm looking for grab coffee or a drink activity partners.`, ``, ``, ``, `My dogs foreign films Murakami crossfit. Sunday funday video games open-minded On The Road bikes, discussing politics I know I listed more than 6 things my goofy smile you should message me really hoppy beers. I'm a good listener joking around road trips nothing too complicated having a few beers trying different restaurants.

If you're down to actually meet at some point someone who shares my sense of humor Game of Thrones Murakami. I hate lists sleeping late foodie working at a coffee shop my phone, my friends, the internet, my goofy smile Breaking Bad training for the marathon my dogs discussing politics. Myers-Briggs easy-going just looking to have some fun strong and confident activity partners if you want to.`]];

const ph_photos_list = [["https://pmp-seeds.s3-us-west-1.amazonaws.com/su2-img1.jpg", "https://pmp-seeds.s3-us-west-1.amazonaws.com/su2-img2.jpg", "https://pmp-seeds.s3-us-west-1.amazonaws.com/su2-img3.jpg"], ["https://pmp-seeds.s3-us-west-1.amazonaws.com/su8-img1.jpg", "https://pmp-seeds.s3-us-west-1.amazonaws.com/su8-img2.jpg"], ["https://pmp-seeds.s3-us-west-1.amazonaws.com/su10-img1.jpg", "https://pmp-seeds.s3-us-west-1.amazonaws.com/su10-img2.jpg", "https://pmp-seeds.s3-us-west-1.amazonaws.com/su10-img3.jpg"], ["https://pmp-seeds.s3-us-west-1.amazonaws.com/su1-img1.jpg"], ["https://pmp-seeds.s3-us-west-1.amazonaws.com/su9-img1.jpg", "https://pmp-seeds.s3-us-west-1.amazonaws.com/su9-img2.jpg"], ["https://pmp-seeds.s3-us-west-1.amazonaws.com/su5-img1.jpg", "https://pmp-seeds.s3-us-west-1.amazonaws.com/su5-img2.jpg", "https://pmp-seeds.s3-us-west-1.amazonaws.com/su5-img3.jpg"], ["https://pmp-seeds.s3-us-west-1.amazonaws.com/su7-img1.jpg", "https://pmp-seeds.s3-us-west-1.amazonaws.com/su7-img2.jpg", "https://pmp-seeds.s3-us-west-1.amazonaws.com/su7-img3.jpg"], ["https://pmp-seeds.s3-us-west-1.amazonaws.com/su3-img1.jpg", "https://pmp-seeds.s3-us-west-1.amazonaws.com/su3-img2.jpg"], ["https://pmp-seeds.s3-us-west-1.amazonaws.com/su6-img1.jpg"], ["https://pmp-seeds.s3-us-west-1.amazonaws.com/su4-img1.jpg"]];

  const createUserObjects = () => {
    const new_userlist = [];

    for(let i = 0; i < name_list.length; i++){
      var template = {
        name: name_list[i],
        email: email_list[i],
        password: 'password',
        birthday: birthday_list[i],
        state: 'CA',
        zip: zip_list[i],
        orientation: orientation_list[i],
        gender: gender_list[i],
        relationship_status: rel_status_list[i],
        relationship_type: rel_type_list[i],
        pronouns: pronouns_list[i],
        height: height_list[i],
        body_type: body_type_list[i],
        ethnicity: ethnicity_list[i],
        languages: languages_list[i],
        fluency: fluency_list[i],
        politics: politics_list[i],
        education: education_list[i],
        occupation: occupation_list[i],
        employer: employer_list[i],
        religion: religion_list[i],
        religion_weight: religion_weight_list[i],
        sign: sign_list[i],
        smoking: smoking_list[i],
        drinks: drinks_list[i],
        marijuana: marijuana_list[i],
        diet: diet_list[i],
        children: children_list[i],
        wants_children: wants_children_list[i],
        pets: pets_list[i],
        gamelist: [],
        game_genres: [],
        platforms: [],
        pref_orientation: pref_orientation_list[i],
        pref_gender: pref_gender_list[i],
        pref_distance: '50 miles',
        pref_age: pref_age_list[i],
        pref_height: pref_height_list[i],
        pref_connections: pref_connections_list[i],
        profile_essay_questions: profile_essay_questions_list[i],
        profile_essay_answers: profile_essay_answers_list[i],
        liked: [],
        passed: [],
        blocked: [],
        ph_photos: ph_photos_list[i]
      }
      new_userlist.push(template);
    }
    return new_userlist;
  };

// this is used to create the user array for seeding
  const result = createUserObjects();

  console.log(result)
const Validator = require('validator');
const validText = require('./valid-text');

module.exports = validRegisterInput = data => {
  let errors = {};

  data.name = validText(data.name) ? data.name : '';
  data.email = validText(data.email) ? data.email : '';
  data.password = validText(data.password) ? data.password : '';
  data.birthday = validText(data.birthday) ? data.birthday : '';
  data.state = validText(data.state) ? data.state : '';
  data.zip = validText(data.zip) ? data.zip : '';

  if(!Validator.isLength(data.name, { min: 2, max: 30 })) errors.name = 'Name must be between 2 and 30 characters';
  if(Validator.isEmpty(data.name)) errors.name = 'Name is required';

  if(!Validator.isEmail(data.email)) errors.email = 'Email is invalid';
  if(Validator.isEmpty(data.email)) errors.email = 'Email is required';

  if(!Validator.isLength(data.password, { min: 6, max: 30 })) errors.password = 'Password must be between 6 and 30 characters';
  if(Validator.isEmpty(data.password)) errors.password = 'Password is required';
  
  if(!Validator.isBefore(data.birthday, '2002-01-01')) errors.birthday = 'Must be 18 or older to register';
  if(Validator.isEmpty(data.birthday)) errors.birthday = 'Birthday is required';

  // if(!Validator.isLength(data.password, { min: 6, max: 30 })) errors.password = 'Password must be between 6 and 30 characters';
  if(Validator.isEmpty(data.state)) errors.state = 'State is required';

  if(!Validator.isLength(data.zip, { min: 5, max: 5 })) errors.zip = 'Zip code must be 5 digits';
  if(Validator.isEmpty(data.zip)) errors.zip = 'Zip code is required';

  return{
    errors,
    isValid: Object.keys(errors).length === 0
  }
};
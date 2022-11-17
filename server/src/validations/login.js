const validator = require("validator");
const validText = require("./validText");

module.exports = validateLoginInputs = (data) => {
  let errors = {};

  data.email = validText(data.email) ? data.email : "";
  data.password = validText(data.password) ? data.password : "";

  if (!validator.isEmail(data.email))
    errors.email = "A valid email is required";
  if (validator.isEmpty(data.email)) errors.email = "Email cannot be blank";

  if (validator.isEmpty(data.password))
    errors.password = "Password cannot be blank";

  return {
    errors,
    isValid: Object.keys(errors).length === 0,
  };
};

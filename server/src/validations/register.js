const validator = require("validator");
const validText = require("./validText");

module.exports = validateRegisterInputs = (data) => {
  let errors = {};

  data.email = validText(data.email) ? data.email : "";
  data.password1 = validText(data.password1) ? data.password1 : "";
  data.password2 = validText(data.password2) ? data.password2 : "";

  if (!validator.isEmail(data.email))
    errors.email = "A valid email is required";

  if (validator.isEmpty(data.email)) errors.email = "Email cannot be blank";

  const checkStrongPassword = validator.isStrongPassword(data.password1, {
    minLowercase: 1,
    minUppercase: 1,
    minNumbers: 1,
    minSymbols: 1,
  });

  if (!checkStrongPassword)
    errors.password1 =
      "Password must contain at least one lowercase, uppercase, number, and symbol";

  if (!validator.isLength(data.password1, { min: 8, max: 30 }))
    errors.password1 = "Password needs to be between 8 and 30 characters";

  if (validator.isEmpty(data.password1))
    errors.password1 = "Password cannot be blank";

  if (!validator.equals(data.password1, data.password2))
    errors.password2 = "Passwords do not match";

  if (validator.isEmpty(data.password2))
    errors.password2 = "Password cannot be blank";

  return {
    errors,
    isValid: Object.keys(errors).length === 0,
  };
};

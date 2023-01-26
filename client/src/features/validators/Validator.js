const validateName = (name) => RegExp(/^[a-zA-Z]{2,30}$/).test(name);

const passwordValidator = (password) =>
  RegExp(
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
  ).test(password);

const passwordMatched = (password, confirmation) => password === confirmation;

const validBirthDate = (userBirthDate) => {
  const dob = new Date(userBirthDate);
  const month_diff = Date.now() - dob.getTime();
  const age_dt = new Date(month_diff);
  const year = age_dt.getUTCFullYear();
  const age = Math.abs(year - 1970);
  return age >= 18;
};

const validateEmail = (userEmail) =>
  RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/).test(userEmail);

const validatePhoneNumber = (userNumber) => RegExp(/\d/).test(userNumber);

export {
  validateName,
  passwordValidator,
  passwordMatched,
  validBirthDate,
  validateEmail,
  validatePhoneNumber,
};

export function checkEmail(email: string) {
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

  const validEmail = emailRegex.test(email);

  return validEmail;
}

export function checkPassword(password: string) {
  const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;

  const validPassword = passwordRegex.test(password);

  return validPassword;
}

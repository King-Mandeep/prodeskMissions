export const validateName = (name) => {
  return name.trim().length >= 2;
};

export const validateDob = (dob) => {
  return dob !== "";
};

export const validateEmail = (email) => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(
    email
  );
};

export const validatePassword = (password) => {
  return password.length >= 8;
};

export const validateConfirmPassword = (
  password,
  confirmPassword
) => {
  return (
    confirmPassword === password &&
    confirmPassword !== ""
  );
};
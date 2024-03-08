const validateEmail = (email: string) => {
  // Basic email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return false;
  } else {
    return true;
  }
};

const validatePassword = (password: string) => {
  // Basic password validation (e.g., minimum length)
  if (password.length < 6) {
    return false; //'Password must be at least 6 characters long';
  } else {
    return true;
  }
};

export default {
  validateEmail,
  validatePassword,
};
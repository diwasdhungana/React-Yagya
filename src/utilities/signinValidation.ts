// src/app/auth/login/utils/loginValidation.ts
export interface LoginValidationErrors {
  email?: string;
  password?: string;
}

export const validateLogin = (data: {
  email: string;
  password: string;
}): LoginValidationErrors => {
  const errors: LoginValidationErrors = {};

  // Email validation
  if (!data.email || !/\S+@\S+\.\S+/.test(data.email)) {
    errors.email = "Please enter a valid email address";
  }

  // Password validation
  if (!data.password || data.password.length < 1) {
    errors.password = "Password is required";
  }

  return errors;
};

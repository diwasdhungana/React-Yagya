// src/app/auth/signup/utils/signupValidation.ts
export interface SignupValidationErrors {
  email?: string;
  password?: string;
  confirmPassword?: string;
  terms?: string;
}

export const validateSignup = (data: {
  email: string;
  password: string;
  confirmPassword: string;
  agreedToTerms: boolean;
}): SignupValidationErrors => {
  const errors: SignupValidationErrors = {};

  // Email validation
  if (!data.email || !/\S+@\S+\.\S+/.test(data.email)) {
    errors.email = "Please enter a valid email address";
  }

  // Password validation
  if (data.password.length < 8) {
    errors.password = "Password must be at least 8 characters long";
  }

  // Confirm password validation
  if (data.password !== data.confirmPassword) {
    errors.confirmPassword = "Passwords do not match";
  }

  // Terms agreement validation
  if (!data.agreedToTerms) {
    errors.terms = "You must agree to the Terms of Service and Privacy Policy";
  }

  return errors;
};

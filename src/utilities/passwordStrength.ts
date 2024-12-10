// src/app/auth/signup/utils/passwordStrength.ts
export const getPasswordStrength = (password: string): string => {
  if (password.length < 6) return "Weak";
  if (password.length < 10) return "Medium";

  const hasUppercase = /[A-Z]/.test(password);
  const hasLowercase = /[a-z]/.test(password);
  const hasNumbers = /[0-9]/.test(password);
  const hasSpecialChar = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password);

  const strengthFactors = [
    hasUppercase,
    hasLowercase,
    hasNumbers,
    hasSpecialChar,
  ].filter(Boolean).length;

  if (strengthFactors >= 3 && password.length >= 12) return "Very Strong";
  if (strengthFactors >= 3) return "Strong";
  return "Medium";
};

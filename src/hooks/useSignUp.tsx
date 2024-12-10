// src/app/auth/signup/hooks/useSignup.ts
import { useState } from "react";
import { useRouter } from "next/navigation";
import { createUser } from "@/lib/actions/user.action";
import { UserCreationData } from "@/database/user.model";
import { validateSignup } from "@/utils/signupValidation";

export const useSignup = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const signupUser = async (
    userData: UserCreationData & {
      confirmPassword: string;
      agreedToTerms: boolean;
    }
  ) => {
    // Validate input
    const validationErrors = validateSignup({
      email: userData.email,
      password: userData.password,
      confirmPassword: userData.confirmPassword,
      agreedToTerms: userData.agreedToTerms,
    });

    if (Object.keys(validationErrors).length > 0) {
      setError("Please fix the form errors");
      return null;
    }

    setIsLoading(true);
    setError(null);

    try {
      // Remove extra fields before creating user
      const { ...userCreationData } = userData;

      const createdUser = await createUser(userCreationData);

      // Handle successful user creation
      router.push("/auth/signin");
      return createdUser;
    } catch (error) {
      console.error("Error creating user:", error);
      setError(error instanceof Error ? error.message : "Signup failed");
      return null;
    } finally {
      setIsLoading(false);
    }
  };

  return { signupUser, isLoading, error };
};

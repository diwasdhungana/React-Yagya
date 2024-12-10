// src/app/auth/login/hooks/useLogin.ts
import { useState } from "react";
import { useRouter } from "next/navigation";
import { validateLogin } from "../utils/signinValidation";
import { getTokensfromSession, signinUser } from "@/lib/actions/user.action";
import { signIn, useSession } from "next-auth/react";
// This would be replaced with actual authentication service
interface LoginCredentials {
  email: string;
  password: string;
  rememberMe: boolean;
}

export const useSignin = () => {
  const { data: session } = useSession();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const login = async (credentials: LoginCredentials) => {
    // Validate input
    const validationErrors = validateLogin({
      email: credentials.email,
      password: credentials.password,
    });

    if (Object.keys(validationErrors).length > 0) {
      setError("Please check your login details");
      return false;
    }

    setIsLoading(true);
    setError(null);

    try {
      // Simulate login (replace with actual authentication logic)
      await new Promise((resolve) => setTimeout(resolve, 1000));

      const user = await signinUser({
        email: credentials.email,
        password: credentials.password,
      });
      if (user) {
        // Handle remember me functionality
        if (credentials.rememberMe) {
          localStorage.setItem("rememberedEmail", credentials.email);
        } else {
          localStorage.removeItem("rememberedEmail");
        }
        // Redirect to dashboard
        router.push("/welcome");
        return true;
      }
      return false;
    } catch (error) {
      setError(error instanceof Error ? error.message : "Signin failed");
      return false;
    } finally {
      setIsLoading(false);
    }
  };
  const handleGoogleSignIn = async () => {
    try {
      setIsLoading(true);
      setError(null);
      const result = await signIn("google");

      if (result?.error) {
        setError(result.error);
      }
    } catch (error) {
      setError(
        error instanceof Error ? error.message : "Google Sign-In failed"
      );
    }
  };

  return { login, isLoading, error, handleGoogleSignIn };
};

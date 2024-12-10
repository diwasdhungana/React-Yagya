// lib/hooks/useTokens.ts
import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

interface Tokens {
  accessToken?: string;
  refreshToken?: string;
}

export function useTokens() {
  const { data: session } = useSession();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchTokens() {
      if (session) {
        setIsLoading(true);
        try {
          console.log("Token API is getting called", session);
          const response = await fetch("/api/auth/tokens");
          if (!response.ok) {
            throw new Error("Failed to fetch tokens");
          }
          const data = await response.json();
          console.log("this is data", data);
          router.push("/chat");
        } catch (err) {
          setError(
            err instanceof Error ? err.message : "An unknown error occurred"
          );
        } finally {
          setIsLoading(false);
        }
      }
    }

    fetchTokens();
  }, [session]);

  return { isLoading, error };
}

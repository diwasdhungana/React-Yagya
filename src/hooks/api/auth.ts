import { z } from 'zod';
import { removeClientAccessToken, setClientAccessToken } from '@/api/axios';
import { LoginRequestSchema, LoginResponseSchema } from '@/api/dtos';
import { createPostMutationHook } from '@/api/helpers';

export const useLogin = createPostMutationHook({
  endpoint: 'auth/login',
  bodySchema: LoginRequestSchema,
  responseSchema: LoginResponseSchema,
  rMutationParams: {
    onSuccess: (data) => {
      console.log(data);
      setClientAccessToken(data.accessToken);
    },
    onError: (error) => {},
  },
});

export const useLogout = createPostMutationHook({
  endpoint: 'auth/logout',
  bodySchema: z.null(),
  responseSchema: z.any(),
  rMutationParams: {
    onSuccess: () => {
      removeClientAccessToken();
    },
    onError: (error) => {},
  },
});

export const useRegister = createPostMutationHook({
  endpoint: 'auth/register',
  bodySchema: z.any(),
  responseSchema: z.any(),
  rMutationParams: {
    onSuccess: () => {},
    onError: (error) => {},
  },
});

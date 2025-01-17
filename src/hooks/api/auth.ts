import { z } from 'zod';
import { removeClientAccessToken, setClientAccessToken } from '@/api/axios';
import { LoginRequestSchema, LoginResponseSchema } from '@/api/dtos';
import { createPostMutationHook } from '@/api/helpers';
import { Notification } from '@/components/notification';

export const useLogin = createPostMutationHook({
  endpoint: 'auth/login',
  rMutationParams: {
    onSuccess: (data) => {
      Notification.success('Success!', 'Login successful');
      setTimeout(() => {
        setClientAccessToken(data.accessToken);
      }, 1000);
    },
    onError: (error) => {
      Notification.error('Error!', error.message);
    },
  },
});

export const useLogout = createPostMutationHook({
  endpoint: 'auth/logout',

  rMutationParams: {
    onSuccess: () => {
      removeClientAccessToken();
    },
    onError: (error) => {},
  },
});

export const useRegister = createPostMutationHook({
  endpoint: 'auth/register',
  rMutationParams: {
    onSuccess: () => {},
    onError: (error) => {},
  },
});

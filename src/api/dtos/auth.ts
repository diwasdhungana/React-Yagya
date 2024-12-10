import { z } from 'zod';

export const LoginRequestSchema = z.object({
  email: z.string().email(),
  password: z.string(),
  rememberMe: z.boolean().optional(),
});

export const LoginResponseSchema = z.object({
  // type: z.literal('bearer'),
  accessToken: z.string(),
  user: z.any(),
});

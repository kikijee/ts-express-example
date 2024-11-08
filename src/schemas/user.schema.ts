import { z } from 'zod';

export const userCreationSchema = z.object({
  Email: z.string().email(),
  FirstName: z.string(),
  LastName: z.string(),
  DateOfBirth: z.string().date(),
  Password: z.string().min(8),
  Role: z.string().max(5),
});

export const userLoginSchema = z.object({
  username: z.string(),
  password: z.string().min(8),
});
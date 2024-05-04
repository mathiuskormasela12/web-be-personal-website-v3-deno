import { z } from 'zod';

export const registerSchema = z.object({
  firstName: z.string(),
  lastName: z.string().optional(),
  email: z.string().email(),
  password: z.string().regex(/[\W]/g).regex(/[a-z]/g).regex(/[A-Z]/g).regex(
    /[0-9]/g,
  ),
  repeatPassword: z.string().regex(/[\W]/g).regex(/[a-z]/g).regex(/[A-Z]/g)
    .regex(/[0-9]/g),
}).superRefine(({ password, repeatPassword }, context) => {
  if (password !== repeatPassword) {
    context.addIssue({
      code: 'custom',
      path: ['Password'],
      message: "Password doesn't match",
    });
  }
});

import { z } from "zod";

const RegisterSchema = z
  .object({
    firstName: z.string().nonempty(),
    lastName: z.string(),
    username: z.string().nonempty(),
    email: z.string().email(),
    password: z.string().min(8),
    passwordConfirm: z.string().min(8),
  })
  .partial({
    lastName: true,
  });

export default RegisterSchema;

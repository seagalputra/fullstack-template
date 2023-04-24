import { TRPCError } from "@trpc/server";
import { hash } from "bcrypt";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import { Prisma } from "@prisma/client";
import RegisterSchema from "~/schema/RegisterSchema";

export const userRouter = createTRPCRouter({
  register: publicProcedure
    .input(RegisterSchema)
    .mutation(async ({ input, ctx }) => {
      const {
        firstName,
        lastName,
        username,
        email,
        password,
        passwordConfirm,
      } = input;

      if (password !== passwordConfirm)
        throw new TRPCError({
          code: "BAD_REQUEST",
          message:
            "Password and it's confirmation doesn't match. Please try again!",
        });

      const passwordHash: string = await hash(password, 10);

      try {
        const { id } = await ctx.prisma.user.create({
          data: {
            firstName,
            lastName,
            username,
            email,
            password: passwordHash,
          },
        });

        return {
          id,
          firstName,
          lastName,
          username,
          email,
        };
      } catch (err) {
        console.error(err);

        if (err instanceof Prisma.PrismaClientKnownRequestError) {
          if (err.code === "P2002") {
            throw new TRPCError({
              code: "UNPROCESSABLE_CONTENT",
              message: "Username or email already registered",
            });
          }
        } else {
          throw new TRPCError({
            code: "UNPROCESSABLE_CONTENT",
            message: "Failed creating a user",
          });
        }
      }
    }),
});

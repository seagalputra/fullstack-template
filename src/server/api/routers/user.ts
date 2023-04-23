import { TRPCError } from "@trpc/server";
import { z } from "zod";
import { hash } from "bcrypt";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import { Prisma } from "@prisma/client";

export const userRouter = createTRPCRouter({
  ping: publicProcedure.query(() => {
    return {
      message: "pong",
    };
  }),

  register: publicProcedure
    .input(
      z.object({
        firstName: z.string(),
        lastName: z.string(),
        email: z.string().email(),
        password: z.string().min(8),
        passwordConfirm: z.string().min(8),
      })
    )
    .mutation(async ({ input, ctx }) => {
      const { firstName, lastName, email, password, passwordConfirm } = input;

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
            email,
            password: passwordHash,
          },
        });

        return {
          id,
          firstName,
          lastName,
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

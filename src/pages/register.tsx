/* eslint-disable @typescript-eslint/no-misused-promises */
import { type NextPage } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import { type SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { type z } from "zod";
import Button from "~/components/Button";
import Form from "~/components/Form";
import { api } from "~/utils/api";
import RegisterSchema from "~/schema/RegisterSchema";
import Head from "next/head";

type RegisterInput = z.infer<typeof RegisterSchema>;

const errorStyles = () =>
  "border-2 border-rose-600 focus:border-rose-600 focus:ring-0 focus:ring-rose-600";

const Register: NextPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterInput>({
    resolver: zodResolver(RegisterSchema),
  });
  const router = useRouter();
  const userRegister = api.user.register.useMutation({
    onSuccess: async () => {
      await router.push("/");
    },
  });

  const onSubmit: SubmitHandler<RegisterInput> = (data) =>
    userRegister.mutate(data);

  return (
    <>
      <Head>
        <title>Register Account - NextJS</title>
      </Head>

      <div className="flex min-h-screen items-center justify-center">
        <Form>
          <div className="flex gap-4">
            <Form.Input
              id="firstName"
              type="text"
              label="First Name"
              className={errors.firstName ? errorStyles() : ""}
              errormessage={errors.firstName?.message}
              {...register("firstName")}
            />

            <Form.Input
              id="lastName"
              type="text"
              label="Last Name"
              className={errors.lastName ? errorStyles() : ""}
              errormessage={errors.lastName?.message}
              {...register("lastName")}
            />
          </div>

          <Form.Input
            id="username"
            type="text"
            label="Username"
            className={errors.username ? errorStyles() : ""}
            errormessage={errors.username?.message}
            {...register("username")}
          />
          <Form.Input
            id="email"
            type="text"
            label="Email"
            className={errors.email ? errorStyles() : ""}
            errormessage={errors.email?.message}
            {...register("email")}
          />
          <Form.Input
            id="password"
            type="password"
            label="Password"
            className={errors.password ? errorStyles() : ""}
            errormessage={errors.password?.message}
            {...register("password")}
          />
          <Form.Input
            id="passwordConfirm"
            type="password"
            label="Confirm Password"
            className={errors.passwordConfirm ? errorStyles() : ""}
            errormessage={errors.passwordConfirm?.message}
            {...register("passwordConfirm")}
          />

          <Button
            onClick={handleSubmit(onSubmit)}
            className="bg-indigo-500 text-white focus:outline-indigo-600"
          >
            Register
          </Button>

          <p className="text-center text-sm text-gray-500">
            Already have account?{" "}
            <Link
              href="login"
              className="font-medium text-indigo-500 hover:underline"
            >
              Sign in
            </Link>
          </p>
        </Form>
      </div>
    </>
  );
};

export default Register;

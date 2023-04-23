/* eslint-disable @typescript-eslint/no-misused-promises */
import { type NextPage } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import { type SubmitHandler, useForm } from "react-hook-form";
import Button from "~/components/Button";
import Form from "~/components/Form";
import { api } from "~/utils/api";

type RegisterInput = {
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  password: string;
  passwordConfirm: string;
};

const Register: NextPage = () => {
  const { register, handleSubmit } = useForm<RegisterInput>();
  const router = useRouter();
  const userRegister = api.user.register.useMutation({
    onSuccess: async () => {
      await router.push("/");
    },
  });

  const onSubmit: SubmitHandler<RegisterInput> = (data) =>
    userRegister.mutate(data);

  return (
    <div className="flex min-h-screen items-center justify-center">
      <Form>
        <div className="flex gap-4">
          <Form.Input
            id="firstName"
            type="text"
            label="First Name"
            {...register("firstName")}
          />
          <Form.Input
            id="lastName"
            type="text"
            label="Last Name"
            {...register("lastName")}
          />
        </div>

        <Form.Input
          id="username"
          type="text"
          label="Username"
          {...register("username")}
        />
        <Form.Input
          id="email"
          type="text"
          label="Email"
          {...register("email")}
        />
        <Form.Input
          id="password"
          type="password"
          label="Password"
          {...register("password")}
        />
        <Form.Input
          id="passwordConfirm"
          type="password"
          label="Confirm Password"
          {...register("passwordConfirm")}
        />

        <Button
          className="bg-indigo-500 text-white focus:outline-indigo-600"
          onClick={handleSubmit(onSubmit)}
        >
          Register
        </Button>

        <p className="text-center text-sm text-gray-500">
          Already have account?{" "}
          <Link href="login" className="font-medium text-indigo-500">
            Sign in
          </Link>
        </p>
      </Form>
    </div>
  );
};

export default Register;

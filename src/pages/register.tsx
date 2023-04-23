import { type NextPage } from "next";
import Link from "next/link";
import Button from "~/components/Button";
import Form from "~/components/Form";

const Register: NextPage = () => {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <Form method="POST">
        <div className="flex gap-4">
          <Form.Input
            id="firstName"
            name="firstName"
            type="text"
            label="First Name"
          />
          <Form.Input
            id="lastName"
            name="lastName"
            type="text"
            label="Last Name"
          />
        </div>

        <Form.Input id="email" name="email" type="text" label="Email" />

        <Form.Input
          id="password"
          name="password"
          type="password"
          label="Password"
        />
        <Form.Input
          id="passwordConfirm"
          name="passwordConfirm"
          type="password"
          label="Confirm Password"
        />

        <Button
          className="bg-indigo-500 text-white focus:outline-indigo-600"
          type="submit"
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

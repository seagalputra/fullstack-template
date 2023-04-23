import { type NextPage } from "next";

const Login: NextPage = () => {
  return (
    <div className="flex h-screen">
      <div className="my-auto flex-1 bg-white">
        <form className="flex flex-col gap-8 px-64" method="POST">
          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="text-md font-medium">
              Email
            </label>
            <input
              className="rounded-md border-gray-300 bg-gray-50"
              type="text"
              name="email"
              id="email"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="password" className="text-md font-medium">
              Password
            </label>
            <input
              className="rounded-md border-gray-300 bg-gray-50"
              type="text"
              name="password"
              id="password"
            />
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <input
                className="rounded border border-gray-300 bg-gray-50"
                type="checkbox"
                name="remember"
                id="remember"
              />
              <label className="text-sm" htmlFor="remember">
                Remember me
              </label>
            </div>

            <a href="#" className="text-sm font-medium text-indigo-500">
              Forget password?
            </a>
          </div>

          <button className="rounded-md bg-indigo-500 p-2 font-medium text-white focus:outline-indigo-600">
            Sign in
          </button>

          <div className="relative flex items-center">
            <div className="absolute left-1/2 right-1/2 w-[40%] -translate-x-1/2 bg-white">
              <p className="tex-sm text-center text-gray-500">
                Or continue with
              </p>
            </div>
            <div className="h-[1px] w-full border-b"></div>
          </div>

          <div className="flex flex-row justify-between gap-5">
            <button className="flex flex-1 items-center justify-center gap-3 rounded-md border bg-white p-2 font-medium text-gray-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="21"
                height="21"
                viewBox="0 0 48 48"
              >
                <path
                  fill="#FFC107"
                  d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 12.955 4 4 12.955 4 24s8.955 20 20 20 20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z"
                />
                <path
                  fill="#FF3D00"
                  d="m6.306 14.691 6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 16.318 4 9.656 8.337 6.306 14.691z"
                />
                <path
                  fill="#4CAF50"
                  d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238A11.91 11.91 0 0 1 24 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44z"
                />
                <path
                  fill="#1976D2"
                  d="M43.611 20.083H42V20H24v8h11.303a12.04 12.04 0 0 1-4.087 5.571l.003-.002 6.19 5.238C36.971 39.205 44 34 44 24c0-1.341-.138-2.65-.389-3.917z"
                />
              </svg>
              Google
            </button>
            <button className="flex flex-1 items-center justify-center gap-3 rounded-md bg-[#5890ff] p-2 font-medium text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="21"
                height="21"
                viewBox="0 0 256 256"
              >
                <path
                  fill="#fff"
                  strokeMiterlimit="10"
                  d="M12 0C5.373 0 0 5.373 0 12c0 6.016 4.432 10.984 10.206 11.852V15.18H7.237v-3.154h2.969V9.927c0-3.475 1.693-5 4.581-5 1.383 0 2.115.103 2.461.149v2.753h-1.97c-1.226 0-1.654 1.163-1.654 2.473v1.724h3.593l-.487 3.154h-3.106v8.697C19.481 23.083 24 18.075 24 12c0-6.627-5.373-12-12-12z"
                  fontFamily="none"
                  fontSize="none"
                  fontWeight="none"
                  style={{ mixBlendMode: "normal" }}
                  textAnchor="none"
                  transform="scale(10.66667)"
                />
              </svg>
              Facebook
            </button>
          </div>
        </form>
      </div>
      <div className="flex-1 bg-[url('/images/bg-login.jpg')] bg-cover bg-center bg-no-repeat"></div>
    </div>
  );
};

export default Login;

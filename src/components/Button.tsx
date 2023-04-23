import { type ButtonHTMLAttributes, type PropsWithChildren } from "react";

type ButtonType = ButtonHTMLAttributes<HTMLButtonElement>;

const Button = (props: PropsWithChildren<ButtonType>) => {
  return (
    <button
      {...props}
      className="rounded-md bg-indigo-500 p-2 font-medium text-white focus:outline-indigo-600"
    >
      {props?.children}
    </button>
  );
};

export default Button;

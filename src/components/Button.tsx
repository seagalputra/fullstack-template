import { type ButtonHTMLAttributes, type PropsWithChildren } from "react";
import clsx from "clsx";

type ButtonType = ButtonHTMLAttributes<HTMLButtonElement>;

const Button = (props: PropsWithChildren<ButtonType>) => {
  return (
    <button
      {...props}
      className={clsx("rounded-md p-2 font-medium", props?.className)}
    >
      {props?.children}
    </button>
  );
};

export default Button;

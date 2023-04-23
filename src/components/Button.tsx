import {
  type ButtonHTMLAttributes,
  type PropsWithChildren,
  forwardRef,
} from "react";
import clsx from "clsx";

type ButtonType = ButtonHTMLAttributes<HTMLButtonElement>;

const Button = forwardRef<HTMLButtonElement, ButtonType>(function Button(
  props: PropsWithChildren<ButtonType>,
  ref
) {
  return (
    <button
      {...props}
      ref={ref}
      className={clsx("rounded-md p-2 font-medium", props?.className)}
    >
      {props?.children}
    </button>
  );
});

export default Button;

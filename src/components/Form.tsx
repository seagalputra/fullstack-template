import {
  type LabelHTMLAttributes,
  type FormHTMLAttributes,
  type PropsWithChildren,
  type InputHTMLAttributes,
} from "react";
import clsx from "clsx";

type FormType = FormHTMLAttributes<HTMLFormElement>;

const Form = (props: PropsWithChildren<FormType>) => {
  return (
    <form
      className={clsx("flex flex-col gap-8", props?.className)}
      method={props?.method}
    >
      {props?.children}
    </form>
  );
};

type LabelType = LabelHTMLAttributes<HTMLLabelElement>;

const Label = (props: PropsWithChildren<LabelType>) => {
  return <label {...props}>{props?.children}</label>;
};

Form.Label = Label;

type InputType = InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
};

const Input = (props: PropsWithChildren<InputType>) => {
  return (
    <div className="flex flex-col gap-2">
      <Label className="text-md font-medium" htmlFor={props?.name}>
        {props?.label}
      </Label>
      <input
        {...props}
        className={clsx(
          "rounded-md border-gray-300 bg-gray-50",
          props?.className
        )}
      />
    </div>
  );
};

Form.Input = Input;

type CheckboxType = InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
};

const Checkbox = (props: PropsWithChildren<CheckboxType>) => {
  return (
    <div className="flex items-center gap-2">
      <input
        {...props}
        className={clsx(
          "rounded border border-gray-300 bg-gray-50",
          props?.className
        )}
        type="checkbox"
      />
      <Label className="text-sm" htmlFor={props?.name}>
        {props?.label}
      </Label>
    </div>
  );
};

Form.Checkbox = Checkbox;

export default Form;

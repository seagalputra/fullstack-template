import {
  type LabelHTMLAttributes,
  type FormHTMLAttributes,
  type PropsWithChildren,
  type InputHTMLAttributes,
  forwardRef,
  type ForwardRefExoticComponent,
  type RefAttributes,
} from "react";
import clsx from "clsx";

type FormType = FormHTMLAttributes<HTMLFormElement>;

const FormRef = forwardRef<HTMLFormElement, FormType>(function Form(
  props: PropsWithChildren<FormType>,
  ref
) {
  return (
    <form
      className={clsx("flex flex-col gap-8", props?.className)}
      ref={ref}
      method={props?.method}
    >
      {props?.children}
    </form>
  );
});

type LabelType = LabelHTMLAttributes<HTMLLabelElement>;

const Label = (props: PropsWithChildren<LabelType>) => {
  return <label {...props}>{props?.children}</label>;
};

type InputType = InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
};

const Input = forwardRef<HTMLInputElement, InputType>(function Input(
  props: PropsWithChildren<InputType>,
  ref
) {
  return (
    <div className="flex flex-col gap-2">
      <Label className="text-md font-medium" htmlFor={props?.name}>
        {props?.label}
      </Label>
      <input
        {...props}
        ref={ref}
        className={clsx(
          "rounded-md border-gray-300 bg-gray-50",
          props?.className
        )}
      />
    </div>
  );
});

type CheckboxType = InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
};

const Checkbox = forwardRef<HTMLInputElement, CheckboxType>(function Checkbox(
  props: PropsWithChildren<CheckboxType>,
  ref
) {
  return (
    <div className="flex items-center gap-2">
      <input
        {...props}
        ref={ref}
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
});

interface IForm
  extends ForwardRefExoticComponent<FormType & RefAttributes<HTMLFormElement>> {
  Label: typeof Label;
  Input: typeof Input;
  Checkbox: typeof Checkbox;
}

export default {
  ...FormRef,
  Checkbox,
  Input,
  Label,
} as IForm;

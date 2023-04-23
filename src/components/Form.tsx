import { type PropsWithChildren } from "react";

type FormType = {
  method?: string;
};

const Form = ({ method, children }: PropsWithChildren<FormType>) => {
  return (
    <form className="flex flex-col gap-8 px-64" method={method}>
      {children}
    </form>
  );
};

type InputType = {
  id?: string;
  name?: string;
  type?: string;
  label?: string;
};

const Input = (props: PropsWithChildren<InputType>) => {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={props?.name} className="text-md font-medium">
        {props?.label}
      </label>
      <input {...props} className="rounded-md border-gray-300 bg-gray-50" />
    </div>
  );
};

Form.Input = Input;

type CheckboxType = {
  id?: string;
  name?: string;
  label?: string;
};

const Checkbox = (props: PropsWithChildren<CheckboxType>) => {
  return (
    <div className="flex items-center gap-2">
      <input
        {...props}
        className="rounded border border-gray-300 bg-gray-50"
        type="checkbox"
      />
      <label className="text-sm" htmlFor={props?.name}>
        {props?.label}
      </label>
    </div>
  );
};

Form.Checkbox = Checkbox;

export default Form;

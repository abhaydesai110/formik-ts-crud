import { Field, ErrorMessage } from "formik";
import { InputProps } from "./Input.Model";

export const Input = (props: InputProps) => {
  const { label, name,className,id,placeholder, type , ...rest } = props;
  return (
    <div className="my-2" id='input'>
      <label htmlFor={name} >{label}</label>
      <Field id={id} name={name} {...rest} />
      <ErrorMessage name={name} />
    </div>
  );
};

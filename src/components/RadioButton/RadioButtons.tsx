import { Field, ErrorMessage } from "formik";
import * as React from "react"
import { RadioButtonProps } from './RadioButton.model';

function RadioButtons(props: RadioButtonProps) {
  const { label, name, options, ...rest } = props;
  return (
    <div className="mt-4">
      <label>{label}</label>
      <Field name={name}>
        {({ field }: { field: any }) => {
          return options.map((option: any) => {
            return (
              <React.Fragment key={option.key}>
                <input
                  type="radio"
                  id={option.value}
                  {...field}
                  {...rest}
                  value={option.value}
                  checked={field.value === option.value}
                />
                <label className='checkbox' htmlFor={option.value}>{option.key}</label>
              </React.Fragment>
            );
          });
        }}
      </Field>
      <ErrorMessage name={name} />
    </div>
  );
}

export default RadioButtons;

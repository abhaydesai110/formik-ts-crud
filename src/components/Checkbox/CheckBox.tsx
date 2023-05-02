import React from 'react'
import { Field, ErrorMessage } from 'formik'
import { CheckBoxProps } from './Checkbox.Model'


function CheckboxGroup(props: CheckBoxProps) {
    const { label, name, options, ...rest } = props
    return (
        <div className='mt-4'>
            <label>{label}</label>
            <Field name={name}>
                {({ field }: { field: any }) => {
                    return options.map((option: any) => {
                        return (
                            <React.Fragment key={option.key}>
                                <input
                                    type='checkbox'
                                    id={option.value}
                                    {...field}
                                    {...rest}
                                    value={option.value}
                                    checked={field.value?.includes(option?.value)}
                                />
                                <label className='checkbox' htmlFor={option.value}>{option.key}</label>
                            </React.Fragment>
                        )
                    })
                }}
            </Field>
            <ErrorMessage name={name} />
        </div>
    )
}

export default CheckboxGroup

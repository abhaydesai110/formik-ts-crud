import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

interface FormValues {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    confirmPassword: string;
    gender: string;
    interests: string[];
}

const validationSchema = Yup.object().shape({
    firstName: Yup.string().required('First name is required'),
    lastName: Yup.string().required('Last name is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    password: Yup.string()
        .min(6, 'Password must be at least 6 characters')
        .required('Password is required'),
    confirmPassword: Yup.string()
        .oneOf([Yup.ref('password'), ""], 'Passwords must match')
        .required('Confirm password is required'),
    gender: Yup.string().required('Gender is required'),
    interests: Yup.array()
        .min(1, 'Please select at least one interest')
        .required('Interests are required'),
});

const CustomInput = ({
    field,
    form,
    type,
    label,
}: {
    field: any;
    form: any;
    type: string;
    label: string;
}) => {
    const { name } = field;
    const { errors, touched } = form;
    const showError = errors[name] && touched[name];

    return (
        <div>
            <label htmlFor={name}>{label}</label>
            <input type={type} id={name} {...field} />
            {showError && <div className="error">{errors[name]}</div>}
        </div>
    );
};

const CustomRadioButton = ({
    field,
    form,
    id,
    label,
}: {
    field: any;
    form: any;
    id: string;
    label: string;
}) => {
    const { name } = field;
    const { errors, touched } = form;
    const showError = errors[name] && touched[name];

    return (
        <div>
            <label htmlFor={id}>{label}</label>
            <input type="radio" id={id} {...field} />
            {showError && <div className="error">{errors[name]}</div>}
        </div>
    );
};

const CustomCheckbox = ({
    field,
    form,
    id,
    label,
}: {
    field: any;
    form: any;
    id: string;
    label: string;
}) => {
    const { name } = field;
    const { errors, touched } = form;
    const showError = errors[name] && touched[name];

    return (
        <div>
            <label htmlFor={id}>{label}</label>
            <input type="checkbox" id={id} {...field} />
            {showError && <div className="error">{errors[name]}</div>}
        </div>
    );
};

const RegistrationForm = () => {
    const initialValues: FormValues = {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
        gender: '',
        interests: [],
    };

    const handleSubmit = (values: FormValues) => {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(values)
        };
        fetch('https://642d40fbbf8cbecdb40124eb.mockapi.io/apiData', requestOptions)
            .then(response => response.json())
            .then(data => console.log(data))
            .catch(error => console.error(error));
    };

    return (
        <Formik
            initialValues={initialValues}
            onSubmit={handleSubmit}
            validationSchema={validationSchema}
        >
            {({ isSubmitting }) => (
                <Form>
                    <div>
                        <Field
                            name="firstName"
                            type="text"
                            label="First Name"
                            component={CustomInput}
                        />
                        <Field
                            name="lastName"
                            type="text"
                            label="Last Name"
                            component={CustomInput}
                        />
                        <Field
                            name="email"
                            type="email"
                            label="Email"
                            component={CustomInput}
                        />
                        <Field
                            name="password"
                            type="password"
                            label="Password"
                            component={CustomInput}
                        />
                        <Field
                            name="confirmPassword"
                            type="password"
                            label="Confirm Password"
                            component={CustomInput}
                        />
                        <div>
                            <div>Gender</div>
                            <Field
                                name="gender"
                                type="radio"
                                id="male"
                                label="Male"
                                value="male"
                                component={CustomRadioButton}
                            />
                            <Field
                                name="gender"
                                type="radio"
                                id="female"
                                label="Female"
                                value="female"
                                component={CustomRadioButton}
                            />
                            <ErrorMessage name="gender" />
                        </div>
                        <div>
                            <div>Interests</div>
                            <Field
                                name="interests"
                                type="checkbox"
                                id="reading"
                                label="Reading"
                                value="reading"
                                component={CustomCheckbox}
                            />
                            <Field
                                name="interests"
                                type="checkbox"
                                id="music"
                                label="Music"
                                value="music"
                                component={CustomCheckbox}
                            />
                            <Field
                                name="interests"
                                type="checkbox"
                                id="sports"
                                label="Sports"
                                value="sports"
                                component={CustomCheckbox}
                            />
                            <ErrorMessage name="interests" />
                        </div>
                        <button type="submit" disabled={isSubmitting}>
                            Submit
                        </button>
                    </div>
                </Form>
            )}
        </Formik>
    );
};

export default RegistrationForm;
import { Formik, Form } from "formik";
import CheckboxGroup from '../Checkbox/CheckBox';
import { Input } from '../Input/Input';
import RadioButtons from '../RadioButton/RadioButtons';
import { useEffect, useState } from 'react';
import * as Yup from "yup";
import { RegisterFormProps } from './Register.model';
import { getPersonData } from '../../State/Person.action';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '../../Redux/store';
import { selectUser } from '../../State/Person.Slice';



const checkboxOptions = [
    { key: 'HTML', value: 'html' },
    { key: 'CSS', value: 'css' },
    { key: 'JavaScript', value: 'javascript' }
];
const options = [
    { key: "Email", value: "emailmoc" },
    { key: "Telephone", value: "telephonemoc" },
];

const initialValues = {
    email: "",
    password: "",
    confirm_password: "",
    mode_of_contact: "",
    phone: "",
    skills: [],
};

const RegisterForm = (props: RegisterFormProps) => {
    console.log('props :>> ', props);
    const {id, onSubmit}  = props
    const dispatch = useDispatch()
    const userData = useAppSelector(selectUser)
    const [initialdata, setIntitialData] = useState(initialValues)

    useEffect(() => {
        if (id) {
            dispatch(getPersonData(id))
        }
    }, [id])

    useEffect(() => {
        if (userData.getPersonInitialState?.data) {
            setIntitialData(userData.getPersonInitialState?.data.data)
        }
    }, [userData.getPersonInitialState?.data])

    const validationSchema = Yup.object({
        email: Yup.string()
            .email('Invalid email format')
            .required('Required'),
        password: Yup.string().required('Required'),
        confirm_password: Yup.string()
            .oneOf([Yup.ref('password'), ''], 'Passwords must match')
            .required('Required'),
        mode_of_contact: Yup.string().required('Required'),
        phone: Yup.string(),
    })

    return (
        <Formik
            enableReinitialize = {true}
            initialValues={initialdata}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
        >
            {(prop) => {
                return (
                    <>
                        <div className='container'>
                            <h2>Register Form</h2>
                            <div className="row ">
                                <div className="col-4  border-dark rounded">
                                    <Form onSubmit={prop.handleSubmit}>
                                        <Input className='mt-4' type="email" name="email" label="Email" />
                                        <Input type="password" name="password" label="Password" />
                                        <Input
                                            type="password"
                                            name="confirm_password"
                                            label="Confirm Password"
                                        />
                                        <RadioButtons
                                            label='Mode of contact'
                                            name='mode_of_contact'
                                            options={options} />
                                        <CheckboxGroup
                                            label='Your skillset'
                                            name='skills'
                                            options={checkboxOptions} />
                                        <Input
                                            type="text"
                                            name="phone"
                                            label="Phone number"
                                        />
                                        <button className='btn btn-dark mb-3' type="submit"  >
                                            Submit
                                        </button>
                                    </Form>
                                </div>
                            </div>
                        </div >
                        <br />
                        <br />
                        <div>
                        </div>
                    </>
                );
            }}
        </Formik >
    );
};

export default RegisterForm;
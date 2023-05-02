import { Input } from "../components/Input/Input";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { loginProps } from "./Login.model";
import { Link } from 'react-router-dom';
import { useState } from "react";
import { useDispatch } from 'react-redux';
import { increment } from '../State/Person.Slice';
import { useAppSelector } from '../Redux/store';
import { selectUser } from '../State/Person.Slice';

const Login = () => {
  const [count, setCount] = useState(0)
  const dispatch = useDispatch()
  const inc = useAppSelector(selectUser)
  console.log('inc :>> ', inc);

  const initialValues: { email: string; password: string } = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email format").required("Required"),
    password: Yup.string().required("Required"),
  });

  const onSubmit = (values: loginProps) => {
    console.log("Form data", values);
  };




  return (
    <>
      <header>
        <div className="container pt-4">
          <img src="https://www.buysm.com/images/icons/logo.png" style={{ width: "170px" }} alt="" />
        </div >
      </header>
      <main>
        <section className='banner'>
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <Formik
                  initialValues={initialValues}
                  validationSchema={validationSchema}
                  onSubmit={onSubmit}
                >
                  {(formik) => {
                    return (
                      <>
                        <Form>
                          <h2>Login</h2>
                          <Input
                            label="Email"
                            id="exampleInputEmail1"
                            placeholder="Enter email"
                            name="Email"
                            type="email"
                          />
                          <Input
                            label="Password"
                            className="form-control"
                            id="exampleInputEmail1"
                            placeholder="Enter Password"
                            name="Password"
                            type="password"
                          />
                          <button
                            type="submit"
                            className="btn btn-primary"
                            disabled={!formik.isValid}
                          >
                            Sign in
                          </button>
                        </Form>
                      </>
                    );
                  }}
                </Formik >
              </div>
              <div className="col-lg-6">
                <div className='img'>
                  <img src="https://upraise.io/wp-content/uploads/2022/05/goal-setting-banner.webp" style={{ width: "500px" }} alt="" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="container">
          <p>If you don’t have an account?</p>
          <button className='btn btn-dark'> <Link to="/register">Sign up</Link></button>
        </div>
      </footer>

      <button onClick={()=>{}}>increment</button>
      <h2>{count}</h2>
      <button>Decrement</button>

    </>
  );
};

export default Login;

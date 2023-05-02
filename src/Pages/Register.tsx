import { IRegister, RegisterProps } from "./Register.model";
import { useDispatch } from 'react-redux';
import { registerUser } from '../State/Person.action';
import { useAppSelector } from '../Redux/store';
import { selectUser } from '../State/Person.Slice';
import { Link } from 'react-router-dom';
import RegisterComp from '../components/Register/RegisterComp';
// import RegisterComp from '../components/Register/RegisterComp';

export const Register = (props: IRegister) => {
  const { id } = props
  const dispatch = useDispatch()

  const onSubmit = (values: RegisterProps) => {
    console.log('values :>> ', { ...values, confirm_password: values.confirm_password === undefined ? null : Number(values.confirm_password) });
    dispatch(registerUser(values))
  };

  return (
    <>
      <header>
        <div className="container pt-4">
          <img src="https://www.buysm.com/images/icons/logo.png" style={{ width: "170px" }} alt="" />
        </div >
      </header>
      <main>
        <section>
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 my-5">
                <RegisterComp
                  onSubmit={onSubmit} />
              </div>
              <div className="col-lg-6">
                <img src="https://img.freepik.com/free-vector/competent-resume-writing-professional-cv-constructor-online-job-application-profile-creation-african-american-woman-filling-up-digital-form-concept-illustration_335657-2053.jpg?w=2000" style={{ width: "500px" }} alt="" />
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer>
        <div className="container">
          <p>If you don’t have an account?</p>
          <button className='btn btn-dark'>
            <Link to="/login">Sign in</Link>
          </button>
        </div>
      </footer>
    </>
  );
};



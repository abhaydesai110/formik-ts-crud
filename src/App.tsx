import './App.css';
import { Register } from './Pages/Register';
import NavBar from './components/NavBar';
import Login from './Pages/Login';
import { Route, Routes } from 'react-router-dom';
import Result from './Pages/Result';
// import RegisterComp from './components/Register/RegisterComp';
// import Result from './Pages/Result';
// import Read from './Pages/Read';
// import RegistrationForm from './components/NewFormik Form/newFormik';

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        {/* <Route path='result/:id/register' element={<Register />} /> */}
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/result' element={<Result />} />
      </Routes>
      {/* <RegisterComp /> */}
    </>
  )
  // /batches/:batch_id/DisplayStudentList
}

export default App;

import logo from './logo.svg';
import './App.css';
import Login from "./components/Login.js";
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <Routes>
        {/* <Route path='/' Component={<div>welcome<div/>} */}
        <Route path='/login' element={<Login />} />
      </Routes>
    </>
  );
}

export default App;

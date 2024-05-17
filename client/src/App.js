import logo from './logo.svg';
import './App.css';
import Login from "./components/Login.js";
import { Route, Routes, useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import Dashboard from './components/Dashboard.js';
import Navbar from './Navbar.js';
import { useEffect, useState } from 'react';
import TopBar from './components/TopBar.js';
import AddUser from './components/AddUser.js';

function App() {

  const navigate = useNavigate();
  const path = useLocation();
  const curr_path = path.pathname.split("/")[1];
  const [navBar, setNavbar] = useState(false);
  const routes = ["dashboard", "adduser"]
  const [data, setData] = useState({});

  useEffect(() => {
    if (routes.includes(curr_path)) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  }, [curr_path, routes]);

  useEffect(() => {
    const data = localStorage.getItem("token");
    if (data === null) {
      console.log("nill daata");
      navigate("/");
    }
    const user = localStorage.getItem("Data")
    if (user) {
      setData(JSON.parse(user));
    } else {
      localStorage.removeItem('token');
      navigate("/");
    }
  }, []);


  return (
    <>

      <Navbar navBar={navBar} data={data} />
      <TopBar navBar={navBar} data={data} page={"Dashboard"} />

      <div className={` ${navBar ? "pl-64 pt-20 pr-4 pb-4" : ""} bg-gray-100 h-screen`}>

        <Routes>
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/' element={<Login />} />
          <Route path='/adduser' element={<AddUser />} />
        </Routes>

      </div>
    </>
  );
}

export default App;

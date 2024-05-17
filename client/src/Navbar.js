import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Dashboard from './components/Dashboard'

function Navbar({ navBar, data }) {

    const navigate = useNavigate();

    const handleLogout = () => {

        localStorage.removeItem("Data");
        localStorage.removeItem("token");
        navigate("/");

    };


    if (!navBar)
        return null;
    return (
        <>
            <div className=' fixed w-60 h-screen bg-sky-300 z-20'>
                <div className='text-white font-semibold text-2xl flex items-center gap-4 p-4'>
                    <img className='w-10' src='/images/logo.png' />
                    <div>ProfPortal</div>
                </div>
                <div className='text-white'>
                    <ul className='text-lg font-medium'>
                        <li className='pt-5 pl-5 pb-4'>
                            <Link to="/dashboard" className=''>Dashboard</Link>
                        </li>
                        {/* { data && data.role == "admin" && */}
                            <li className=' pl-5 pb-4'>
                                <Link to="/adduser">Add User</Link>
                            </li>
                        {/* } */}
                        <li className='pl-5 pb-4'>
                            <button className='' onClick={handleLogout}>Logout</button>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Navbar
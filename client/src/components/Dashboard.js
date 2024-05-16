import React, { useEffect, useState } from "react";
import { useNavigate, redirect } from "react-router-dom";
import { ToastContainer } from "react-toastify";

function Dashboard() {
  const [data, setData] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const data = localStorage.getItem("token");
    if (data === null) {
      console.log("nill daata");
      navigate("/login");
    }
    setData(JSON.parse(localStorage.getItem("Data")));
  }, []);

  

  return (
    <>
      <ToastContainer />
      <div className="h-full">Welcome ...!!!</div>
    </>
  );
}

export default Dashboard;

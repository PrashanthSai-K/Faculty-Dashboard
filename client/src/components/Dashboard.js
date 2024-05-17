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


      <div className="w-full h-full flex">
        <div className="w-3/4 h-full flex flex-col gap-4 justify-center items-center">
          <div style={{ width: "96%" }} className="bg-white shadow-2xl h-1/5 flex justify-center items-center gap-7">
            <div style={{ width: "30%" }} className="h-5/6 bg-gray-200 shadow-md rounded-md p-2 flex justify-center items-center gap-2">
              <div style={{ width: "40%", height: "95%" }} className="flex justify-center items-center">
                <img style={{ width: "100%", height: "100%" }} className="" src="/images/teacher.png" />
              </div>
              <div style={{ width: "60%", height: "95%" }} className=" bg-white shadow-md rounded-lg pl-6 flex flex-col justify-center">
                <div className="text-md">
                  <span className=" font-bold">List of Faculty: </span>1232
                </div>
                <div className="text-sm">
                  <span className=" font-bold">ACTIVE: </span>632
                </div>
                <div className="text-sm">
                  <span className=" font-bold">INACTICE: </span>600
                </div>
              </div>
            </div>
            <div style={{ width: "30%" }} className="h-5/6 bg-gray-200 shadow-md rounded-md p-2 flex justify-center items-center gap-2">
              <div style={{ width: "40%", height: "95%" }} className="flex justify-center items-center">
                <img style={{ width: "100%", height: "100%" }} className="" src="/images/students.png" />
              </div>
              <div style={{ width: "60%", height: "95%" }} className=" bg-white shadow-md rounded-lg pl-6 flex flex-col justify-center">
                <div className="text-md">
                  <span className=" font-bold">List of Faculty: </span>1232
                </div>
                <div className="text-sm">
                  <span className=" font-bold">ACTIVE: </span>632
                </div>
                <div className="text-sm">
                  <span className=" font-bold">INACTICE: </span>600
                </div>
              </div>
            </div>
            <div style={{ width: "30%" }} className="h-5/6 bg-gray-200 shadow-md rounded-md p-2 flex justify-center items-center gap-2">
              <div style={{ width: "40%", height: "95%" }} className="flex justify-center items-center">
                <img style={{ width: "100%", height: "100%" }} className="" src="/images/college.png" />
              </div>
              <div style={{ width: "60%", height: "95%" }} className="bg-white shadow-md rounded-lg pl-6 flex flex-col justify-center">
                <div className="text-md">
                  <span className=" font-bold">List of Faculty: </span>1232
                </div>
                <div className="text-sm">
                  <span className=" font-bold">ACTIVE: </span>632
                </div>
                <div className="text-sm">
                  <span className=" font-bold">INACTICE: </span>600
                </div>
              </div>
            </div>
          </div>
          <div style={{ width: "96%", height: "75%" }} className=" bg-white shadow-2xl flex justify-center items-center">
            <table style={{ width: "95%", height: "90%", borderRadius: "20px" }} className="">
              <thead class="text-xs text-gray-700 uppercase bg-gray-200 dark:bg-gray-700 dark:text-gray-400 rounded-md">
                <tr className="bg-gray-200">
                  <th scope="col" class="p-4">
                    <div class="flex items-center">
                      <input id="checkbox-all-search" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-200 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                      <label for="checkbox-all-search" class="sr-only">checkbox</label>
                    </div>
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Product name
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Color
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Category
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Accessories
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Available
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Price
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Weight
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-white dark:hover:bg-gray-600">
                  <td class="w-4 p-4">
                    <div class="flex items-center">
                      <input id="checkbox-table-search-1" type="checkbox" class="w-4 h-4 text-blue-600 bg-white border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                      <label for="checkbox-table-search-1" class="sr-only">checkbox</label>
                    </div>
                  </td>
                  <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Apple MacBook Pro 17"
                  </th>
                  <td class="px-6 py-4">
                    Silver
                  </td>
                  <td class="px-6 py-4">
                    Laptop
                  </td>
                  <td class="px-6 py-4">
                    Yes
                  </td>
                  <td class="px-6 py-4">
                    Yes
                  </td>
                  <td class="px-6 py-4">
                    $2999
                  </td>
                  <td class="px-6 py-4">
                    3.0 lb.
                  </td>
                  <td class="flex items-center px-6 py-4">
                    <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                    <a href="#" class="font-medium text-red-600 dark:text-red-500 hover:underline ms-3">Remove</a>
                  </td>
                </tr>
                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-white dark:hover:bg-gray-600">
                  <td class="w-4 p-4">
                    <div class="flex items-center">
                      <input id="checkbox-table-search-2" type="checkbox" class="w-4 h-4 text-blue-600 bg-white border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                      <label for="checkbox-table-search-2" class="sr-only">checkbox</label>
                    </div>
                  </td>
                  <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Microsoft Surface Pro
                  </th>
                  <td class="px-6 py-4">
                    White
                  </td>
                  <td class="px-6 py-4">
                    Laptop PC
                  </td>
                  <td class="px-6 py-4">
                    No
                  </td>
                  <td class="px-6 py-4">
                    Yes
                  </td>
                  <td class="px-6 py-4">
                    $1999
                  </td>
                  <td class="px-6 py-4">
                    1.0 lb.
                  </td>
                  <td class="flex items-center px-6 py-4">
                    <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                    <a href="#" class="font-medium text-red-600 dark:text-red-500 hover:underline ms-3">Remove</a>
                  </td>
                </tr>
                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-white dark:hover:bg-gray-600">
                  <td class="w-4 p-4">
                    <div class="flex items-center">
                      <input id="checkbox-table-search-3" type="checkbox" class="w-4 h-4 text-blue-600 bg-white border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                      <label for="checkbox-table-search-3" class="sr-only">checkbox</label>
                    </div>
                  </td>
                  <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Magic Mouse 2
                  </th>
                  <td class="px-6 py-4">
                    Black
                  </td>
                  <td class="px-6 py-4">
                    Accessories
                  </td>
                  <td class="px-6 py-4">
                    Yes
                  </td>
                  <td class="px-6 py-4">
                    No
                  </td>
                  <td class="px-6 py-4">
                    $99
                  </td>
                  <td class="px-6 py-4">
                    0.2 lb.
                  </td>
                  <td class="flex items-center px-6 py-4">
                    <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                    <a href="#" class="font-medium text-red-600 dark:text-red-500 hover:underline ms-3">Remove</a>
                  </td>
                </tr>
                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-white dark:hover:bg-gray-600">
                  <td class="w-4 p-4">
                    <div class="flex items-center">
                      <input id="checkbox-table-search-3" type="checkbox" class="w-4 h-4 text-blue-600 bg-white border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                      <label for="checkbox-table-search-3" class="sr-only">checkbox</label>
                    </div>
                  </td>
                  <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Apple Watch
                  </th>
                  <td class="px-6 py-4">
                    Black
                  </td>
                  <td class="px-6 py-4">
                    Watches
                  </td>
                  <td class="px-6 py-4">
                    Yes
                  </td>
                  <td class="px-6 py-4">
                    No
                  </td>
                  <td class="px-6 py-4">
                    $199
                  </td>
                  <td class="px-6 py-4">
                    0.12 lb.
                  </td>
                  <td class="flex items-center px-6 py-4">
                    <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                    <a href="#" class="font-medium text-red-600 dark:text-red-500 hover:underline ms-3">Remove</a>
                  </td>
                </tr>
                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-white dark:hover:bg-gray-600">
                  <td class="w-4 p-4">
                    <div class="flex items-center">
                      <input id="checkbox-table-search-3" type="checkbox" class="w-4 h-4 text-blue-600 bg-white border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                      <label for="checkbox-table-search-3" class="sr-only">checkbox</label>
                    </div>
                  </td>
                  <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Apple iMac
                  </th>
                  <td class="px-6 py-4">
                    Silver
                  </td>
                  <td class="px-6 py-4">
                    PC
                  </td>
                  <td class="px-6 py-4">
                    Yes
                  </td>
                  <td class="px-6 py-4">
                    Yes
                  </td>
                  <td class="px-6 py-4">
                    $2999
                  </td>
                  <td class="px-6 py-4">
                    7.0 lb.
                  </td>
                  <td class="flex items-center px-6 py-4">
                    <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                    <a href="#" class="font-medium text-red-600 dark:text-red-500 hover:underline ms-3">Remove</a>
                  </td>
                </tr>
                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-white dark:hover:bg-gray-600">
                  <td class="w-4 p-4">
                    <div class="flex items-center">
                      <input id="checkbox-table-search-3" type="checkbox" class="w-4 h-4 text-blue-600 bg-white border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                      <label for="checkbox-table-search-3" class="sr-only">checkbox</label>
                    </div>
                  </td>
                  <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Apple AirPods
                  </th>
                  <td class="px-6 py-4">
                    White
                  </td>
                  <td class="px-6 py-4">
                    Accessories
                  </td>
                  <td class="px-6 py-4">
                    No
                  </td>
                  <td class="px-6 py-4">
                    Yes
                  </td>
                  <td class="px-6 py-4">
                    $399
                  </td>
                  <td class="px-6 py-4">
                    38 g
                  </td>
                  <td class="flex items-center px-6 py-4">
                    <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                    <a href="#" class="font-medium text-red-600 dark:text-red-500 hover:underline ms-3">Remove</a>
                  </td>
                </tr>
                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-white dark:hover:bg-gray-600">
                  <td class="w-4 p-4">
                    <div class="flex items-center">
                      <input id="checkbox-table-search-3" type="checkbox" class="w-4 h-4 text-blue-600 bg-white border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                      <label for="checkbox-table-search-3" class="sr-only">checkbox</label>
                    </div>
                  </td>
                  <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    iPad Pro
                  </th>
                  <td class="px-6 py-4">
                    Gold
                  </td>
                  <td class="px-6 py-4">
                    Tablet
                  </td>
                  <td class="px-6 py-4">
                    No
                  </td>
                  <td class="px-6 py-4">
                    Yes
                  </td>
                  <td class="px-6 py-4">
                    $699
                  </td>
                  <td class="px-6 py-4">
                    1.3 lb.
                  </td>
                  <td class="flex items-center px-6 py-4">
                    <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                    <a href="#" class="font-medium text-red-600 dark:text-red-500 hover:underline ms-3">Remove</a>
                  </td>
                </tr>
                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-white dark:hover:bg-gray-600">
                  <td class="w-4 p-4">
                    <div class="flex items-center">
                      <input id="checkbox-table-search-3" type="checkbox" class="w-4 h-4 text-blue-600 bg-white border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                      <label for="checkbox-table-search-3" class="sr-only">checkbox</label>
                    </div>
                  </td>
                  <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Magic Keyboard
                  </th>
                  <td class="px-6 py-4">
                    Black
                  </td>
                  <td class="px-6 py-4">
                    Accessories
                  </td>
                  <td class="px-6 py-4">
                    Yes
                  </td>
                  <td class="px-6 py-4">
                    Yes
                  </td>
                  <td class="px-6 py-4">
                    $99
                  </td>
                  <td class="px-6 py-4">
                    453 g
                  </td>
                  <td class="flex items-center px-6 py-4">
                    <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                    <a href="#" class="font-medium text-red-600 dark:text-red-500 hover:underline ms-3">Remove</a>
                  </td>
                </tr>
                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-white dark:hover:bg-gray-600">
                  <td class="w-4 p-4">
                    <div class="flex items-center">
                      <input id="checkbox-table-search-3" type="checkbox" class="w-4 h-4 text-blue-600 bg-white border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                      <label for="checkbox-table-search-3" class="sr-only">checkbox</label>
                    </div>
                  </td>
                  <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Apple TV 4K
                  </th>
                  <td class="px-6 py-4">
                    Black
                  </td>
                  <td class="px-6 py-4">
                    TV
                  </td>
                  <td class="px-6 py-4">
                    Yes
                  </td>
                  <td class="px-6 py-4">
                    No
                  </td>
                  <td class="px-6 py-4">
                    $179
                  </td>
                  <td class="px-6 py-4">
                    1.78 lb.
                  </td>
                  <td class="flex items-center px-6 py-4">
                    <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                    <a href="#" class="font-medium text-red-600 dark:text-red-500 hover:underline ms-3">Remove</a>
                  </td>
                </tr>
                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-white dark:hover:bg-gray-600">
                  <td class="w-4 p-4">
                    <div class="flex items-center">
                      <input id="checkbox-table-search-3" type="checkbox" class="w-4 h-4 text-blue-600 bg-white border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                      <label for="checkbox-table-search-3" class="sr-only">checkbox</label>
                    </div>
                  </td>
                  <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    AirTag
                  </th>
                  <td class="px-6 py-4">
                    Silver
                  </td>
                  <td class="px-6 py-4">
                    Accessories
                  </td>
                  <td class="px-6 py-4">
                    Yes
                  </td>
                  <td class="px-6 py-4">
                    No
                  </td>
                  <td class="px-6 py-4">
                    $29
                  </td>
                  <td class="px-6 py-4">
                    53 g
                  </td>
                  <td class="flex items-center px-6 py-4">
                    <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                    <a href="#" class="font-medium text-red-600 dark:text-red-500 hover:underline ms-3">Remove</a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="w-1/4 h-full flex flex-col justify-center items-center">
          <div style={{ width: "90%", height: "97%" }} className="bg-white shadow-2xl flex flex-col justify-center items-center gap-3">
            <div style={{ width: "90%", height: "5%" }} className="rounded-md bg-gray-200 flex justify-center items-center gap-3">
              <input className="w-4/5 h-7 pl-5 rounded-md shadow-md text-sm" type="text" placeholder="Search..." />
              <img className="w-6 h-6" src="/images/search.png" />
            </div>
            <div style={{ width: "90%", height: "90%" }} className="rounded-md bg-gray-200 pt-48 overflow-y-scroll flex flex-col justify-center items-center gap-3">
              <div style={{ width: "96%" }} className="h-16 rounded-md bg-white shadow-md flex justify-center items-center" >
                <div style={{ height: "90%" }} className=" w-2/6 flex justify-center items-center">
                  <img className="w-14 h-14 rounded-full" src="/images/profile.png" />
                </div>
                <div style={{ height: "90%" }} className=" w-3/5 pl-4">
                  <div className="text-sm">
                    <span className=" font-bold">Name: </span>Kavin
                  </div>
                  <div className="text-sm">
                    <span className=" font-bold">Id: </span>CS512
                  </div>
                  <div className="text-sm text-green-600 font-semibold">
                    <span className=" font-bold text-black">Status: </span>ACTIVE
                  </div>
                </div>
              </div>
              <div style={{ width: "96%" }} className="rounded-md bg-white shadow-md flex justify-center items-center" >
                <div style={{ height: "90%" }} className=" w-2/6 flex justify-center items-center">
                  <img className="w-14 h-14 rounded-full" src="/images/profile.png" />
                </div>
                <div style={{ height: "90%" }} className=" w-3/5 pl-4">
                  <div className="text-sm">
                    <span className=" font-bold">Name: </span>Kavin
                  </div>
                  <div className="text-sm">
                    <span className=" font-bold">Id: </span>CS512
                  </div>
                  <div className="text-sm text-red-600 font-semibold">
                    <span className=" font-bold text-black">Status: </span>INACTIVE
                  </div>
                </div>
              </div>
              <div style={{ width: "96%" }} className="h-16 rounded-md bg-white shadow-md flex justify-center items-center" >
                <div style={{ height: "90%" }} className=" w-2/6 flex justify-center items-center">
                  <img className="w-14 h-14 rounded-full" src="/images/profile.png" />
                </div>
                <div style={{ height: "90%" }} className=" w-3/5 pl-4">
                  <div className="text-sm">
                    <span className=" font-bold">Name: </span>Kavin
                  </div>
                  <div className="text-sm">
                    <span className=" font-bold">Id: </span>CS512
                  </div>
                  <div className="text-sm text-green-600 font-semibold">
                    <span className=" font-bold text-black">Status: </span>ACTIVE
                  </div>
                </div>
              </div>
              <div style={{ width: "96%" }} className="h-16 rounded-md bg-white shadow-md flex justify-center items-center" >
                <div style={{ height: "90%" }} className=" w-2/6 flex justify-center items-center">
                  <img className="w-14 h-14 rounded-full" src="/images/profile.png" />
                </div>
                <div style={{ height: "90%" }} className=" w-3/5 pl-4">
                  <div className="text-sm">
                    <span className=" font-bold">Name: </span>Kavin
                  </div>
                  <div className="text-sm">
                    <span className=" font-bold">Id: </span>CS512
                  </div>
                  <div className="text-sm text-green-600 font-semibold">
                    <span className=" font-bold text-black">Status: </span>ACTIVE
                  </div>
                </div>
              </div>
              <div style={{ width: "96%" }} className="h-16 rounded-md bg-white shadow-md flex justify-center items-center" >
                <div style={{ height: "90%" }} className=" w-2/6 flex justify-center items-center">
                  <img className="w-14 h-14 rounded-full" src="/images/profile.png" />
                </div>
                <div style={{ height: "90%" }} className=" w-3/5 pl-4">
                  <div className="text-sm">
                    <span className=" font-bold">Name: </span>Kavin
                  </div>
                  <div className="text-sm">
                    <span className=" font-bold">Id: </span>CS512
                  </div>
                  <div className="text-sm text-red-600 font-semibold">
                    <span className=" font-bold text-black">Status: </span>INACTICE
                  </div>
                </div>
              </div>
              <div style={{ width: "96%" }} className="h-16 rounded-md bg-white shadow-md flex justify-center items-center" >
                <div style={{ height: "90%" }} className=" w-2/6 flex justify-center items-center">
                  <img className="w-14 h-14 rounded-full" src="/images/profile.png" />
                </div>
                <div style={{ height: "90%" }} className=" w-3/5 pl-4">
                  <div className="text-sm">
                    <span className=" font-bold">Name: </span>Kavin
                  </div>
                  <div className="text-sm">
                    <span className=" font-bold">Id: </span>CS512
                  </div>
                  <div className="text-sm text-green-600 font-semibold">
                    <span className=" font-bold text-black">Status: </span>ACTIVE
                  </div>
                </div>
              </div>
              <div style={{ width: "96%" }} className="h-16 rounded-md bg-white shadow-md flex justify-center items-center" >
                <div style={{ height: "90%" }} className=" w-2/6 flex justify-center items-center">
                  <img className="w-14 h-14 rounded-full" src="/images/profile.png" />
                </div>
                <div style={{ height: "90%" }} className=" w-3/5 pl-4">
                  <div className="text-sm">
                    <span className=" font-bold">Name: </span>Kavin
                  </div>
                  <div className="text-sm">
                    <span className=" font-bold">Id: </span>CS512
                  </div>
                  <div className="text-sm text-red-600 font-semibold">
                    <span className=" font-bold text-black">Status: </span>INACTICE
                  </div>
                </div>
              </div>
              <div style={{ width: "96%" }} className="h-16 rounded-md bg-white shadow-md flex justify-center items-center" >
                <div style={{ height: "90%" }} className=" w-2/6 flex justify-center items-center">
                  <img className="w-14 h-14 rounded-full" src="/images/profile.png" />
                </div>
                <div style={{ height: "90%" }} className=" w-3/5 pl-4">
                  <div className="text-sm">
                    <span className=" font-bold">Name: </span>Kavin
                  </div>
                  <div className="text-sm">
                    <span className=" font-bold">Id: </span>CS512
                  </div>
                  <div className="text-sm text-green-600 font-semibold">
                    <span className=" font-bold text-black">Status: </span>ACTIVE
                  </div>
                </div>
              </div>
              <div style={{ width: "96%" }} className="h-16 rounded-md bg-white shadow-md flex justify-center items-center" >
                <div style={{ height: "90%" }} className=" w-2/6 flex justify-center items-center">
                  <img className="w-14 h-14 rounded-full" src="/images/profile.png" />
                </div>
                <div style={{ height: "90%" }} className=" w-3/5 pl-4">
                  <div className="text-sm">
                    <span className=" font-bold">Name: </span>Kavin
                  </div>
                  <div className="text-sm">
                    <span className=" font-bold">Id: </span>CS512
                  </div>
                  <div className="text-sm text-green-600 font-semibold">
                    <span className=" font-bold text-black">Status: </span>ACTIVE
                  </div>
                </div>
              </div>

              <div style={{ width: "96%" }} className="h-16 rounded-md bg-white shadow-md flex justify-center items-center" >
                <div style={{ height: "90%" }} className=" w-2/6 flex justify-center items-center">
                  <img className="w-14 h-14 rounded-full" src="/images/profile.png" />
                </div>
                <div style={{ height: "90%" }} className=" w-3/5 pl-4">
                  <div className="text-sm">
                    <span className=" font-bold">Name: </span>Kavin
                  </div>
                  <div className="text-sm">
                    <span className=" font-bold">Id: </span>CS512
                  </div>
                  <div className="text-sm text-red-600 font-semibold">
                    <span className=" font-bold text-black">Status: </span>INACTICE
                  </div>
                </div>
              </div>
              <div style={{ width: "96%" }} className="h-16 rounded-md bg-white shadow-md flex justify-center items-center" >
                <div style={{ height: "90%" }} className=" w-2/6 flex justify-center items-center">
                  <img className="w-14 h-14 rounded-full" src="/images/profile.png" />
                </div>
                <div style={{ height: "90%" }} className=" w-3/5 pl-4">
                  <div className="text-sm">
                    <span className=" font-bold">Name: </span>Kavin
                  </div>
                  <div className="text-sm">
                    <span className=" font-bold">Id: </span>CS512
                  </div>
                  <div className="text-sm text-red-600 font-semibold">
                    <span className=" font-bold text-black">Status: </span>INACTICE
                  </div>
                </div>
              </div>
              <div style={{ width: "96%" }} className="h-16 rounded-md bg-white shadow-md flex justify-center items-center" >
                <div style={{ height: "90%" }} className=" w-2/6 flex justify-center items-center">
                  <img className="w-14 h-14 rounded-full" src="/images/profile.png" />
                </div>
                <div style={{ height: "90%" }} className=" w-3/5 pl-4">
                  <div className="text-sm">
                    <span className=" font-bold">Name: </span>Kavin
                  </div>
                  <div className="text-sm">
                    <span className=" font-bold">Id: </span>CS512
                  </div>
                  <div className="text-sm text-red-600 font-semibold">
                    <span className=" font-bold text-black">Status: </span>INACTICE
                  </div>
                </div>
              </div>
              <div style={{ width: "96%" }} className="h-16 rounded-md bg-white shadow-md flex justify-center items-center" >
                <div style={{ height: "90%" }} className=" w-2/6 flex justify-center items-center">
                  <img className="w-14 h-14 rounded-full" src="/images/profile.png" />
                </div>
                <div style={{ height: "90%" }} className=" w-3/5 pl-4">
                  <div className="text-sm">
                    <span className=" font-bold">Name: </span>Kavin
                  </div>
                  <div className="text-sm">
                    <span className=" font-bold">Id: </span>CS512
                  </div>
                  <div className="text-sm text-red-600 font-semibold">
                    <span className=" font-bold text-black">Status: </span>INACTICE
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  );
}

export default Dashboard;

import React, { useState } from 'react'

function AddUser() {

  const [data, setData] = useState({});

  return (
   <>
       <div style={{height:"auto"}} className="flex w-full justify-center items-center  rounded-xl" >
      <div className="flex h-full justify-center items-center flex-col w-full bg-white p-10 rounded-xl" >
        <div style={{ height: "80%",width:"80%" }}
          className="animate1 overflow-x-auto overflow-y-auto flex flex-col items-center justify-center border-gray-700 rounded-lg"
        >
          <div class="py-1 flex pb-2">
            <span class="px-1 text-black font-medium text-2xl whitespace-nowrap">
              Faculty Details
            </span>
          </div>
          <form className="flex gap-10 justify-center items-center flex-wrap" >
            <div className="py-1 flex gap-10 flex-wrap">
              <div className="mt-8">
                <span className="text-lg pb-1 text-gray-600 ">Faculty Id</span>
                <input
                  type="text"
                  name="fac_id"
                  onChange={(e) =>
                    setData({ ...data, [e.target.name]: e.target.value })
                  }
                  className="text-md block px-3 py-2 rounded-lg W-52 sm:w-96 border-b-0
                bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none"
                  required
                  autoComplete="off"
                />
              </div>
              <div className="mt-8">
                <span className="text-lg pb-1 text-gray-600 ">Name</span>
                <input
                  name="name"
                  onChange={(e) =>
                    setData({ ...data, [e.target.name]: e.target.value })
                  }
                  className="text-md block px-3 py-2 rounded-lg W-52 sm:w-96
                bg-white border-2 border-gray-300 placeholder-gray-600 h-10 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none"
                  required
                  autoComplete="off"
                />
              </div>
            </div>
            <div className="mt-8">
              <span class="px-1 text-lg text-gray-600">Department</span>

              <select
                name="itemsubname"
                onChange={(e) =>
                  setData({ ...data, [e.target.name]: e.target.value })
                }
                className="text-md block px-3 py-2 rounded-lg W-52 sm:w-96
                bg-white border-2 border-gray-300 placeholder-gray-600 h-10 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none"
                required
                autoComplete="off"
              >
                <option value="" selected>
                  Select Units
                </option>
                <option value="" >
                  CSE
                </option>
                <option value="" >
                  IT
                </option>
                <option value="" >
                  AIDS
                </option>
                <option value="" >
                  AIML
                </option>
              </select>
            </div>
            <div class="mt-8">
              <span class="text-lg pb-1 text-gray-600 ">Mail</span>
              <input
                type="text"
                name="mail"
                onChange={(e) =>
                  setData({ ...data, [e.target.name]: e.target.value })
                }
                className="text-md block px-3 py-2 rounded-lg W-52 sm:w-96 text-gray-500
                bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none"
                required
                
              />
            </div>
            <div class="mt-8">
              <span class="px-1 text-lg text-gray-600">DOB</span>
              <input
                type="date"
                name="dob"
                onChange={(e) =>
                  setData({ ...data, [e.target.name]: e.target.value })
                }
                className="text-md block px-3 py-2 rounded-lg W-52 sm:w-96 text-gray-500
                bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none"
                required
                
              />
            </div>
            <div class="mt-8">
              <span class="px-1 text-lg text-gray-600">DOJ</span>
              <input
                type="date"
                name="doj"
                className="text-md block px-3 py-2 rounded-lg W-52 sm:w-96 text-gray-500
                bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none"
                required
              />
            </div>
            <div class="mt-8">
              <span class="px-1 text-lg text-gray-600">Phone no.</span>
              <input
                type="number"
                name="number"
                onChange={(e) =>
                  setData({ ...data, [e.target.name]: e.target.value })
                }
                 className=" appearance-none text-md block px-3 py-2 rounded-lg W-52 sm:w-96 text-gray-500
                bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none"
                required
              />
            </div>
            <div class="mt-8">
              <span class="px-1 text-lg text-gray-600">Designation</span>
              <input
                type="text"
                name="designation"
                onChange={(e) =>
                  setData({ ...data, [e.target.name]: e.target.value })
                }
                className="text-md block px-3 py-2 rounded-lg W-52 sm:w-96 text-gray-500
                bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none"
                required
              />
            </div>
            <div class="mt-8">
              <span class="px-1 text-lg text-gray-600">Blood Group</span>
              <input
                type="text"
                name="bgroup"
                onChange={(e) =>
                  setData({ ...data, [e.target.name]: e.target.value })
                }
                required
                className="text-md block px-3 py-2 rounded-lg W-52 sm:w-96 
                bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none"
              />
            </div>
            <div class="mt-8">
              <span class="px-1 text-lg text-gray-600">Personal Email</span>
              <input
                type="text"
                name="pemail"
                onChange={(e) =>
                  setData({ ...data, [e.target.name]: e.target.value })
                }
                required
                className="text-md block px-3 py-2 rounded-lg W-52 sm:w-96
                bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none"
              />
            </div>
          
            <div class="mt-8">
              <span class="px-1 text-lg text-gray-600">Status</span>
              <select
                type="text"
                name="status"
                onChange={(e) =>
                  setData({ ...data, [e.target.name]: e.target.value })
                }
                required
                className="text-md block px-3 py-2 rounded-lg W-52 sm:w-96
                bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none"
              >
                <option selected>Select any</option>
                  <option>
                    Active
                  </option>
                  <option>
                    Inactive
                  </option>
                </select>
            </div>
            <div class="mt-8">
              <span class="px-1 text-lg text-gray-600">Address</span>
              <textarea
                type="text"
                name="address"
                onChange={(e) =>
                  setData({ ...data, [e.target.name]: e.target.value })
                }
                required
                className="text-md block px-3 py-2 rounded-lg W-52 sm:w-96
                bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none"
              />
            </div>
          </form>
          <center>
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-10 rounded mb-10 mt-10" >
                Submit
              </button>
            </center>
        </div>
      </div>
    </div>


   </>

  )
}

export default AddUser
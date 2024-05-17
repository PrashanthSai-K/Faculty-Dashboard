import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

function TopBar({ navBar, data, page }) {

  if (!navBar) {
    return null
  }

  // const navigate = useNavigate();

  return (
    <>
      <div className=' pl-64 w-full h-16 p-1 fixed z-10'>
        <div className='flex items-center justify-between h-full w-full bg-white p-2 rounded-xl shadow-xl'>
          <div className=' font-semibold text-xl'>{page}</div>
          <div className='flex justify-end items-center gap-3 pr-3'>
            {data && <div>{data.name}</div>}
            <Link to={"/userprofile"}>{data && <img src={`${data.picture}`} className='w-10 rounded-full' />}</Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default TopBar
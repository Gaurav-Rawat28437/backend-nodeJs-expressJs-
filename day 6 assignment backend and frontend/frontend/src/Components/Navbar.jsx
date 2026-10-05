import React from 'react'
import { Link } from 'react-router-dom'
function Navbar() {
  return (
    <nav className='w-full h-[10vh] bg-gray-900 text-white flex justify-between items-center px-10'>
        <h3 className='font-bold text-[20px]'>UserManager</h3>

        <div className='flex gap-5'>
            <Link to={"/user"}>USER</Link>
            <Link to={"/add"}>ADD</Link>
        </div>
    </nav>
  )
}

export default Navbar

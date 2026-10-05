import React from 'react'
import { Link } from 'react-router-dom'
function Navbar() {
  return (
    <nav className="w-full h-[10vh] flex justify-between items-center px-10 bg-gray-900 text-white" >
        <h3>TODO</h3>
        <div className='flex gap-5'>
            <Link to={"/home"}>Home</Link>
            <Link to={"/add"}>ADD Task</Link>
        </div>
    </nav>
  )
}

export default Navbar

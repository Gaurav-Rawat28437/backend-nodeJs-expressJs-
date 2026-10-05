import React from 'react'
import { Link } from 'react-router-dom'
import Home from '../Pages/Home'

function Navbar() {
  return (
    <nav className="w-full h-[10vh] bg-blue-400 flex justify-between items-center px-10">
        <h1 className='font-bold text-[24px]'>TODO</h1>

        <div className='flex gap-5 font-semibold'>
            <Link to={"/home"}>Home</Link>
            <Link to={"/add"}>Add</Link>
        </div>
    </nav>
  )
}

export default Navbar

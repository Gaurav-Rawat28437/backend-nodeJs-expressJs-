import React from 'react'
import Navbar from './Components/Navbar'
import { Route, Routes } from 'react-router-dom'
import User from './Components/User'
import Add from './Components/Add'
import {Toaster} from "react-hot-toast"
import Edit from './Components/Edit'

function App() {
  return (
    <div>
      <Navbar/>
      <Toaster/>

      <Routes>
        <Route path='/' element={<User />}></Route>
        <Route path='/user' element={<User />}></Route>
        <Route path='/add' element={<Add />}></Route>
        <Route path='/edit/:id' element={<Edit />}></Route>
      </Routes>
    </div>
  )
}

export default App

import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import Add from './Components/Add'
import {Toaster} from "react-hot-toast"

function App() {
  return (
    <div>
      <Navbar/>
      <Toaster/>

      <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/home' element={<Home/>}></Route>
          <Route path='/add' element={<Add/>}></Route>
      </Routes>
    </div>
  )
}

export default App

import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Add from './Pages/Add'
import Edit from './Pages/Edit'

function App() {
  return (<>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/home' element={<Home/>}></Route>
          <Route path='/add' element={<Add/>}></Route>
          <Route path='/edit/:id' element={<Edit/>}></Route>
        </Routes>
  </>
  )
}

export default App

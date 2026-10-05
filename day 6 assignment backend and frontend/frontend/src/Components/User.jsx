import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import Cards from './Cards'

function User() {

  const [Userdata,setUserData]=useState([])

  useEffect(()=>{
    try{
      fetch(import.meta.env.VITE_BE_URL+"/users")
      .then(res=>{

        if (!res.ok) {
          throw new Error("Failed to fetch")
        }
        return res.json()
      })
      .then(data=>{
        console.log(data)
        setUserData(data)
      })
    }
    catch(error)
    {
      console.log(error.message)
    }
  },[])

  const deleteUser = async (id) => {
  await fetch(`${import.meta.env.VITE_BE_URL}/users/${id}`, {
    method: "DELETE",
  })

  setUserData((prev) => prev.filter((user) => user.id !== id))
}
  return (
    <main className='w-full h-fit flex flex-col gap-5 items-center py-1 bg-linear-to-br from-blue-100 to-purple-200'>

      <h3 className='font-bold text-2xl'>USERS</h3>

      <div className='w-full h-fit grid grid-cols-3 grid-flow-row gap-10 justify-center place-items-center'>
          {Userdata.length>0 && Userdata.map((item)=>{
            return (
              <Cards key={item.id} id={item.id} name={item.name} email={item.email} age={item.age} city={item.city} onDelete={deleteUser}/>
            )
          })}
      </div>

    </main>
  )
}

export default User

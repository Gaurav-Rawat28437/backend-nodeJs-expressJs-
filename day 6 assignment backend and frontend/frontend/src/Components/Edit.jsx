import React, { useEffect, useState } from 'react'
import Navbar from "./Navbar"
import { useNavigate, useParams } from 'react-router-dom'
import toast from 'react-hot-toast'

function Edit() {
    
const {id}=useParams()

    const [name,setname]=useState("")
  
  const [age,setage]=useState("")
  
  const [email,setemail]=useState("")

  const [city,setcity]=useState("")

  const nav=useNavigate()

  useEffect(()=>{
    fetch(import.meta.env.VITE_BE_URL+`/users/${id}`)
    .then(data=>data.json())
    .then(data=>{
        console.log(data)
        setname(data.name)
        setage(data.age)
        setcity(data.city)
        setemail(data.email)
    })
    .catch(error=>{
        console.log(error)
    })
  },[id])

  return (
    <main className='min-h-screen flex items-center justify-center bg-linear-to-br from-blue-100 to-purple-200 p-4'>

      <form className='w-full max-w-md bg-white rounded-3xl shadow-2xl p-8 flex flex-col gap-5'>

        <h1 className='text-3xl font-bold text-center text-blue-700'>
          Add User
        </h1>

        <div className='flex flex-col gap-2'>

          <label htmlFor="name" className='font-semibold text-gray-700'>
            Name
          </label>

          <input
            onChange={(e)=>{
              setname(e.target.value)
            }}
            value={name}
            type="text"
            id="name"
            placeholder='Enter full name'
            className='border border-gray-300 rounded-xl px-4 py-3 outline-none focus:border-blue-500'
          />

        </div>

        <div className='flex flex-col gap-2'>

          <label htmlFor="age" className='font-semibold text-gray-700'>
            Age
          </label>

          <input
            onChange={(e)=>{
              setage(e.target.value)
            }}
            value={age}
            type="number"
            id="age"
            placeholder='Enter age'
            className='border border-gray-300 rounded-xl px-4 py-3 outline-none focus:border-blue-500'
          />

        </div>

        <div className='flex flex-col gap-2'>

          <label htmlFor="email" className='font-semibold text-gray-700'>
            Email
          </label>

          <input
            onChange={(e)=>{
              setemail(e.target.value)
            }}
            value={email}
            type="text"
            id="email"
            placeholder='Enter email'
            className='border border-gray-300 rounded-xl px-4 py-3 outline-none focus:border-blue-500'
          />

        </div>

        <div className='flex flex-col gap-2'>

          <label htmlFor="city" className='font-semibold text-gray-700'>
            City
          </label>

          <input
            onChange={(e)=>{
              setcity(e.target.value)
            }}
            value={city}
            type="text"
            id="city"
            placeholder='Enter city'
            className='border border-gray-300 rounded-xl px-4 py-3 outline-none focus:border-blue-500'
          />

        </div>

        <button 

          onClick={(e)=>{
            e.preventDefault()
            if(!name || !age || !email || !city)
            {
              toast.error("fill all the fields")

            }
            else{
               fetch(import.meta.env.VITE_BE_URL+`/users/${id}`,{
              method:"PUT",
              headers:{
                "Content-type":"application/json"
              },
              body:JSON.stringify({
                name:name,
                age:age,
                city:city,
                email:email
              })
              })
              .then(res=>res.json())
              .then(data=>{
                toast.success("User successfully updated")
                nav("/user")
              })
              
            }
           

          }}
        
          className='bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-xl font-semibold duration-300'>
          confirm
        </button>

      </form>

    </main>
  )
}

export default Edit

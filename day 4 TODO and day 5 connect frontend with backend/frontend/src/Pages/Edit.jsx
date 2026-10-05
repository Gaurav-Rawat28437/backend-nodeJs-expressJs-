import React, { useEffect, useRef, useState } from 'react'
import Navbar from '../Components/Navbar'
import { Navigate, useNavigate, useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'

function Edit() {
  const {id}=useParams()
  
  const todo = useSelector((store) =>
  store?.todo?.data?.find((item) => item.id === id)
)
const [title, setTitle] = useState("")
const [desc, setDesc] = useState("")

useEffect(() => {
  if (todo) {
    setTitle(todo.title);
    setDesc(todo.desc);
  }
}, [todo])

const navigate = useNavigate()

const submitHandle = async () => {
  const res=await fetch(`${import.meta.env.VITE_BACKEND}/todo/${id}`,{
    method:"PATCH",
    headers:{
      "Content-Type":"application/json"
    },
    body:JSON.stringify({
      title,desc
    })
  })

  const data=await res.json()
  navigate("/home")
}

const titleRef = useRef(null)
  return (
    <div>
      <Navbar/>
      <div className=" max-w-xl bg-white rounded-2xl shadow-xl p-8">

          <h1 className="text-3xl font-bold text-center text-slate-800 mb-8">
            edit Todo
          </h1>

          <div className="mb-6">
            <label
              htmlFor="title"
              className="block mb-2 text-sm font-semibold text-slate-700"
            >
              Title
            </label>

            <input
              ref={titleRef}
              id="title"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter todo title"
              className="w-full border border-slate-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
            />
          </div>

          <div className="mb-8">
            <label
              htmlFor="Desc"
              className="block mb-2 text-sm font-semibold text-slate-700"
            >
              Description
            </label>

            <textarea
              id="Desc"
              rows="5"
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
              placeholder="Write your description..."
              className="w-full border border-slate-300 rounded-lg px-4 py-3 resize-none outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
            ></textarea>
          </div>

          <button
            onClick={()=>{
              submitHandle()
            }}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition duration-300"
          >
            confirm
          </button>

        </div>
    </div>
  )
}

export default Edit

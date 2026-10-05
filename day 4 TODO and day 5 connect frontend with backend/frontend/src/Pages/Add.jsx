import React, { useEffect, useRef, useState } from "react"
import Navbar from "../Components/Navbar"

function Add() {
  const [title, setTitle] = useState("")
  const [desc, setDesc] = useState("")
  const titleRef = useRef(null)
  useEffect(() => {
  titleRef.current.focus()
}, [])
  
const submitHandle = async () => {
  try {
    
    const res = await fetch(`${import.meta.env.VITE_BACKEND}/todo`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
        desc,
      }),
    })

    const data = await res.json()

    console.log(data)

    setTitle("")
    setDesc("")
    titleRef.current.focus()

  } catch (error) {
    console.error(error)
  }
}
  return (
    <div className="min-h-screen bg-slate-100">
      <Navbar />

      <section className="flex justify-center items-center py-16 px-4">
        <div className=" max-w-xl bg-white rounded-2xl shadow-xl p-8">

          <h1 className="text-3xl font-bold text-center text-slate-800 mb-8">
            Add New Todo
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
            Add Todo
          </button>

        </div>
      </section>
    </div>
  )
}

export default Add
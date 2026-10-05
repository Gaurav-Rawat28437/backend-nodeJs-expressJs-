import React, { useState } from 'react'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'

function Add() {
  const [title, setTitle] = useState("")
  const [desc, setDesc] = useState("")
  const nav = useNavigate()

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      
      <div className="w-[400px] bg-white p-8 rounded-xl shadow-lg">
        
        <h1 className="text-3xl font-bold text-center mb-6">
          ADD TASK
        </h1>

        <div className="mb-4">
          <label htmlFor="title" className="block mb-2 font-semibold">
            Title
          </label>

          <input
            onChange={(e) => {
              setTitle(e.target.value)
            }}
            value={title}
            type="text"
            id="title"
            className="w-full border border-gray-300 p-3 rounded-lg outline-none focus:ring-2 focus:ring-black"
          />
        </div>

        <div className="mb-6">
          <label htmlFor="desc" className="block mb-2 font-semibold">
            Description
          </label>

          <textarea
            onChange={(e) => {
              setDesc(e.target.value)
            }}
            value={desc}
            id="desc"
            rows="5"
            className="w-full border border-gray-300 p-3 rounded-lg outline-none resize-none focus:ring-2 focus:ring-black"
          ></textarea>
        </div>

        <button
          onClick={() => {

            if (!title || !desc) {
              toast.error("enter all the fields...")
              return
            }

            fetch(import.meta.env.VITE_BE_URL + "/todos", {
              method: "POST",
              headers: {
                "content-type": "application/json"
              },
              body: JSON.stringify({ title, desc })
            })
              .then(res => res.json())
              .then((data) => {
                nav("/home")
              })

          }}
          className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition"
        >
          Add Task
        </button>

      </div>
    </div>
  )
}

export default Add
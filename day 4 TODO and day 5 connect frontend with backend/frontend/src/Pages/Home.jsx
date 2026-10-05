import React, { useEffect, useState } from "react"
import Navbar from "../Components/Navbar"
import { useDispatch, useSelector } from "react-redux"
import { todothunk } from "../utils/todoSlice"
import { useNavigate} from "react-router-dom"

function Home() {
  
  const data=useSelector((store) => store.todo.data) || []
  const dispatch = useDispatch()
  const nav=useNavigate()

  useEffect(() => {
    dispatch(todothunk())
  },[dispatch] )

  const deleteHandle=async(id)=>{
    const res=await fetch(`${import.meta.env.VITE_BACKEND}/todo/${id}`,{
      method:"DELETE",
      headers:{
        "Content-Type":"application/json"
      }
    })

    const data=await res.json()
    dispatch(todothunk())

  }

  return (
    <div className="min-h-screen bg-slate-100">
      <Navbar />

      <section className="max-w-6xl mx-auto px-5 py-10">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold text-slate-800">
            Todo List
          </h1>

          <p className="text-slate-600 font-medium">
            Total Todos: {data.length}
          </p>
        </div>

        {data.length === 0 ? (
          <div className="bg-white rounded-xl shadow-md p-10 text-center">
            <h2 className="text-2xl font-semibold text-slate-700">
              No Todos Found
            </h2>

            <p className="text-slate-500 mt-2">
              Add your first todo to get started.
            </p>
          </div>
        ) : (
          <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-6 border border-slate-200"
              >
                <h2 className="text-2xl font-bold text-slate-800 mb-3">
                  {item.title}
                </h2>

                <p className="text-slate-600 mb-6">
                  {item.desc}
                </p>

                <div className="flex gap-3">
                  <button
                    onClick={()=>{
                      nav(`/edit/${item.id}`)
                    }}
                    className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-semibold transition"
                  >
                    Edit
                  </button>

                  <button
                    onClick={()=>{
                      deleteHandle(item.id)
                    }}
                    className="flex-1 bg-red-600 hover:bg-red-700 text-white py-2 rounded-lg font-semibold transition"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </main>
        )}
      </section>
    </div>
  )
}

export default Home
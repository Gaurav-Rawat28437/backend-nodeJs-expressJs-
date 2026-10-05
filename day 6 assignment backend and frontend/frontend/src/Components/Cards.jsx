import React from 'react'
import { useNavigate } from 'react-router-dom'

function Cards({id, name, email, age, city,onDelete }) {
  const nav=useNavigate()
  return (

    <article className='w-72 bg-white rounded-2xl shadow-lg p-5 border border-gray-200 hover:scale-105 duration-300'>

      <div className='flex flex-col gap-3'>

        <h2 className='text-2xl font-bold text-blue-700'>
          {name}
        </h2>

        <p className='text-gray-700'>
          <span className='font-semibold text-black'>
            Email :
          </span> {email}
        </p>

        <p className='text-gray-700'>
          <span className='font-semibold text-black'>
            Age :
          </span> {age}
        </p>

        <p className='text-gray-700'>
          <span className='font-semibold text-black'>
            City :
          </span> {city}
        </p>

        <div className='flex gap-4 mt-4'>

          <button
            onClick={()=>{
              nav(`/edit/${id}`)
            }}
           className='flex-1 bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg font-semibold duration-300'>
            Edit
          </button>

          <button
            onClick={()=>{
              onDelete(id)
            }}
            className='flex-1 bg-red-500 hover:bg-red-600 text-white py-2 rounded-lg font-semibold duration-300'>
            Delete
          </button>

        </div>

      </div>

    </article>

  )
}

export default Cards
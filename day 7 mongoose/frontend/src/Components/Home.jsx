import React, { useEffect, useState } from 'react'

function Home() {
  const [data, setdata] = useState([])

  console.log(data)
  useEffect(() => {
    fetch(import.meta.env.VITE_BE_URL + "/todos")
      .then(res => res.json())
      .then(data => {
        setdata(data)
      })
  }, [])
  return (
    <div className="min-h-screen bg-gray-100 p-6">

      <h1 className="text-3xl font-bold text-center mb-8">
        All Tasks
      </h1>

      <div className="flex flex-wrap gap-6 justify-center">

        {data.length > 0 && data.map((item) => {

          return (
            <article
              key={item._id}
              className="w-72 bg-white p-5 rounded-xl shadow-md border border-gray-200"
            >
              <div>

                <h3 className="text-xl font-semibold mb-3">
                  {item.title}
                </h3>

                <p className="text-gray-600">
                  {item.desc}
                </p>

                <div>
                  <input
                    checked={item.isCompleted}
                    onChange={(e) => {
                      const checked = e.target.checked
                      fetch(`${import.meta.env.VITE_BE_URL}/todos/isCompleted/${item._id}/?isCompleted=${checked}`, {
                        method: "PATCH",
                        headers: {
                          "content-type": "application/json"
                        }
                      })
                        .then(res => res.json())
                        .then(data => {
                          console.log(data)
                          setdata((prev) =>
                            prev.map((todo) =>
                              todo._id === item._id
                                ? { ...todo, isCompleted: checked }
                                : todo
                            )
                          )
                        })


                    }}
                    type="checkbox"
                  />

                  {item.isCompleted && <p>&#x2705;</p>}
                </div>
              </div>

            </article>
          )
        })}

      </div>
    </div>
  )
}

export default Home

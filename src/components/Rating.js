import React from 'react'

function Rating({ data }) {
  return (
    <div>{
      data.map((item) => (
        <div>
          <span><h3>{item.name}</h3> {item.date}</span>
          <p>{item.comments}</p>
        </div>
      ))
    }
    </div>
  )
}

export default Rating
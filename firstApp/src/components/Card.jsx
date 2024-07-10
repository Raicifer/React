import React from 'react'
import "./Card.css"
const Card = (props) => {
  return (
    <div className='Card' style={{overflow:'hidden'}}>
      <img src="https://cdn.dribbble.com/userupload/2776051/file/original-82ea293f8b4756252794e467b818de49.jpg?resize=400x0" alt="" width={400} />
      <h1>{props.title}</h1>
      <p>{props.description}</p>
      
    </div>
  )
}

export default Card

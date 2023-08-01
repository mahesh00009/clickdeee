


import React, { useState } from 'react'
import './Clickdee.css'

const Card = ({title, icon, index, subtitle}) => {

    const [hovered, setHovered] = useState(false)

  return (
    <div onMouseEnter = {() => setHovered(true)} onMouseLeave = {() => setHovered(false)}className={index % 2 === 0 ? "cards gray" : "cards"}>
        <img className='icons' src={icon}></img>
        <p className='title'>{title}</p>
       {hovered && <p className='subtitle'>{subtitle}</p> }

    </div>
  )
}

export default Card
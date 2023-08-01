


import React, { useState } from 'react'
import './Clickdee.css'

const Card = ({title, icon, index, subtitle}) => {

    const [hovered, setHovered] = useState(false)
    const hoverHandler = () => {
        setHovered(true)
    }
  return (
    <div onMouseEnter = {() => setHovered(true)} onMouseLeave = {() => setHovered(false)}className={index % 2 === 0 ? "cards gray" : "cards"}>
        <p>{icon}</p>
        <h1>{title}</h1>
        {hovered && <p style={{transition: "0.5s ease"}}>{subtitle}</p>}


    </div>
  )
}

export default Card
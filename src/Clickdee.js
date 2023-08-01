



import React from 'react'
import { ClickdeeInfo } from './ClickdeeInfo'
import "./Clickdee.css"
import Card from './Card'

const Clickdee = () => {
  return (
    <div className='mainContainer'>
    <div className='mainTitle'>
        <h1>Why The Industry Chooses Clickdee?</h1>
        <p>We understand performance marketing from every angle and every stage of the funnel. Our clients trust that we know what metrics move their business towards growth. Our publisher and affiliate partners know that we make maximum revenue and ROAS a main focus when growing our partnerships.</p>

    </div>

    

        {
            ClickdeeInfo.map((elem, index) => {
                return <Card index = {index} title = {elem.title} icon = {elem.icon} subtitle = {elem.subtitle}/>

            })
        }




    </div>
  )
}

export default Clickdee
import React from 'react'
import './main.css'
import Body from './Body'
import peasant from './Images/peasant.png'
function Main() {
  return (
    <div className='main'>
        <div className='head'><div><img alt="" src={peasant}/></div><div>Agriculture Farm Stick</div></div>
        <Body/>
    </div>
  )
}

export default Main
import React from 'react'
import "./404.css"
function NotFound () {
  return (
  <div>
    <div data-t = "404" className = "hhh">404</div>
    <div className = "text">每天开心笑 累了就睡觉</div>
    <div className = "sleep">
      <img src={require('../../images/sleep.jpg')} alt="Sleepy Cat" ></img>
    </div>
  </div>
  )
}
 
 export default NotFound;
import React from 'react'

export default function Button() {
    function handleClick(){
        alert("yoiu clicked")
    }
    function handleLOg(){
        console.log("am loged")
    }
    
  return (
    <div>
      <button className='bg-red-400'  onClick={handleClick} >  click me</button>
      <button className='bg-blue-400' onClick={handleLOg}>  log me to console</button>
    </div>
  )
}

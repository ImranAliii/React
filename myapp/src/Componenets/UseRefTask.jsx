import React, { useRef, useState } from 'react'
import './UseRefTask.css'

const UseRefTask = () => {
  const refElement = useRef("");
  const[name, setName] = useState("Imran khan")
  console.log(refElement)
  function Reset(){
    setName("")
    refElement.current.focus()
  }
  function handleinput(){
    refElement.current.style.color="white";
    refElement.current.style.background="black"
  }
  return (
    <div className='container'>

   <h1>Learning UseRef</h1>
   <input ref={refElement}type='text' value={name}onChange={(e)=>setName(e.target.value)}></input>

   <button onClick={Reset}>Reset</button>
   <button onClick={handleinput}>handle input</button>

   </div>


  
  )
}

export default UseRefTask
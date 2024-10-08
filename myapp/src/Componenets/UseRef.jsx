import React, { useRef } from 'react'

const UseRef = () => {
  let username = useRef(null);
  let email = useRef(null);
  let handleSubmit=(e)=>{
    e.preventDefault();//prevent reload
     console.log(username.current.value)
     console.log(email.current.value)
  }

  return (
    <>
  <div className="container">
    <form onSubmit={handleSubmit}>
 <input type='text' id="username" ref={username}/>
 <input type='email' id="username" ref={email}/>
 <button>Submit</button>

    </form>

  </div>


    </>
  )
}

export default UseRef
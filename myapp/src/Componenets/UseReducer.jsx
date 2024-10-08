import React, { useReducer } from 'react'

const UseReducer = () => {
    let render=(state,action)=>{
        if(action.type == "Increment"){
            return state + 1;
        }

        if(action.type == "Decrement"){
            return state - 1;
        }

    };
    const[count,dispatch] = useReducer(render,0);
  return (
    <>
        

      <div>
       <h1>{count}</h1>
       <button onClick={()=>dispatch({type:"Increment"})}>Increment</button>
       <button onClick={()=>dispatch({type:"Decrement"})}>Decrement</button>
      </div>

        </>
  )
}

export default UseReducer
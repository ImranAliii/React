import React from 'react'
import dataFetch from '../api/data.json'

const FetchData = () => {
  return (
    <>

  <div>
    {
    dataFetch.map((e)=>{
        return(

            <div>
            <h6>{e.title}</h6>
            <h6>{e.url}</h6>
            <p>{e.thumbnailUrl}</p>

            </div>

        )
            
        
            
        
    })}
  </div>


    </>
  )
}

export default FetchData
import React, { useContext, useEffect } from "react"
import { Context } from "./Context.jsx"

const Quest=({quest,viewQuest})=>{
  const { allowMove }=useContext(Context)
  useEffect(()=>{
    allowMove()
  },[])
  return(
    <div style={{display: "absolute"}}>
      <div style={{
        backgroundColor: '#352f2f',
        color: 'white',
        padding: '20px',
        borderRadius: '10px',
        boxShadow: '2px 2px 10px rgba(0, 0, 0, 0.3)',
        width: '400px',
        height: '200px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <h2 style={{textAlign: 'center'}}>Quest</h2>
        <p>{quest}</p>
        <div style={{display: "inline-block"}}>
          <button style={{
            backgroundColor: 'darkorange',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            padding: '10px',
            cursor: 'pointer'
            }}
            onClick={()=>{allowMove();viewQuest()}}>Accept</button>
          <button style={{
            backgroundColor: 'darkorange',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            padding: '10px',
            cursor: 'pointer',
            marginLeft: "10px"
            }}
          onClick={()=>{allowMove();viewQuest()}}>Decline</button>
        </div>
      </div>
    </div>
    
  )
}

export default Quest
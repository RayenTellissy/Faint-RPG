import React, { useContext, useEffect } from "react"
import { Context } from "./Context.jsx"

const Quest=({quest,viewQuest})=>{
  const { allowMove }=useContext(Context)
  useEffect(()=>{
    allowMove()
  },[])
  return(
    <div style={{display: "absolute"}}>
      <div id="quest-container">
        <h2 style={{textAlign: 'center'}}>Quest</h2>
        <p>{quest}</p>
        <div style={{display: "inline-block"}}>
          <button id="accept" onClick={()=>{allowMove();viewQuest()}}>Accept</button>
          <button id="decline" onClick={()=>{allowMove();viewQuest()}}>Decline</button>
        </div>
      </div>
    </div>
    
  )
}

export default Quest
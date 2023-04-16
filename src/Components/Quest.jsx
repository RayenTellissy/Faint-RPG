import React, { useContext, useEffect } from "react"
import { Context } from "./Context.jsx"

const Quest=({questTitle,quest,viewQuest})=>{
  const { allowMove }=useContext(Context)
  useEffect(()=>{
    allowMove()
  },[])
  return(
    <div id="quest-parent">
      <div id="quest-container">
        <h2 id="quest-title">{questTitle}</h2>
        <p id="quest-content">{quest}</p>
        <div style={{display: "inline-block"}}>
          <button id="accept" onClick={()=>{allowMove();viewQuest()}}>Accept</button>
          <button id="decline" onClick={()=>{allowMove();viewQuest()}}>Decline</button>
        </div>
      </div>
    </div>
    
  )
}

export default Quest
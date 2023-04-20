import React from "react"
import { useContext } from "react"
import { Context } from "./Context.jsx"

const Quests=()=>{
  const { quests, eliminated }=useContext(Context)

  return(
    <div className="quest-container">
      <h2 className="quest-container-title">Current Quests:</h2>
      {quests.map((quest, index) => (
        <div className="quest" key={index}>
          <h3 className="quest-title">{quest[0]}</h3>
          <div style={{display: "inline-block"}}>
            <p style={{display: "inline"}} className="quest-description">{quest[1]} </p>
            <p style={{display: "inline"}} className="quest-description"> {eliminated}/{quest[2]}</p>
          </div>
        </div>
      ))}
    </div>


  )
}

export default Quests
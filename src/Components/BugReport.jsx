import React, { useContext, useState } from "react"
import axios from "axios"
import { Context } from "./Context.jsx"

const url="https://faintrpgbugreport.onrender.com/bugs"


const BugReport=()=>{
  const { allowMove }=useContext(Context)
  const [content,setContent]=useState("")
  const [showReport,setShowReport]=useState(false)

  const sendReport=()=>{
    axios.post(url,{content: content})
  }

  const handleWindow=()=>{
    setShowReport(!showReport)
    allowMove()
  }

  const reportWindow=(
    <div style={{position: "absolute", transform: "translateX(500px) translateY(-600px)"}}>
        <h2>Report a Bug</h2>
        <textarea rows={3} cols={50}
          onChange={e=>setContent(e.target.value)}
          required
        />
        <button onClick={()=>{sendReport();handleWindow()}}>Submit</button>
      </div>
  )

  return(
    <div style={{position: "absolute", transform: "translateY(500px)"}}>
      <button id="bug" onClick={handleWindow}>Report a Bug</button>
      {showReport && reportWindow}
    </div>
  )
}


export default BugReport
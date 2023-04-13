import React, { useState } from "react"
import Character from "./Character.jsx"

const Display=()=>{
  const [map,setMap]= useState("../../images/Maps/stage1.png")
    return(
      <div id="canvas" style={{backgroundImage: `url(${map})`}}>
        <Character/>
        <img style={{height: "200px"}} src={"../../images/NPCs/Friendly_Xanafin.png"}></img>
      </div>
    )
}

export default Display
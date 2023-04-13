import React, { useState } from "react"
import Character from "./Character.jsx"
import stage1 from "../images/Maps/stage1.png"
import Friendly_Xanafin from "../images/NPCs/Friendly_Xanafin.png"

const Display=()=>{
  const [map,setMap]= useState(stage1)
    return(
      <div id="canvas" style={{backgroundImage: `url(${map})`}}>
        <Character/>
        <img style={{height: "200px"}} src={Friendly_Xanafin}></img>
      </div>
    )
}

export default Display
import React, { useState } from "react"
import Character from "./Character.jsx"

const Display=()=>{
  const [map,setMap]= useState("../../src/data/Maps/main/Map_First.png")
    return(
      <div id="canvas" style={{backgroundImage: `url(${map})`}}>
        <Character/>
        <img style={{height: "200px"}} src={"../../src/data/NPCs/Friendly_Xanafin.png"}></img>
      </div>
    )
}

export default Display
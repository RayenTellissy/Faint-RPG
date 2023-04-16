import React, { useContext, useState } from "react"
import { Context } from "./Context.jsx"

//position handler
import { transform } from "../Handlers/positionHandler.js"

/*          NPC IMPORTS                */
import NPCs from "../data/NPCs/NPC.js"

/*               MAP IMPORTS            */
import Stage0_Map from "../images/Maps/stage0.png"

/*               QUEST RELATED IMPORTS        */
import Quest_Conversation from "../images/Quest/Quest_Conversation.gif"
import Quest_Question from "../images/Quest/Quest_Question.gif"
import Quest from "./Quest.jsx"

const questInDistance=(fn,x,y,characterX,characterY)=>{
  if(characterX-x>140 && characterY-y>140){
    console.log("too far")
  }
  else{
    fn(true)
  }
  
}

const Stage0=()=>{
  const { characterX, characterY }=useContext(Context)
  const [showQuest,setShowQuest]=useState(false)
  
  const viewQuest=()=>{
    setShowQuest(!showQuest)
  }
  return (
    <div id="canvas" style={{backgroundImage: `url(${maps[0]})`}}>
      <img style={{height: "200px", cursor: "pointer", transform: transform(NPCs[0]["x"],NPCs[0]["y"])}} src={NPCs[0]["src"]} onClick={()=>questInDistance(setShowQuest,0,0,characterX,characterY)}></img>
      <img style={NPCs[0]["questIcon"]} src={Quest_Question}/>
      {showQuest && <Quest quest={NPCs[0]["quest"]} viewQuest={viewQuest}/>}
    </div>

  )
}
const maps=[Stage0_Map]
const mapComps=[<Stage0/>]

export const Map=()=>{
  const { stage, updateStage }=useContext(Context)
  return (
    mapComps[stage]
  )
}


import React, { useContext, useState } from "react"
import { Context } from "./Context.jsx"
import { maps } from "./Map.jsx"

//position handler
import { transform } from "../Handlers/positionHandler.js"

/*          NPC IMPORTS                */
import NPCs from "../data/NPCs/NPC.js"

/*               QUEST RELATED IMPORTS        */
import Quest_Conversation from "../images/Quest/Quest_Conversation.gif"
import Quest_Question from "../images/Quest/Quest_Question.gif"
import Quest from "./Quest.jsx"
import Character from "./Character.jsx"

const questInDistance=(NPCx,NPCy,characterX,characterY)=>{
    const left=NPCx-200
    const right=NPCx+200
    const top=NPCy-200
    const bottom=NPCy+200
    
    if(characterX>left && characterX<right && characterY>top && characterY<bottom){
      console.log("yo")
    }
}

const Stage0=()=>{
  const { characterX, characterY }=useContext(Context)
  const [showQuest,setShowQuest]=useState(false)
  var xanafinX=NPCs[0]["x"]
  var xanafinY=NPCs[0]["y"]
  
  const viewQuest=()=>{
    setShowQuest(!showQuest)
  }

  return (
    <div id="canvas" style={{backgroundImage: `url(${maps[0]})`}}>

      <Character/>

      <img style={{height: "200px", cursor: "pointer", transform: transform(xanafinX,xanafinY)}} src={NPCs[0]["src"]} onClick={questInDistance(xanafinX,xanafinY,characterX,characterY)}></img>
      <img style={NPCs[0]["questIcon"]} src={Quest_Question}/>
      {showQuest && <Quest quest={NPCs[0]["quest"]} viewQuest={viewQuest}/>}
    </div>
  )
}


export const mapComps=[<Stage0/>]
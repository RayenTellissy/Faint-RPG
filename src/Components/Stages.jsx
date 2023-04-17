import React, { useContext, useState } from "react"
import { Context } from "./Context.jsx"
import { maps } from "../data/maps.js"
import Character from "./Character.jsx"

/*        POSITION HANDLERS       */
import { transform,questInDistance } from "../Handlers/positionHandler.js"


/*          NPC IMPORTS                */
import NPCs from "../data/NPC.js"

/*               QUEST RELATED IMPORTS        */
import Quest_Conversation from "../images/Quest/Quest_Conversation.gif"
import Quest_Question from "../images/Quest/Quest_Question.gif"
import Quest from "./Quest.jsx"


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

      <img style={{height: "200px", cursor: "pointer", transform: transform(xanafinX,xanafinY)}} src={NPCs[0]["src"]} onClick={()=>questInDistance(setShowQuest,characterX,characterY,xanafinX,xanafinY)}></img>
      <img style={NPCs[0]["questIcon"]} src={Quest_Question}/>
      {showQuest && <Quest questTitle={NPCs[0]["questTitle"]} quest={NPCs[0]["quest"]} viewQuest={viewQuest}/>}
    </div>
  )
}


export const mapComps=[<Stage0/>]
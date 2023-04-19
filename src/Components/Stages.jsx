import React, { useContext, useState } from "react"
import { Context } from "./Context.jsx"
import { maps } from "../data/maps.js"
import Character from "./Character.jsx"

/*        POSITION HANDLERS       */
import { transform,questInDistance, questTransform } from "../Handlers/positionHandler.js"


/*          NPC IMPORTS                */
import NPCs from "../data/NPC.js"

/*               QUEST RELATED IMPORTS        */
import Quest_Conversation from "../images/Quest/Quest_Conversation.gif"
import Quest_Question from "../images/Quest/Quest_Question.gif"
import Quest from "./Quest.jsx"


const Stage0=()=>{
  const { characterX, characterY, addQuest }=useContext(Context)
  const [showQuest,setShowQuest]=useState(false)
  const [icon,setIcon]=("40px")
  var xanafinX=NPCs[0]["x"]
  var xanafinY=NPCs[0]["y"]
  
  const viewQuest=()=>{
    setShowQuest(!showQuest)
  }

  const removeIcon=()=>{
    setIcon("0px")
  }


  return (
    <div id="canvas" style={{backgroundImage: `url(${maps[0]})`}}>

      <Character/>

      <img style={{height: "200px", cursor: "pointer", transform: transform(xanafinX,xanafinY)}} src={NPCs[0]["src"]} onClick={()=>questInDistance(setShowQuest,characterX,characterY,xanafinX,xanafinY)}></img>
      <img style={{height: icon ,...NPCs[0].quest.questIcon}} src={Quest_Question}/>
      {showQuest && <Quest quest={NPCs[0]["quest"]} reward={NPCs[0]["reward"]} viewQuest={viewQuest} addQuest={addQuest} removeIcon={removeIcon}/>}
    </div>
  )
}


export const mapComps=[<Stage0/>]
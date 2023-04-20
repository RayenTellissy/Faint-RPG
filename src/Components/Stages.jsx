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
  const [icon,setIcon]=useState("40px")
  const [disabled,setDisabled]=useState(false)
  var xanafinX=NPCs[0]["x"]
  var xanafinY=NPCs[0]["y"]
  
  const viewQuest=(param)=>{
    if(param==="declined"){
      setShowQuest(!showQuest)
    }
    else if(param==="accepted"){
      setDisabled(true)
      setIcon("0px")
    }
  }


  return (
    <div id="canvas" style={{backgroundImage: `url(${maps[0]})`}}>

      <Character/>

      <img style={{height: "200px", cursor: "pointer", transform: transform(xanafinX,xanafinY)}} src={NPCs[0]["src"]} onClick={()=>questInDistance(setShowQuest,characterX,characterY,xanafinX,xanafinY)}></img>
      <img style={{height: icon ,...NPCs[0].quest.questIcon}} src={Quest_Question}/>
      {showQuest && !disabled && <Quest quest={NPCs[0]["quest"]} reward={NPCs[0]["reward"]} viewQuest={viewQuest} addQuest={addQuest}/>}
    </div>
  )
}


export const mapComps=[<Stage0/>]
import React, { useContext, useEffect, useState } from "react"
import { Context } from "./Context.jsx"
import { maps } from "../data/maps.js"
import Character from "./Character.jsx"

/*        POSITION HANDLERS       */
import { transform, questInDistance, triggerStage } from "../Handlers/positionHandler.js"


/*          NPC IMPORTS                */
import NPCs from "../data/NPC.js"

/*               QUEST RELATED IMPORTS        */
import Quest_Conversation from "../images/Quest/Quest_Conversation.gif"
import Quest_Question from "../images/Quest/Quest_Question.gif"
import indicatorImage from "../images/Quest/indicator.png"
import Quest from "./Quest.jsx"


const Stage0=()=>{
  const { stage, updateStage, characterX, characterY, addQuest }=useContext(Context)
  const [showQuest,setShowQuest]=useState(false)
  const [icon,setIcon]=useState("40px")
  const [disabled,setDisabled]=useState(false)
  const [indicator,setIndictor]=useState("0px")
  var xanafinX=NPCs[0]["x"]
  var xanafinY=NPCs[0]["y"]

  useEffect(()=>{
    if(triggerStage(characterX,characterY,775,808,490,750)){
      updateStage(1)
    }
  },[characterX,characterY])
  
  const viewQuest=(param)=>{
    if(param==="declined"){
      setShowQuest(!showQuest)
    }
    else if(param==="accepted"){
      setDisabled(true)
      setIcon("0px")
      setIndictor("80px")
    }
  }


  return (
    <div id="canvas" style={{backgroundImage: `url(${maps[0]})`}}>

      <Character/>

      <img style={{height: "200px", cursor: "pointer", transform: transform(xanafinX,xanafinY)}} src={NPCs[0]["src"]} onClick={()=>questInDistance(setShowQuest,characterX,characterY,xanafinX,xanafinY)}></img>
      <img style={{height: icon ,...NPCs[0].quest.questIcon}} src={Quest_Question}/>
      {showQuest && !disabled && <Quest quest={NPCs[0]["quest"]} reward={NPCs[0]["reward"]} viewQuest={viewQuest} addQuest={addQuest}/>}
      <img style={{position: "absolute", height: indicator, transform: "translateX(400px) translateY(780px)"}} src={indicatorImage}></img>
    </div>
  )
}










































export const mapComps=[<Stage0/>]
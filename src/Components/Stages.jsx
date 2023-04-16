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
    const left=x-width/2
    const right=x+width/2
    const top=y-height/2
    const bottom=y+height/2
    
    if(characterX>left && characterX<right && CharacterY>top && CharacterY<bottom){

    }
}

const onEnter=()=>{
  console.log("entered quest zone")
}

const onLeave=()=>{
  console.log("left quest zone")
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

      <img style={{height: "200px", cursor: "pointer", transform: transform(xanafinX,xanafinY)}} src={NPCs[0]["src"]}></img>
      <img style={NPCs[0]["questIcon"]} src={Quest_Question}/>
      {showQuest && <Quest quest={NPCs[0]["quest"]} viewQuest={viewQuest}/>}
    </div>
  )
}


export const mapComps=[<Stage0/>]
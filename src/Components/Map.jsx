import React, { useContext } from "react"
import { Context } from "./Context.jsx"

/*               NPC IMPORTS             */
import Friendly_Xanafin from "../images/NPCs/Friendly_Xanafin.png"

/*               MAP IMPORTS            */
import Stage1_Map from "../images/Maps/stage1.png"

/*               QUEST RELATED IMPORTS        */
import Quest_Conversation from "../images/Quest/Quest_Conversation.gif"
import Quest_Question from "../images/Quest/Quest_Question.gif"

const questInDistance=(x,y,characterX,characterY)=>{
  if(characterX-x>140 && characterY-y>140){
    console.log("too far")
  }
  else{
    console.log("quest in distance")
  }
  
}

const Stage1=()=>{
  const { characterX, characterY }=useContext(Context)
  const { stage, updateStage}=useContext(Context)
  return (
    <div id="canvas" style={{backgroundImage: `url(${maps[stage]})`}}>
      <img style={{height: "200px", cursor: "pointer", transform: "translateX(0px) translateY(0px)"}} src={Friendly_Xanafin} onClick={()=>questInDistance(0,0,characterX,characterY)}></img>
      <img style={{position: "absolute",height: "40px", transform: "translateX(-101px) translateY(27px)"}} src={Quest_Question}/>
    </div>
  )
}

const maps=[Stage1_Map]
const mapComps=[<Stage1/>]

export const Map=()=>{
  const { stage, updateStage }=useContext(Context)
  return (
    mapComps[stage]
  )
}


import React, { useContext, useEffect, useState } from "react";
import { Context } from "./Context.jsx";


const TriggerZone=({x,y,height,width,onEnter,onLeave})=>{
  const { characterX, CharacterY }=useContext(Context)
  const [isInside,setIsInside]=useState(false)

  useEffect(()=>{
    console.log("works")
    const left=x-width/2
    const right=x+width/2
    const top=y-height/2
    const bottom=y+height/2
    
    if(characterX>left && characterX<right && CharacterY>top && CharacterY<bottom){
      if(!isInside){
        setIsInside(true)
        onEnter()
      }
      else{
        setIsInside(false)
        onLeave()
      }
    }
  },[characterX,CharacterY])
  return (
    <div style={{ position: "fixed", left: `${x}px`, top: `${y}px`, width: `${width}px`, height: `${height}px`, opacity: 0 }}></div>
  )
}

export default TriggerZone
import React, { createContext, useState } from "react"

export const Context=createContext()

export const ContextProvider=({children})=>{
  const [stage, setStage] = useState(0)
  const [characterX, setCharacterX] = useState(520)
  const [characterY, setCharacterY] = useState(370)
  const [moveAllowed,setMoveAllowed] = useState(true)
  const [quests,setQuests] = useState([])
  
  const allowMove=()=>{
    setMoveAllowed(!moveAllowed)
  }

  const updateStage=(n)=>{
    setStage(n)
  }

  const updateCharacterX = (n) => {
    setCharacterX(n);
  }
  
  const updateCharacterY = (n) => {
    setCharacterY(n)
  }

  const addQuest=(questTrack1,questTrack2,questIcon)=>{
    console.log(questIcon.height)
    if(!questTrack2){
      setQuests(quests.push(questTrack1))
    }
    else{
      setQuests(quests.push([questTrack1,questTrack2]))
    }
  }
  
  return(
    <Context.Provider value={{stage,updateStage,characterX,characterY,updateCharacterX,updateCharacterY,moveAllowed,allowMove,quests,addQuest}}>
      {children}
    </Context.Provider>
  )
}

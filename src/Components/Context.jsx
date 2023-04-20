import React, { createContext, useState } from "react"

export const Context=createContext()

export const ContextProvider=({children})=>{
  const [stage, setStage] = useState(0)
  const [characterX, setCharacterX] = useState(520)
  const [characterY, setCharacterY] = useState(370)
  const [moveAllowed,setMoveAllowed] = useState(true)
  const [quests,setQuests] = useState([])
  const [eliminated,setEliminated] = useState(0)
  
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

  const addQuest=(questTitle,questTrack1,questTrack2)=>{
    if(!questTrack2){
      setQuests([...quests,[questTitle,questTrack1]])
    }
    else{
      setQuests([...quests,[questTitle,questTrack1,questTrack2]])
    }
  }
  
  const updateEliminated=()=>{
    setEliminated(eliminated+1)
  }
  
  return(
    <Context.Provider value={{stage,updateStage,characterX,characterY,updateCharacterX,updateCharacterY,moveAllowed,allowMove,quests,addQuest,eliminated,updateEliminated}}>
      {children}
    </Context.Provider>
  )
}

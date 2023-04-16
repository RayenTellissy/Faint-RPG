import React, { createContext, useState } from "react"

export const Context=createContext()

export const ContextProvider=({children})=>{
  const [stage, setStage] = useState(0)
  const [characterX, setCharacterX] = useState(900)
  const [characterY, setCharacterY] = useState(400)
  const [npc,setNpc] = useState({})  // NPCs OBJECTS

  const updateStage=(n)=>{
    setStage(n)
  }

  const updateCharacterX = (n) => {
    setCharacterX(n);
  };
  
  const updateCharacterY = (n) => {
    setCharacterY(n);
  };
  return(
    <Context.Provider value={{stage,updateStage,characterX,characterY,updateCharacterX,updateCharacterY}}>
      {children}
    </Context.Provider>
  )
}

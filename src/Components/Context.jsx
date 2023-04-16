import React, { createContext, useState } from "react"

export const Context=createContext()

export const ContextProvider=({children})=>{
  const [stage, setStage] = useState(0)
  const [characterX, setCharacterX] = useState(900)
  const [characterY, setCharacterY] = useState(400)
  const [moveAllowed,setMoveAllowed]= useState(true)

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

  
  return(
    <Context.Provider value={{stage,updateStage,characterX,characterY,updateCharacterX,updateCharacterY,moveAllowed,allowMove}}>
      {children}
    </Context.Provider>
  )
}

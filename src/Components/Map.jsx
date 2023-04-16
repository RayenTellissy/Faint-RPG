import React, { useContext } from "react"
import { Context } from "./Context.jsx"
import { mapComps } from "./Stages.jsx"



export const Map=()=>{
  const { stage, updateStage }=useContext(Context)
  return (
    mapComps[stage]
  )
}


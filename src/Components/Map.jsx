import React, { useContext } from "react"
import { Context } from "./Context.jsx"
import { mapComps } from "./Stages.jsx"

/*               MAP IMPORTS            */
import Stage0_Map from "../images/Maps/stage0.png"





export const maps=[Stage0_Map]

export const Map=()=>{
  const { stage, updateStage }=useContext(Context)
  return (
    mapComps[stage]
  )
}


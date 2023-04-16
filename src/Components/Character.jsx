import React, { useState, useEffect, useContext } from "react"
import { Context } from "./Context.jsx"
import standDown from "../images/Player/standDown.png"
import walkUp from "../images/Player/walkUp.png"
import walkDown from "../images/Player/walkDown.png"
import walkRight from "../images/Player/walkRight.png"
import walkLeft from "../images/Player/walkLeft.png"



const Character = () => {
  const { characterX, characterY, updateCharacterX, updateCharacterY, moveAllowed }=useContext(Context)
  const [character, setCharacter] = useState(standDown)
  const [velocityRight, setVelocityRight] = useState(3)
  const [velocityLeft, setVelocityLeft] = useState(-3)
  const [velocityUp, setVelocityUp] = useState(-3)
  const [velocityDown, setVelocityDown] = useState(3)
  const [isWPressed, setIsWPressed] = useState(false)
  const [isSPressed, setIsSPressed] = useState(false)
  const [isAPressed, setIsAPressed] = useState(false)
  const [isDPressed, setIsDPressed] = useState(false)

  useEffect(() => {
    // console.log(`CharacterX: ${characterX} , CharacterY: ${characterY}`)
    const handleKeyDown = (event) => {
      if (event.key === "w" || event.key === "z") {
        setCharacter(walkUp)
        setIsWPressed(true)
      }
      if (event.key === "a" || event.key === "q") {
        setCharacter(walkLeft)
        setIsAPressed(true)
      }
      if (event.key === "s") {
        setCharacter(walkDown)
        setIsSPressed(true)
      }
      if (event.key === "d") {
        setCharacter(walkRight)
        setIsDPressed(true)
      }
    }

    const handleKeyUp = (event) => {
      if (event.key === "w" || event.key === "z") {
        setIsWPressed(false)
      }
      if (event.key === "a" || event.key === "q") {
        setIsAPressed(false)
      }
      if (event.key === "s") {
        setIsSPressed(false)
      }
      if (event.key === "d") {
        setIsDPressed(false)
      }
    }

    document.addEventListener("keydown", handleKeyDown)
    document.addEventListener("keyup", handleKeyUp)

    const interval = setInterval(() => {
      var newCharacterX = characterX
      var newCharacterY = characterY

      if (isWPressed && characterY>-10 && moveAllowed) {
        newCharacterY += velocityUp
      }
      if (isSPressed && characterY<805 && moveAllowed) {
        newCharacterY += velocityDown
      }
      if (isAPressed && characterX>300 && moveAllowed) {
        newCharacterX += velocityLeft
      }
      if (isDPressed && characterX<1455 && moveAllowed) {
        newCharacterX += velocityRight
      }

      updateCharacterX(newCharacterX)
      updateCharacterY(newCharacterY)
    }, 16)

    return () => {
      clearInterval(interval)
      document.removeEventListener("keydown", handleKeyDown)
      document.removeEventListener("keyup", handleKeyUp)
    }
  }, [characterX, characterY, isWPressed, isSPressed, isAPressed, isDPressed])

  return (
    <img style={{position: "absolute", height: "100px", transform: `translateX(${characterX}px) translateY(${characterY}px)` }} src={character} />
  )
}

export default Character

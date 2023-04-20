import React, { useState, useEffect, useContext } from "react"
import { Context } from "./Context.jsx"
import standDown from "../images/Player/standDown.png"
import standUp from "../images/Player/standUp.png"
import standRight from "../images/Player/standRight.png"
import standLeft from "../images/Player/standLeft.png"
import walkUp from "../images/Player/walkUpAnimation.gif"
import walkDown from "../images/Player/walkDownAnimation.gif"
import walkRight from "../images/Player/walkRightAnimation.gif"
import walkLeft from "../images/Player/walkLeftAnimation.gif"


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

  //! preloading images
  useEffect(() => {
    const images=[walkUp,walkDown,walkLeft,walkRight]
    images.forEach(src=>{
      const img=new Image()
      img.src=src
    })
  },[])

  useEffect(() => {
     console.log(`CharacterX: ${characterX} , CharacterY: ${characterY}`)
    const handleKeyDown = (event) => {
      if ((event.key.toUpperCase() === "W" || event.key.toUpperCase() === "Z") && moveAllowed) {
        setCharacter(walkUp)
        setIsWPressed(true)
      }
      if ((event.key.toUpperCase() === "A" || event.key.toUpperCase() === "Q") && moveAllowed) {
        setCharacter(walkLeft)
        setIsAPressed(true)
      }
      if (event.key.toUpperCase() === "S" && moveAllowed) {
        setCharacter(walkDown)
        setIsSPressed(true)
      }
      if (event.key.toUpperCase() === "D" && moveAllowed) {
        setCharacter(walkRight)
        setIsDPressed(true)
      }
    }

    const handleKeyUp = (event) => {
      if (event.key.toUpperCase() === "W" || event.key.toUpperCase() === "Z") {
        setIsWPressed(false)
        if(!isSPressed && !isAPressed && !isDPressed){
          setCharacter(standUp)
        }
      }
      if (event.key.toUpperCase() === "A" || event.key.toUpperCase() === "Q") {
        setIsAPressed(false)
        if(!isWPressed && !isSPressed && !isDPressed){
          setCharacter(standLeft)
        }
      }
      if (event.key.toUpperCase() === "S") {
        setIsSPressed(false)
        if(!isWPressed && !isAPressed && !isDPressed){
          setCharacter(standDown)
        }
      }
      if (event.key.toUpperCase() === "D") {
        setIsDPressed(false)
        if(!isWPressed && !isSPressed && !isAPressed){
          setCharacter(standRight)
        }
      }
    }

    document.addEventListener("keydown", handleKeyDown)
    document.addEventListener("keyup", handleKeyUp)

    const interval = setInterval(() => {
      var newCharacterX = characterX
      var newCharacterY = characterY

      if (isWPressed && characterY>-12) {
        newCharacterY += velocityUp
      }
      if (isSPressed && characterY<806) {
        newCharacterY += velocityDown
      }
      if (isAPressed && characterX>-32) {
        newCharacterX += velocityLeft
      }
      if (isDPressed && characterX<1131) {
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
  }, [characterX, characterY, isWPressed, isSPressed, isAPressed, isDPressed,moveAllowed])

  return (
    <img style={{position: "absolute", height: "100px", transform: `translateX(${characterX}px) translateY(${characterY}px)` }} src={character} />
  )
}

export default Character

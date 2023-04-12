import React, { useState, useEffect } from "react"

const Character = () => {
  const [character, setCharacter] = useState("../../src/data/Player/Character/standDown.png")
  const [characterX, setCharacterX] = useState(900)
  const [characterY, setCharacterY] = useState(400)
  const [velocityRight, setVelocityRight] = useState(3)
  const [velocityLeft, setVelocityLeft] = useState(-3)
  const [velocityUp, setVelocityUp] = useState(-3)
  const [velocityDown, setVelocityDown] = useState(3)
  const [isWPressed, setIsWPressed] = useState(false)
  const [isSPressed, setIsSPressed] = useState(false)
  const [isAPressed, setIsAPressed] = useState(false)
  const [isDPressed, setIsDPressed] = useState(false)

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "w" || event.key === "z") {
        setCharacter("../../src/data/Player/Character/walkUp.png")
        setIsWPressed(true)
      }
      if (event.key === "a" || event.key === "q") {
        setCharacter("../../src/data/Player/Character/walkLeft.png")
        setIsAPressed(true)
      }
      if (event.key === "s") {
        setCharacter("../../src/data/Player/Character/walkDown.png")
        setIsSPressed(true)
      }
      if (event.key === "d") {
        setCharacter("../../src/data/Player/Character/walkRight.png")
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
      let newCharacterX = characterX
      let newCharacterY = characterY

      if (isWPressed) {
        newCharacterY += velocityUp
      }
      if (isSPressed) {
        newCharacterY += velocityDown
      }
      if (isAPressed) {
        newCharacterX += velocityLeft
      }
      if (isDPressed) {
        newCharacterX += velocityRight
      }

      setCharacterX(newCharacterX)
      setCharacterY(newCharacterY)
    }, 16)

    return () => {
      clearInterval(interval)
      document.removeEventListener("keydown", handleKeyDown)
      document.removeEventListener("keyup", handleKeyUp)
    }
  }, [characterX, characterY, isWPressed, isSPressed, isAPressed, isDPressed])

  return (
    <div style={{ height: "0px", width: "0px" }}>
      <img style={{ height: "100px", transform: `translateX(${characterX}px) translateY(${characterY}px)` }} src={character} />
    </div>
  )
}

export default Character

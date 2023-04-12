// const inputHandler=(...args)=>{
//   const handleKeyDown = (event) => {
//     if (event.key === "w" || event.key === "z") {
//       args.setCharacter("../../src/data/Player/Character/walkUp.png")
//       args.setIsWPressed(true)
//     }
//     if (event.key === "a" || event.key === "q") {
//       args.setCharacter("../../src/data/Player/Character/walkLeft.png")
//       args.setIsAPressed(true)
//     }
//     if (event.key === "s") {
//       setCharacter("../../src/data/Player/Character/walkDown.png")
//       setIsSPressed(true)
//     }
//     if (event.key === "d") {
//       setCharacter("../../src/data/Player/Character/walkRight.png")
//       setIsDPressed(true)
//     }
//   }
//   const handleKeyUp = (event) => {
//     if (event.key === "w" || event.key === "z") {
//       setIsWPressed(false)
//     }
//     if (event.key === "a" || event.key === "q") {
//       setIsAPressed(false)
//     }
//     if (event.key === "s") {
//       setIsSPressed(false)
//     }
//     if (event.key === "d") {
//       setIsDPressed(false)
//     }
//   }

//   document.addEventListener("keydown", handleKeyDown)
//   document.addEventListener("keyup", handleKeyUp)

//   const interval = setInterval(() => {
//     let newCharacterX = characterX
//     let newCharacterY = characterY

//     if (isWPressed) {
//       newCharacterY += velocityUp
//     }
//     if (isSPressed) {
//       newCharacterY += velocityDown
//     }
//     if (isAPressed) {
//       newCharacterX += velocityLeft
//     }
//     if (isDPressed) {
//       newCharacterX += velocityRight
//     }

//     args.setCharacterX(newCharacterX)
//     args.setCharacterY(newCharacterY)
//   }, 16)

//   return () => {
//     clearInterval(interval)
//     document.removeEventListener("keydown", handleKeyDown)
//     document.removeEventListener("keyup", handleKeyUp)
//   }
// }

// export default inputHandler
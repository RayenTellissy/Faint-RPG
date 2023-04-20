export const transform=(x,y)=>{
  return `translateX(${x}px) translateY(${y}px)`
}

export const questTransform=(characterX,characterY)=>{
  return `translateX(${characterX-100}px) translateY(${characterY+30}px)`
}

export const questInDistance=(fn,characterX,characterY,NPCx,NPCy)=>{
  const left=NPCx-200
  const right=NPCx+200
  const top=NPCy-200
  const bottom=NPCy+200
  
  if(characterX>left && characterX<right && characterY>top && characterY<bottom){
    fn(true)
  }
}

export const triggerStage=(characterX,characterY,triggerTop,triggerBottom,triggerLeft,triggerRight)=>{
  if(characterX>triggerLeft && characterX<triggerRight && characterY>triggerTop && characterY<triggerBottom){
    return true
  }
  return false
}
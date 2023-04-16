export const transform=(x,y)=>{
  return `translateX(${x}px) translateY(${y}px)`
}

export const questTransform=(characterX,characterY)=>{
  return `translateX(${characterX-100}px) translateY(${characterY+30}px)`
}
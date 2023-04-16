import { questTransform } from "../../Handlers/positionHandler.js"
/*               NPC PICTURE IMPORTS             */
import Friendly_Xanafin from "../../images/NPCs/Friendly_Xanafin.png"

const npcPosition=[
  {name: "Xanafin",x: 0,y:0},
  {}
]


const NPCs=[{
  name: "Xanafin",
  src: Friendly_Xanafin,
  questTitle: "Welcome Aboard...",
  quest: "Hello there, Traveller. I was battling and i got injured. can you get me that fruit over there?",
  reward: "Basic Sword, 70xp",
  x: npcPosition[0]["x"],
  y: npcPosition[0]["y"],
  questIcon: {position: "absolute",height: "40px", transform: questTransform(npcPosition[0]["x"],npcPosition[0]["y"])}
}]



export default NPCs
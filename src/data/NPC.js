//! reward images import
import basicSwords from "./Weapons/basicSwords.js"

import { questTransform } from "../Handlers/positionHandler.js"
/*               NPC PICTURE IMPORTS             */
import Friendly_Xanafin from "../images/NPCs/Friendly_Xanafin.png"

const npcPosition=[
  {name: "Xanafin",x: 0,y:0},
  {}
]


const NPCs=[{
  name: "Xanafin",
  src: Friendly_Xanafin,
  x: npcPosition[0]["x"],
  y: npcPosition[0]["y"],
  quest:{
    questTitle: "Welcome Aboard...",
    questContent: "Greetings, adventurer. I have a task that requires a skilled hand such as yours. I have heard of a group of bandits causing trouble on the outskirts of town, and I would like you to take care of them. The town guard has been spread thin lately, and we could use your help in dealing with these miscreants. Are you up for the task?",
    questTrack1: "Bandits killed",
    questTrack2: 4,
    questIcon: {position: "absolute", transform: questTransform(npcPosition[0]["x"],npcPosition[0]["y"])}
  },
  reward: {
    rewardName: "Basic Wooden Sword",
    rewardStats: "10 Damage",
    rewardImage: basicSwords[0],
    rewardGold: 70,
    rewardXP: 100,
  },
}]



export default NPCs
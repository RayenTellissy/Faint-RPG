import React, { useContext, useEffect } from "react"
import { Context } from "./Context.jsx"

const Quest=({quest,reward,viewQuest,addQuest,removeIcon})=>{
  const { allowMove }=useContext(Context)
  useEffect(()=>{
    allowMove()
  },[])
  return(
    <div id="quest-parent">
      <div id="quest-container">
        <h2 id="quest-title">{quest.questTitle}</h2>
        <p id="quest-content">{quest.questContent}</p>
        <div id="reward-container">
          <p id="reward-text">You will receive:</p>
          <p id="reward-name">{reward.rewardName}</p>
          <div id="reward-items">
            <div id="reward-info">
              <div id="reward-content">
                <img src={reward.rewardImage}/>
                <p id="reward-stats">{reward.rewardStats}</p>
              </div>
              <div id="reward-amounts">
                <p id="gold-amount">+{reward.rewardGold} gold</p>
                <p id="exp-amount">+{reward.rewardXP} xp</p>
              </div>
            </div>
          </div>
        </div>
        <div style={{display: "inline-block"}}>
          <button id="accept" onClick={()=>{allowMove();viewQuest();removeIcon();addQuest(quest.questTrack1,quest.questTrack2)}}>Accept</button>
          <button id="decline" onClick={()=>{allowMove();viewQuest()}}>Decline</button>
        </div>
      </div>
    </div>
  )
}

export default Quest
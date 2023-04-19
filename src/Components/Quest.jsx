import React, { useContext, useEffect } from "react"
import { Context } from "./Context.jsx"

const Quest=({questTitle,quest,reward,rewardStats,rewardImage,rewardGold,rewardXP,viewQuest})=>{
  const { allowMove }=useContext(Context)
  useEffect(()=>{
    allowMove()
  },[])
  return(
    <div id="quest-parent">
      <div id="quest-container">
        <h2 id="quest-title">{questTitle}</h2>
        <p id="quest-content">{quest}</p>
        <div id="reward-container">
          <p id="reward-text">You will receive:</p>
          <p id="reward-name">{reward}</p>
          <div id="reward-items">
            <div id="reward-info">
              <div id="reward-content">
                <img src={rewardImage}/>
                <p id="reward-stats">{rewardStats}</p>
              </div>
              <div id="reward-amounts">
                <p id="gold-amount">+{rewardGold} gold</p>
                <p id="exp-amount">+{rewardXP} xp</p>
              </div>
            </div>
          </div>
        </div>
        <div style={{display: "inline-block"}}>
          <button id="accept" onClick={()=>{allowMove();viewQuest()}}>Accept</button>
          <button id="decline" onClick={()=>{allowMove();viewQuest()}}>Decline</button>
        </div>
      </div>
    </div>
  )
}

export default Quest
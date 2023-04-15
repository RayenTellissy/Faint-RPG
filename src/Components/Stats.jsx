import React, { useState, useEffect } from "react"

const Stats = () => {
  const [name, setName] = useState("")
  const [level, setLevel] = useState(1)
  const [xp, setXP] = useState(0)
  const [gold, setGold] = useState(0)

  // useEffect(() => {
  //   setName(prompt("Enter your name"))
  // }, [])

  return (
    <div id="stats">
      <div id="stats-container">
        <p className="stat">
          <span className="stat-label">Name:</span> {name}
        </p>
        <p className="stat">
          <span className="stat-label">Level:</span> {level}
        </p>
        <p className="stat">
          <span className="stat-label">XP:</span> {xp}
        </p>
        <p className="stat">
          <span className="stat-label">Gold:</span> {gold}
        </p>
      </div>
    </div>
  )
}

export default Stats
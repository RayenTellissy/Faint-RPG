import React from "react"
import Stats from "./Components/Stats.jsx";
import Quests from "./Components/Quests.jsx";
import BugReport from "../src/Components/BugReport.jsx"
import { ContextProvider } from "./Components/Context.jsx";
import { Map } from "./Components/Map.jsx";


const App=()=>{

  return (
    <div>
      <ContextProvider>
        <Map/>
        <Stats/>
        <Quests/>
        <BugReport/>
      </ContextProvider>
    </div>
  )
}

export default App;

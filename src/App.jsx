import React from "react"
import Stats from "./Components/Stats.jsx";
import BugReport from "../src/Components/BugReport.jsx"
import { ContextProvider } from "./Components/Context.jsx";
import { Map } from "./Components/Map.jsx";



const App=()=>{
  return (
    <div>
      <ContextProvider>
        <Map/>
        <Stats/>
        <BugReport/>
      </ContextProvider>
    </div>
  )
}

export default App;

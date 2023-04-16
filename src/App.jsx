import React from "react"
import Stats from "./Components/Stats.jsx";
import Character from "./Components/Character.jsx";
import { ContextProvider } from "./Components/Context.jsx";
import { Map } from "./Components/Map.jsx";


// MouseHandler

const App=()=>{
  return (
    <div>
      <ContextProvider>
        <Map/>
        <Stats/>
      </ContextProvider>
    </div>
  )
}

export default App;

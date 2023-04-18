import React, { useEffect } from "react"
import Stats from "./Components/Stats.jsx";
import BugReport from "../src/Components/BugReport.jsx"
import { ContextProvider } from "./Components/Context.jsx";
import { Map } from "./Components/Map.jsx";
import axios from "axios";
const url="https://faintrpgbugreport.onrender.com/bugs"


const App=()=>{
/** 
 *  ? : experimental get from bugreport server, to turn on server */
  useEffect(()=>{
    axios.get(url)
    setInterval(() => {
      axios.get(url)
    }, 300000); 
  })

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

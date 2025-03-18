import React from "react"
import Home from "./Pages/Home"
import Second from "./Pages/Second"
import Testimonials from "./Pages/Testimonials"
import Collections from "./Pages/Collections"
import Conlast from "./Components/Conlast"
import Conimg from "./Components/Conimg"


function App() {
 

  return (
    <div className="overflow-auto" style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}>

    <Home/>
    <Second/>
    <Collections/>
    <Testimonials/>
    <Conimg/>
    <Conlast/>
    

    
    </div>
  )
}

export default App

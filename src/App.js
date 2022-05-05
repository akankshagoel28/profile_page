import React from "react"
import About from "./components/about"
import Interests from "./components/interests"
import Footer from "./components/footer"
import Info from "./components/info"
import Laura from "./components/Rectangle 90.png"

export default function App() {
  return (
      <div className="container">
        <img src={Laura} className="profilepic"></img>
        <div className="container2">
        <Info /></div>
        <div className="container1">
        <About />
        <Interests />
        </div>
        <Footer />
      </div>
  )
}



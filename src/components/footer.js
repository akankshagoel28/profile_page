import React from "react"
import twitter from "./Twitter Icon.png"
import insta from "./Instagram Icon.png"
import fbk from "./Facebook Icon.png"
import git from "./GitHub Icon.png"
export default function Footer(){
    return (
        <div className="footer">
            <img src={twitter}></img>
            <img src={insta}></img>
            <img src={fbk}></img>
            <img src={git}></img>
        </div>
    )
}
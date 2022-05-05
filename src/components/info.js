import React from "react";
import demo from  "./Vector.svg" 
import demo2 from "./Icon.svg"
export default function Info(){
    return(
        <>
        <div className="name"><h2>Laura Smith</h2>
        <h4>Frontend Developer</h4>
        <p>laurasmith.website</p></div>
        <div className="buttons"><button id="b1"><div className="buttonalign"><img className="images" src={demo2}/>Email</div></button> 
        <button id="b2"><div class="buttonalign"><img classname="images" src={demo}/>Linkedin</div></button></div>
        </>)
}
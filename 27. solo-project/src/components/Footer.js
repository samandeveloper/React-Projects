import React from "react"
import twitterIcon from "../images/Twitter Icon.png"
import facebookIcon from "../images/Facebook Icon.png"
import intagramIcon from "../images/Instagram Icon.png"
import githubIcon from "../images/GitHub Icon.png"

function Footer(){
    return(
        <div className="footer">   
            <img src={twitterIcon} className="twitterIcon"/>
            <img src={facebookIcon} className="facebookIcon"/>
            <img src={intagramIcon} className="instagramIcon"/>
            <img src={githubIcon} className="githubIcon"/>
        </div>
    )
}

export default Footer
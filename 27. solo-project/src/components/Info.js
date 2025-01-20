import React from "react"
import Rectangle from "../images/Rectangle 90.png"
//import the font awsome in the index.js or here 
import '/node_modules/font-awesome/css/font-awesome.min.css'; 
function Info(){
    return(
        <div className="total">
            <img className="image"
            src={Rectangle}
            />
            <h2 className="name">Laura Smith</h2>
            <h4 className="title">Frontend Developer</h4>
            <p className="website">laurasmith.website</p>
            <button className="emailButton"><i className="fa fa-envelope"></i>&nbsp;<span>Email</span></button>
            <button className="linkedinButton"><i className="fa fa-linkedin"></i>&nbsp;<span> Linkedin</span></button>
        </div>
    )
}

export default Info
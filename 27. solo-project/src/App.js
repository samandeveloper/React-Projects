import React from "react"
import Info from "./components/Info.js"
import About from "./components/About.js"
import Interests from "./components/Interests.js"
import Footer from "./components/Footer.js"

function App(){
    return(
        <div>
            <div className="total">
                <Info />
                <About />
                <Interests />
            </div>
            <Footer />
        </div>
    )
}

export default App
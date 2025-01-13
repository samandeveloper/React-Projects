//way1:using rgb

// import React, { useState, useEffect } from 'react'
// import rgbToHex from './utils'

// //in each color we have rgb (is an array) and weight and we add the index parameter ourself
// //we can use props instead of destructuring here
// //rgb and weight properties are inside the values.js library
// //we can call the below property hex or anything like hexColor
// const SingleColor = ({rgb,weight,index}) => {

//   const [alert,setAlert] = useState(false)  //this state is just for receiving alert-nothing necessary
  
//   console.log(rgb)  //e.g. [3,3,3]
//   const bcg = rgb.join(",")   //seperate the 3 part of rgb with ,
//   console.log(bcg)    //e.g. 3,3,3

//   const hex = rgbToHex(...rgb)

//   return (
//     // we have a className of color
//     <article className="color" style={{ backgroundColor: `rgb(${bcg})` }}>
//       <p className='percent-value'>{weight}%</p>
//       {/* we have hex property that we can use instead of rgb but this is not showing the hex colors */}
//       {/* <p className='color-value'>{hex}</p>   */}
//       <p className='color-value'>{hex}</p> 
//     </article>
//   )
// }

// export default SingleColor



//way2: using hex--we don't need utils.js

import React, { useState, useEffect } from 'react'



const SingleColor = ({hexColor,weight,index}) => {

  const [alert,setAlert] = useState(false)  //this state is for the message of the "copied to clipboard"
  console.log(hexColor)

  //click on the color to copy text to the clipboard
  const handleClipboardText = () =>{
    setAlert(true);
    navigator.clipboard.writeText(`#${hexColor}`)    //navigator is an object and writeText is a method--this line is js for copying text to clipboard
  }

  //to remove the clipboard message--we use setTimeout not setInterval since setTimeout do the function once but setInterval do it repeatedly
  useEffect(()=>{
    let clipBoard = setTimeout(()=>{
      setAlert(false)   //all the "copied to clipboard" must be disappear except the one with the message then remove the one with the message after 3s
    },3000)
    return(()=>{   //with return we do the cleaning--3s cleaning happens in the above line not here
      clearTimeout(clipBoard)
    })
  },[alert])    //once the alert changes this setTimeOut will work




  return (
    
    // <article className="color" style={{ backgroundColor: `#${hexColor}` }}>
    //instead of the above line we write a below line--we add two classNames with condition--if we are on darker colors (darker than 10% ) then we change what we write on the color from black to white
    //we pass index={index in App.js}
    <article className={`color ${index>10 && "color-light"}`} style={{ backgroundColor: `#${hexColor}` }} onClick={handleClipboardText}>
      <p className='percent-value'>{weight}%</p>
      <p className='color-value'>#{hexColor}</p> 

      {/* adding the color to the clipboard and write "copied to clipboard" and after 3 seconds the message will be disappear --we use alert state */}
      {alert && <p className='alert'>copied to clipboard</p>}

    </article>
  )
}

export default SingleColor
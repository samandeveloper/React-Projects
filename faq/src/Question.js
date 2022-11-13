import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

const Question = ({title,info}) => {
  const[showInfo,setShowInfo] = useState(false)
  return(
    <article className='question'>
      <header>
        <h4>{title}</h4>
        {/* doing the toggle on click on + image in the line below */}
        <button className='btn' onClick={() => setShowInfo(!showInfo)}>{showInfo === true ? <AiOutlineMinus/> : <AiOutlinePlus/>}</button>
      </header>
      {/* if the state is true then show the info (answer) */}
      {showInfo === true &&  <p>{info}</p>}
    </article>
  )

};

export default Question;
